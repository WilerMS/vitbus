import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from './style.module.css'

const Map = () => {
  return (
    <section className={styles.map_section}>
        <MapContainer 
            id="map"
            className={styles.map}
            center={[42.849119, -2.672417]} 
            zoom={5}
            zoomControl={false}
            minZoom={4}
            attributionControl={false}
        >
            <TileLayer  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        </MapContainer>
    </section>
  )
}

export default Map;
