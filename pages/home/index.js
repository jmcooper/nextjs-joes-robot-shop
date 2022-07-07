import Image from 'next/image'
import Link from 'next/link'

import styles from './Home.module.scss'
import {
  whyWeSuffer,
  dearMisery,
} from '../../public/images/albums'

import inspiration from './inspiration.jpg'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>

      <div className={styles.cta}>
        <div className={styles.images}>
          <span className={styles.image}>
            <Image src={whyWeSuffer} alt='Why We Suffer Album' />
          </span>
          <span className={styles.image}>
            <Image src={dearMisery} alt='Dear Misery Album' />
          </span>
        </div>
        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={`${styles.ctaSubText}`}>
            <div>on <em>Custom</em> Album Designs</div>
          </div>
          <button className="buton cta">Shop Now</button>
        </div>
        <div className={styles.images}>
          <span className={styles.image}>
            <Image src={dearMisery} alt='Dear Misery Album' />
          </span>
          <span className={styles.image}>
            <Image src={whyWeSuffer} alt='Why We Suffer Album' />
          </span>
        </div>
      </div>


      <div className={styles.whitePaper}>
        <div className={styles.image}>
          <Image layout="fill" src={inspiration} alt='Robot Apocalyse' />
        </div>
        <div className={styles.text}>
          <div>
            <div className={`${styles.headerText} cta`}>
              Stuck?
            </div>
            <div className={styles.subText}>
              <p>10 Steps to Shatter</p>
              <p>Writer's Block</p>
            </div>
          </div>
          <div className={styles.largeText}>WORKSHOP</div>
          <Link href='/'>
            <a className={styles.learnMore}>Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
