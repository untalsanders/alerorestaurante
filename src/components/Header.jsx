'use strict'

import styles from '@styles/Header.module.css'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
    return (
        <header className={styles.Header}>
            <div className="container">
                <Logo />
                <Menu />
            </div>
        </header>
    )
}
