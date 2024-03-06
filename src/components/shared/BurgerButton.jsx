'use strict'

import styles from '@styles/BurgerButton.module.css'

export default function BurgerButton() {
    return (
        <button className={styles.BurgerButton}>
            <i className="fa-solid fa-bars"></i>
        </button>
    )
}
