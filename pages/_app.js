import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { useFetchUser } from '../utils/user'

function MyApp({ Component, pageProps }) {
  const { user } = useFetchUser()

  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
