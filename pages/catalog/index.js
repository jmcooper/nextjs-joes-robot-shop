import { useRouter } from 'next/router'
import { MongoClient, ServerApiVersion } from 'mongodb'

import styles from './Catalog.module.scss'
import { useCartContext } from '../../context-providers/cart-provider'
import ProductDetails from '../../components/product-details/ProductDetails'
import ActiveLink from '../../components/active-link/ActiveLink'

export async function getStaticProps() {
  const uri = process.env.MONGODB_CONNECTION_STRING;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const collection = client.db("joes-robot-shop").collection("products");

  const products = await collection.find({}).toArray();

  client.close();

  return { props: { products }, revalidate: 10 }
}

export default function Catalog({ products }) {
  const router = useRouter()
  const { cart, cartDispatch } = useCartContext()

  const filter = router.query.filter
  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products

  function addToCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = [...cart.products, product]
    fetch('/api/cart', { method: 'POST', body: JSON.stringify(newCart), headers: { 'Content-Type': 'application/json' }, })
      .then(() => cartDispatch({ type: 'updateCart', payload: newCart }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <ActiveLink href={{ pathname: '/catalog', query: { filter: 'Heads' } }} className="button">
          Heads
        </ActiveLink>
        <ActiveLink href={{ pathname: '/catalog', query: { filter: 'Arms' } }} className="button">
          Arms
        </ActiveLink>
        <ActiveLink href={{ pathname: '/catalog', query: { filter: 'Torsos' } }} className="button">
          Torsos
        </ActiveLink>
        <ActiveLink href={{ pathname: '/catalog', query: { filter: 'Bases' } }} className="button">
          Bases
        </ActiveLink>
        <ActiveLink href='/catalog' className="button" exact={true}>
          All
        </ActiveLink>
      </div>

      <ul className={styles.products}>
        {filteredProducts.map((product, index) => (
          <li className={styles.productItem} key={index}>
            <ProductDetails product={product}>
              <button className='cta' onClick={() => addToCart(product)}>
                Buy
              </button>
            </ProductDetails>
          </li>
        ))}
      </ul>
    </div >
  )
}