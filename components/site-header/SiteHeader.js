import Image from 'next/image'

import styles from './SiteHeader.module.scss'
import ActiveLink from '../active-link/ActiveLink'
import UserSignIn from './user-sign-in/UserSignIn'
import logo from './logo.png'

export default function SiteHeader({ user }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}><Image src={logo} alt="" /></div>
          <ActiveLink href='/home'>Home</ActiveLink>
          <ActiveLink href='/catalog'>Catalog</ActiveLink>
        </div>
        <div className={styles.right}>{<UserSignIn user={user} />}</div>
      </div>
    </>
  )
}
