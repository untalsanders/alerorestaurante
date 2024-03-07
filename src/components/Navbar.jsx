'use strict'

import styles from '@styles/Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.Menu}>
            <Link to={__BASE_URL__}>Home</Link>
            <Link to={`${__BASE_URL__}/about`}>About</Link>
            <Link to={`${__BASE_URL__}/menus`}>Menus</Link>
            <Link to={`${__BASE_URL__}/locations`}>Locations</Link>
            <Link to={`${__BASE_URL__}/contact`}>Contact</Link>
        </nav>
    )
}
