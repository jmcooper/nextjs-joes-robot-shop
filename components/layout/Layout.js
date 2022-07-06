import Head from 'next/head'

import SiteHeader from '../site-header/SiteHeader'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Joe&apos;s Robot Shop</title>
        <meta name="description" content="Buy robot parts and build awesome robots!" />
      </Head>
      <SiteHeader user={props.user} />
      {props.children}
    </>
  )
}
