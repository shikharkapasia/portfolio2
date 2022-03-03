import React from 'react'
import {images} from '../../constants';
import styles from './Navbar.module.scss';
import appStyles from '../../App.scss';
const Navbar = () => {
  return (
    <nav className={styles.app__Navbar}>
      <div className={styles.app__navbar_logo}>
        <img src = {images.logo} alt = 'logo'/>
      </div>
      <ul className={styles.app__navbar_links}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item)=>
         <li className={`${appStyles.app__flex} ${appStyles.p_text}`} key={'link=${item}'}>
           <div />
           <a href={'#${item}'}>{item}</a>
         </li>
        )}
      </ul>

    </nav>
    
  )
}

export default Navbar