import { CartProvider } from '../../context-providers/cart-provider'
import SiteHeader from '../site-header/SiteHeader'

export default function Layout(props) {
  return (
    <CartProvider>
      <SiteHeader user={props.user} />
      {props.children}
    </CartProvider>
  )
}
