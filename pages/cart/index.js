import { useCartContext } from '../../context-providers/cart-provider'
import ProductDetails from '../../components/product-details/ProductDetails'
import { currencyFormat } from '../../utils/numericFormatters'
import styles from './Cart.module.scss'

export default function Cart() {
  const { cart, cartDispatch } = useCartContext()

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = cart.products.filter(item => item !== product)
    cartDispatch({ type: 'updateCart', payload: newCart })
    fetch('/api/cart', { method: 'POST', body: JSON.stringify(newCart), headers: { 'Content-Type': 'application/json' }, })
      .catch(() => cartDispatch({ type: 'updateCart', payload: cart }))
  }

  function getCartTotal() {
    const totalCost = cart.products.reduce((prev, curr) => {
      const itemPrice = curr.discount === 0 ? curr.price : curr.price * (1 - curr.discount)
      return prev + itemPrice
    }, 0)

    return currencyFormat(totalCost)
  }

  function renderEmptyCart() {
    return (
      <div className={styles.emptyCart}>You have no items in your cart</div>
    )
  }

  function renderCart() {
    return (
      <ul className={styles.cart}>
        {cart.products.map((product, i) => (
          <li className={styles.cartItem} key={i}>
            <ProductDetails product={product} >
              <button onClick={() => removeItemFromCart(product)}>Remove</button >
            </ProductDetails >
          </li >
        ))}
      </ul >
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your Cart</h1>
      {cart.products.length > 0 ? renderCart() : renderEmptyCart()}
      <div className={styles.total}>Total: {getCartTotal()}</div>
    </div >
  )
}
