import styles from '../styles/Products.module.css'
import ProductCard from "./ProductCard"

const productsData = [
  {
    id: 0,
    name: "Petroleum bagpack",
    description: "description",
    price: "₦ 250,00",
    image: "/images/product-petroleum-removebg.png"
  },
  {
    id: 1,
    name: "Petroleum X Æ A-Ⅻ",
    description: "description",
    price: "₦ 450,00",
    image: "/images/product-2-petroleum.png"
  },
  {
    id: 2,
    name: "Petroleum car",
    description: "description",
    price: "₦ 1200,00"
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