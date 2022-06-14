import Head from 'next/head'

import { CartProvider } from '../../context-providers/cart-provider'
import SiteHeader from '../site-header/SiteHeader'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Joe&apos;s Robot Shop</title>
        <meta name="description" content="Buy robot parts and build awesome robots!" />
      </Head>
      <CartProvider>
        <SiteHeader user={props.user} />
        {props.children}
      </CartProvider>
    </>
  )
}
