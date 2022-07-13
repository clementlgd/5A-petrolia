import styles from '../styles/Products.module.css'
import ProductCard from "./ProductCard"

const productsData = [
  {
    id: 0,
    name: "Petrolium Sac à dos",
    description: "description",
    price: "₦ 41,700"
  },
  {
    id: 1,
    name: "Petrolium Bateaux",
    description: "description",
    price: "₦ 41,700"
  },
  {
    id: 2,
    name: "Petrolium Voiture",
    description: "description",
    price: "₦ 41,700"
  }
]

const Products = () => (
  <div className={styles.container}>
    <h2 className={styles.subtitle}>Nos produits</h2>
    <div className={styles.productsContainer}>
      {productsData.map(item => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  </div>
)

export default Products