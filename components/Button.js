import styles from '../styles/Button.module.css'
import Link from 'next/link'

const Button = () => (
  <Link href="/" className={styles.container}>
    <div className={styles.container}>
      <a className={styles.text}>Acheter</a>
    </div>
  </Link>
)

export default Button