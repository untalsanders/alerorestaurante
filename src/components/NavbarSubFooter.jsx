'use strict'

import styles from '@styles/NavbarSubFooter.module.css'
import { Link } from 'react-router-dom'

export default function NavbarSubFooter() {
    return (
        <section className={styles.NavbarSubFooter}>
            <Link to={`${__BASE_URL__}/`}>Home</Link>
            <Link to={`${__BASE_URL__}/about`}>About</Link>
            <Link to={`${__BASE_URL__}/menus`}>Menus</Link>
            <Link to={`${__BASE_URL__}/locations`}>Locations</Link>
            <Link to={`${__BASE_URL__}/contact`}>Contact</Link>
        </section>
    )
}
