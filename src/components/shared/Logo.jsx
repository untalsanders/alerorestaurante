'use strict'

import reactLogo from '@assets/img/react.svg'
import styles from '@styles/Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.Logo}>
            <a href="/">
                <img src={reactLogo} className={`${styles.logoImgage}`} alt="AleroRestaurant logo" />
                <span className={`${styles.logoText}`}>
                    Alero<span>Restaurant</span>
                </span>
            </a>
        </div>
    )
}
