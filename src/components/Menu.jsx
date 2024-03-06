'use strict'

import styles from '@styles/Menu.module.css'

export default function Menu() {
    return (
        <nav className={styles.Menu}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Locations</a>
            <a href="#">Contact</a>
        </nav>
    )
}
