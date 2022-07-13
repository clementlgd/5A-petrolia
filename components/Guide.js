/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Guide.module.css'

import DownloadButton from "../components/DownloadButton"

const Guide = () => (
  <div className={styles.container}>
    <h2 className={styles.subtitle}>Guide d'utilisation</h2>
    <DownloadButton />
  </div>
)

export default Guide