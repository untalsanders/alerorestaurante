'use strict'

import styles from '@styles/NavbarSubFooter.module.css'
import { Link } from 'react-router-dom'

export default function NavbarSubFooter() {
    return (
        <section className={styles.NavbarSubFooter}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menus">Menus</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/contact">Contact</Link>
        </section>
    )
}
