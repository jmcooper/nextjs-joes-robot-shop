import { MongoClient, ServerApiVersion } from 'mongodb'
import { v4 as newGuid } from 'uuid'
import { getCookie, setCookies } from 'cookies-next'

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const cookieCartId = getCookie('cartId', { req, res })
      if (cookieCartId) {
        const cart = await getCart(cookieCartId)
        res.status(200).json(cart)
      }
      else {
        process.stdout.write('here2')
        const cartId = newGuid()
        const thirtyDays = 30 * 24 * 60 * 60

        setCookies(' cartId', cartId, { req, res, maxAge: thirtyDays })

        return res.status(200).json({ _id: cartId, products: [] })
      }
    }
    else if (req.method === 'POST') {
      const cart = req.body
      if (!cart._id || !cart.products)
        return res.status(500).json({ error: 'Invalid Cart' })

      try {
        await saveCart(cart)
        res.status(200).json(cart)
      }
      catch (error) {
        process.stdout.write('error', error)
        return res.status(500).json({ error: 'Error saving cart' })
      }
    }
  }
  catch (error) {
    process.stdout.write('error', error)
  }
}

async function getCart(cartId) {
  const uri = process.env.MONGODB_CONNECTION_STRING
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("joes-robot-shop").collection("carts")
  const carts = await collection.find({ _id: cartId }).toArray()
  const cart = carts[0]
  client.close()
  return cart
}

async function saveCart(cart) {
  const uri = process.env.MONGODB_CONNECTION_STRING
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("joes-robot-shop").collection("carts")

  await collection.updateOne({ _id: cart._id }, { $set: cart }, { upsert: true })

  client.close()
}

