'use strict'

import styles from '@styles/Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.Menu}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menus">Menus</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
