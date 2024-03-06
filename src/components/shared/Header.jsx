'use strict'

import styles from '@styles/Header.module.css'
import Logo from './Logo'
import Menu from './Menu'
import BurgerButton from './BurgerButton'

export default function Header() {
    return (
        <header className={styles.Header}>
            <div className="container">
                <Logo />
                <Menu />
                <BurgerButton />
            </div>
        </header>
    )
}
