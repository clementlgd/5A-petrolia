import styles from '../styles/Product.module.css'

import Button from "./Button"

const ProductCard = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.img}>
    </div>
    <h2 className={styles.name}>{data.name}</h2>
    <div className={styles.subContainer}>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.pointSeparator} />
      <p className={styles.price}>{data.price}</p>
    </div>
    <Button />
  </div>
)

export default ProductCard