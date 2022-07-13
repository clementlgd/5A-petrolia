import styles from '../styles/Product.module.css'
import Image from 'next/image'

import Button from "./Button"

const ProductCard = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.img}>
      {data.image && (
        <Image
          src={data.image}
          alt="product image"
          width="580px"
          height="350px"
        />
      )}
      {!data.image && (
        <p className={styles.soonText}>Bientôt disponible</p>
      )}
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