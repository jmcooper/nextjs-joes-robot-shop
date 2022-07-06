import { useState, useEffect } from 'react'
import { MongoClient, ServerApiVersion } from 'mongodb'

import styles from './Catalog.module.scss'
import ProductDetails from '../../components/product-details/ProductDetails'
import ActiveLink from '../../components/active-link/ActiveLink'
import Cart from '../../components/cart'

export async function getStaticProps() {
  const uri = process.env.MONGODB_CONNECTION_STRING;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const collection = client.db("joes-robot-shop").collection("products");

  const products = await collection.find({}).toArray();

  client.close();

  return { props: { products }, revalidate: 10 }
}

export default function Catalog({ products }) {
  const [cart, setCart] = useState({ products: [] })

  function fetchCart() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => { console.log('setting cart', data); setCart(data) })
  }

  useEffect(() => fetchCart(), [])

  function addToCart(product) {
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
              <li className={styles.productItem} key={index}>
                <ProductDetails product={product}>
                  <button className='cta' onClick={() => addToCart(product)}>
                    Buy
                  </button>
                </ProductDetails>
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