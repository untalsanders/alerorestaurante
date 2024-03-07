'use strict'

import styles from '@styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const { VITE_APP_URL } = import.meta.env

export default function Navbar() {
    return (
        <nav className={styles.Menu}>
            <Link to={VITE_APP_URL}>Home</Link>
            <Link to={`${VITE_APP_URL}/about`}>About</Link>
            <Link to={`${VITE_APP_URL}/menus`}>Menus</Link>
            <Link to={`${VITE_APP_URL}/locations`}>Locations</Link>
            <Link to={`${VITE_APP_URL}/contact`}>Contact</Link>
        </nav>
    )
}
