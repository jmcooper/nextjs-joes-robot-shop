import { useState, useEffect } from 'react'
import { MongoClient, ServerApiVersion } from 'mongodb'

import styles from './Catalog.module.scss'
import ProductDetails from '../../components/product-details/ProductDetails'
import Cart from '../../components/cart'

export async function getStaticProps() {
  const uri = process.env.MONGODB_CONNECTION_STRING;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const collection = client.db("album-shop").collection("albums");

  const albums = await collection.find({}).toArray();

  client.close();

  return { props: { products: albums }, revalidate: 10 }
}

export default function Catalog({ products }) {
  const [cart, setCart] = useState({ products: [] })

  function fetchCart() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => setCart(data))
  }

  useEffect(() => fetchCart(), [])

  function addToCart(product) {
    console.log('adding')
    const newCart = { _id: cart._id }
    newCart.products = [...cart.products, { ...product }]
    setCart(newCart)
    fetch('/api/cart', { method: 'POST', body: JSON.stringify(newCart), headers: { 'Content-Type': 'application/json' }, })
      .catch(() => setCart(cart))
  }

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = cart.products.filter(item => item !== product)
    setCart(newCart)
    fetch('/api/cart', { method: 'POST', body: JSON.stringify(newCart), headers: { 'Content-Type': 'application/json' }, })
      .catch(() => setCart({ type: 'updateCart', payload: cart }))
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div >
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          <Cart cartItems={cart.products} removeItemFromCart={removeItemFromCart} />
        </div>
      </div>
    </>
  )
}