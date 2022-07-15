import styles from '../styles/Button.module.css'
import Link from 'next/link'

const DownloadButton = () => (
  <a href="/pdf/Guide-utilisation-Genesis-Backpack.pdf" target="_blank" className={styles.downloadButtoncontainer}>Télécharger</a>
)

export default DownloadButton