import Image from 'next/image'
import Link from 'next/link'

import styles from './Home.module.scss'
import {
  headFriendly,
  headBigEye,
  headShredder,
  armArticulatedClaw,
  torsoGauged,
  baseSpring,
} from '../../public/images/robot-images'

import robotApocalypse from './robot-apocalypse.png'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>

      <div className={styles.promoted}>
        <span className={styles.image}>
          <Image src={headFriendly} alt='Friendly Robot Head' />
        </span>
        <div className={styles.promoText}>
          <div className={styles.promoMainText}>
            DISPELL THE ROBOT APOCALYPSE MYTH
          </div>
          <div className={`${styles.promoSubText} cta`}>
            <div>SAVE 20% ON OUR FRIENDLIEST</div>
            <div>ROBOT HEADS</div>
          </div>
        </div>
        <span className={styles.image}>
          <Image src={headBigEye} alt='Big Eye Head' />
        </span>
      </div>

      <ul className={styles.robotPartsCta}>
        <li className={styles.part}>
          <Link href={{ pathname: '/catalog', query: { filter: 'Heads' } }}>
            <a>
              <div className={styles.image}><Image src={headShredder} alt='Robot Heads' width={180} height={180} /></div>
              <div>ROBOT HEADS</div>
            </a>
          </Link>
        </li>
        <li className={styles.part}>
          <Link href={{ pathname: '/catalog', query: { filter: 'Arms' } }}>
            <a>
              <div className={styles.image}><Image src={armArticulatedClaw} alt='Robot Arms' width={180} height={180} /></div>
              <div>ROBOT ARMS</div>
            </a>
          </Link>
        </li>
        <li className={styles.part}>
          <Link href={{ pathname: '/catalog', query: { filter: 'Torsos' } }}>
            <a>
              <div className={styles.image}><Image src={torsoGauged} alt='Robot Torsos' width={180} height={180} /></div>
              <div>ROBOT TORSOS</div>
            </a>
          </Link>
        </li>
        <li className={styles.part}>
          <Link href={{ pathname: '/catalog', query: { filter: 'Bases' } }}>
            <a>
              <div className={styles.image}><Image src={baseSpring} alt='Robot Bases' width={180} height={180} /></div>
              <div>ROBOT BASES</div>
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.whitePaper}>
        <div className={styles.image}>
          <Image src={robotApocalypse} alt='Robot Apocalyse' />
        </div>
        <div className={styles.text}>
          <div>
            <div className={`${styles.headerText} cta`}>
              Will they kill us all?
            </div>
            <div className={styles.subText}>
              <p>10 Myths About the</p>
              <p>Robot Apocalyse</p>
            </div>
          </div>
          <div className={styles.largeText}>WHITE PAPER</div>
          <Link href='/'>
            <a className={styles.learnMore}>Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
