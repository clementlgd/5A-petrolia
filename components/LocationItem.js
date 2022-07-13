import styles from '../styles/LocationItem.module.css'

const LocationItem = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.circle}>
      <p className={styles.circleNumber}>{data.id + 1}</p>
    </div>
    <div className={styles.contentContainer}>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.description}>{data.description}</p>
    </div>
  </div>
)

export default LocationItem