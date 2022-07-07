import { MongoClient, ServerApiVersion } from 'mongodb'
import { v4 as newGuid } from 'uuid'
import { getCookie, setCookies } from 'cookies-next'
import logger from '../../utils/logger'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cookieCartId = getCookie('cartId', { req, res })
      if (cookieCartId) {
        const cart = await getCart(cookieCartId)
        res.status(200).json(cart)
      }
      else {
        const cartId = newGuid()
        const thirtyDays = 30 * 24 * 60 * 60

        setCookies('cartId', cartId, { req, res, maxAge: thirtyDays })

        return res.status(200).json({ _id: cartId, products: [] })
      }
    }
    catch (err) {
      logger.error(err)
      return res.status(500).json('Error retreiving cart')
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
    catch (err) {
      console.error(err)
      logger.error(err)
      return res.status(500).json('Error saving cart')
    }
  }
}

async function getCart(cartId) {
  const uri = process.env.MONGODB_CONNECTION_STRING
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("album-shop").collection("carts")
  const carts = await collection.find({ _id: cartId }).toArray()
  const cart = carts[0]
  client.close()
  return cart
}

async function saveCart(cart) {
  const uri = process.env.MONGODB_CONNECTION_STRING
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("album-shop").collection("carts")

  await collection.updateOne({ _id: cart._id }, { $set: cart }, { upsert: true })

  client.close()
}

