import React, {useState} from 'react'
import { GoThreeBars } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';
import styles from './style.module.css'

const SearchBar = () => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true)
    console.log('focused!')

  }

  const handleBlur = () => {
    setIsFocused(false)
    
    console.log('blurred!')

  }



  return (
    <section className={styles.search_bar}>
          <div className={styles.search_bar_container}>
              <div className={`${styles.search_icon} ${isFocused ? styles.hidden : ''}`}>
                  <RiSearchLine />
              </div>

              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text" 
                className={styles.search_input} 
                placeholder="Buscar un sitio"
                id="search_input"
                />

              <div className={styles.item_menu}>
                <GoThreeBars />
              </div>
          </div>
      </section>
  )
}

export default SearchBar;
