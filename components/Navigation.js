import styles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => (
  <div className={styles.container}>
    <Image
      src="/images/genesis-logo.png"
      alt="map"
      width={140}
      height={50}
    />
    <div className={styles.linksContainer}>
      <ul className={styles.linksList}>
        <li className={styles.link}><Link href="/">Home</Link></li>
        <li className={styles.link}><Link href="/">Technology</Link></li>
        <li className={styles.link}><Link href="/">Products</Link></li>
        <li className={styles.link}><Link href="/">Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Navigation