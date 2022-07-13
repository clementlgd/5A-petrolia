import styles from '../styles/Map.module.css'
import Image from 'next/image'

import LocationItem from "./LocationItem"

const locationsData = [
  {
    id: 0,
    title: "Prétrolia n°12 - Port Harcourt",
    description: "15 Herbert Macauley Road, Amadi 500101, Port Harcourt, Nigeria",
  },
  {
    id: 1,
    title: "Prétrolia n°12 - Port Harcourt",
    description: "15 Herbert Macauley Road, Amadi 500101, Port Harcourt, Nigeria",
  },
  {
    id: 2,
    title: "Prétrolia n°12 - Port Harcourt",
    description: "15 Herbert Macauley Road, Amadi 500101, Port Harcourt, Nigeria",
  },
  {
    id: 3,
    title: "Prétrolia n°12 - Port Harcourt",
    description: "15 Herbert Macauley Road, Amadi 500101, Port Harcourt, Nigeria",
  }
]

const Map = () => (
  <div className={styles.container}>
    <h2 className={styles.subtitle}>Trouver un point de dépôt</h2>
    <div className={styles.contentContainer}>
      <div className={styles.leftContainer}>
        {locationsData.map(item => (
          <LocationItem key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.rightContainer}>
        {/* <Image src="/images/map.png" alt="map" layout="fill" objectFit="cover" className={'image'} /> */}
        <Image
          src="/images/map.png"
          alt="map"
          // layout="fill"
          // objectFit="contain"
          width="600%"
          height="430px"
        />
      </div>
    </div>
  </div>
)

export default Map