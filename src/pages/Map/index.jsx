import React from 'react'
import styles from './style.module.css'

import Map from './../../Components/Map/index'
import SearchBar from './../../Components/SearchBar/index'

const MapPage = () => {
  return (
    <div className={styles.map_page}>
      <SearchBar />
      <Map/>
    </div>
  )
}


export default MapPage;