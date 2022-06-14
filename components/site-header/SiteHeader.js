import Image from 'next/image'

import { useCartContext } from '../../context-providers/cart-provider'
import styles from './SiteHeader.module.scss'
import ActiveLink from '../active-link/ActiveLink'
import UserSignIn from './user-sign-in/UserSignIn'
import logo from './logo.png'

export default function SiteHeader() {
  const { cart } = useCartContext()

  let cartDiv =
    cart.products.length === 0 ? null : (
      <div className={styles.cartCount}>
        <div>{cart.products.length}</div>
      </div>
    )

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}><Image src={logo} alt="" /></div>
          <ActiveLink href='/home'>Home</ActiveLink>
          <ActiveLink href='/catalog'>Catalog</ActiveLink>
          <div className={styles.cart}>
            <ActiveLink href='/cart'>Cart</ActiveLink>
            {cartDiv}
          </div>
        </div>
        <div className={styles.right}>{<UserSignIn />}</div>
      </div>
    </>
  )
}
