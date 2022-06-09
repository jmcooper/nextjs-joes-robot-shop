import SiteHeader from '../site-header/SiteHeader'

export default function Layout(props) {
  return (
    <>
      <SiteHeader />
      {props.children}
    </>
  )
}
