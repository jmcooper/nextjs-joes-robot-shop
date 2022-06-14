import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from './UserSignIn.module.scss'
import profilePicture from './profile.png'

export default function UserSignIn({ user }) {
  let [showSignOutMenu, setShowSignOutMenu] = useState(false)

  let signOutMenu = !showSignOutMenu ? null : (
    <div className={styles.signOut}>
      <Link href='/api/signout'><a className="button" onClick={() => setShowSignOutMenu(false)}>Sign Out</a></Link>
    </div>
  )

  const profilePic = user && user.picture ? user.picture : profilePicture;
  return user ? (
    <div className={styles.profile} onClick={() => setShowSignOutMenu(!showSignOutMenu)}>
      <div className={styles.profileImage}>
        <Image
          src={profilePic}
          alt='profile'
          layout='fixed'
          width={40}
          height={40}
        />
        {signOutMenu}
      </div>
      <div>{user.given_name || user.nickname}</div>

    </div>
  ) : (
    <>
      <Link href='/api/signin'><a className='cta'>Sign In</a></Link>
    </>
  )
}
