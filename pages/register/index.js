import Image from 'next/image'

import styles from './Register.module.scss'
import logo from '../../public/images/logo.png'

export default function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.logo}><Image src={logo} alt="" /></div>
        <div className={styles.register}>Register</div>
        <div className={styles.subText}>to acquire awesome bots</div>

        <input
          placeholder="First Name"
          type="text"
        />
        <em className={styles.error}>First Name is required</em>

        <input
          placeholder="Last Name"
          type="text"
        />
        <em className={styles.error}>Last Name is required</em >

        <input
          placeholder="Email Address"
          type="text"
        />
        <em className={styles.error}>Email is required</em >
        <em className={styles.error}>Must be a valid email format</em >
        <input
          placeholder="Password"
          type="password"
        />
        <em className={styles.error}>Password is required</em >

        <div className={styles.buttons}>
          <button type="submit" className={`${styles.button} cta`}>
            Register
          </button>
        </div >
      </form >
    </div >

  )
}
