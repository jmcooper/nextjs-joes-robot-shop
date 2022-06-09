import Image from 'next/image'
import React, { useState } from 'react'

import styles from './UserSignIn.module.scss'
import ActiveLink from '../../active-link/ActiveLink'
import profilePicture from './profile.png'

export default function UserSignIn() {
  let [user, setUser] = useState({})
  let [showSignOutMenu, setShowSignOutMenu] = useState(false)

  function signOut() {
    setUser(null)
    setShowSignOutMenu(false)
  }

  let signOutMenu = !showSignOutMenu ? null : (
    <div className={styles.signOut}>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )

  return user ? (
    <div className={styles.profileImage}>
      <Image
        src={profilePicture}
        onClick={() => setShowSignOutMenu(!showSignOutMenu)}
        alt='profile'
      />
      {signOutMenu}
    </div>
  ) : (
    <>
      <ActiveLink href='user/sign-in'>Sign In</ActiveLink>
      <ActiveLink href='user/register' className='cta'>
        Register
      </ActiveLink>
    </>
  )
}
