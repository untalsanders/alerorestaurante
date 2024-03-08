'use strict'

import styles from '@styles/NavbarSubFooter.module.css'
import { Link } from 'react-router-dom'

const { VITE_APP_URL } = import.meta.env

export default function NavbarSubFooter() {
    return (
        <section className={styles.NavbarSubFooter}>
            <Link to={VITE_APP_URL}>Home</Link>
            <Link to={`${VITE_APP_URL}/about`}>About</Link>
            <Link to={`${VITE_APP_URL}/menus`}>Menus</Link>
            <Link to={`${VITE_APP_URL}/locations`}>Locations</Link>
            <Link to={`${VITE_APP_URL}/contact`}>Contact</Link>
        </section>
    )
}
