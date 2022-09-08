import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar} >
     <Link to="/">   <h2 className={styles.logo}>PuppY LovE</h2></Link>
        <Link to="/search" className={styles.link}>Search</Link>
    </div>
  )
}

export default Navbar