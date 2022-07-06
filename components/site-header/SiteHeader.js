import Image from 'next/image'
import Link from 'next/link'

import styles from './SiteHeader.module.scss'
import ActiveLink from '../active-link/ActiveLink'
import logo from './logo.png'

export default function SiteHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}><Image src={logo} alt="" /></div>
          <ActiveLink href='/home'>Home</ActiveLink>
          <ActiveLink href='/catalog'>Catalog</ActiveLink>
        </div>
        <div className={styles.right}>{<a href="" className="cta">Sign In</a>}</div>
      </div>
    </>
  )
}
