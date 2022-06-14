import Image from 'next/image'

import styles from './SignIn.module.scss'
import logo from '../../public/images/logo.png'

export default function SignIn() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.logo}><Image src={logo} alt="" /></div>
        <div className={styles.signIn}>Sign In</div>
        <div className={styles.subText}>to acquire awesome bots</div>
        <input
          name="email"
          placeholder="Email Address"
          type="text"
          required
        />
        <em className={styles.error}> Email is required</em >
        <em className={styles.error}> Must be a valid email format</em >
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <em className={styles.error}> Password is required</em >
        <div className={styles.buttons}>
          <button type="submit" className="button cta">
            Sign In
          </button>
        </div>
        <div className={styles.signInError}>
          Sign - In Failed.Please try again.
        </div>
      </form >
    </div >
  )
}
