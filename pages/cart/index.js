import React, { useState } from 'react'

import ProductDetails from '../../components/product-details/ProductDetails'
import { currencyFormat } from '../../utils/numericFormatters'
import styles from './Cart.module.scss'

export default function Cart() {
  const [cartItems, updateCartItems] = useState([
    {
      id: 1,
      description:
        'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
      name: 'Large Cyclops',
      imageName: 'head-big-eye.png',
      category: 'Heads',
      price: 1220.5,
      discount: 0.2,
    },
    {
      id: 17,
      description: 'A spring base - great for reaching high places.',
      name: 'Spring Base',
      imageName: 'base-spring.png',
      category: 'Bases',
      price: 1190.5,
      discount: 0,
    },
    {
      id: 6,
      description:
        'An articulated arm with a claw -- great for reaching around corners or working in tight spaces.',
      name: 'Articulated Arm',
      imageName: 'arm-articulated-claw.png',
      category: 'Arms',
      price: 275,
      discount: 0,
    },
  ])

  function renderEmptyCart() {
    return (
      <div className={styles.emptyCart}>You have no items in your cart</div>
    )
  }

  function removeItemFromCart(cartItem) {
    updateCartItems(cartItems.filter(item => item !== cartItem))
  }

  function renderCartItem(cartItem, i) {
    return (
      <li className={styles.cartItem} key={i}>
        <ProductDetails product={cartItem} >
          <button onClick={() => removeItemFromCart(cartItem)}>Remove</button >
        </ProductDetails >
      </li >
    )
  }

  function renderCart() {
    return (
      <ul className={styles.cart}>
        {cartItems.map(renderCartItem)}
      </ul >
    )
  }

  function getCartTotal() {
    const totalCost = cartItems.reduce((prev, curr) => {
      const itemPrice = curr.discount === 0 ? curr.price : curr.price * (1 - curr.discount)
      return prev + itemPrice
    }, 0)

    return currencyFormat(totalCost)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your Cart</h1>
      {cartItems.length > 0 ? renderCart() : renderEmptyCart()}
      <div className={styles.total}>Total: {getCartTotal()}</div>
    </div >
  )
}
