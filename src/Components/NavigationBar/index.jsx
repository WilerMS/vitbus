import React from 'react'
import { RiHome2Line, RiBus2Line } from 'react-icons/ri'
import { HiOutlineUserCircle, HiOutlineMap } from 'react-icons/hi'
import styles from './style.module.css'

import Link from './Link'

const NavigationBar = () => {
  return (
    <section className={styles.navigation}>
        <div className={styles.navigation_container}>
            <Link className={styles.navigation_item} Icon={RiHome2Line} page="/home" />
            <Link className={styles.navigation_item} Icon={HiOutlineMap} page="/map" />
            <Link className={styles.navigation_item} Icon={RiBus2Line} page="/transport" />
            <Link className={styles.navigation_item} Icon={HiOutlineUserCircle} page="/user" />
        </div>
    </section>
  )
}


export default NavigationBar