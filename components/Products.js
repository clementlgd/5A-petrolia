import styles from '../styles/Products.module.css'
import ProductCard from "./ProductCard"

const productsData = [
  {
    id: 0,
    name: "Petroleum bagpack",
    description: "description",
    price: "₦ 41,700",
    image: "/images/product-petroleum-removebg.png"
  },
  {
    id: 1,
    name: "Petroleum boat",
    description: "description",
    price: "₦ 41,700"
  },
  {
    id: 2,
    name: "Petroleum car",
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