'use strict'

import reactLogo from '@assets/img/react.svg'
import styles from '@styles/Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className={styles.Logo}>
            <Link to={`${__BASE_URL__}`}>
                <img src={reactLogo} className={`${styles.logoImgage}`} alt="AleroRestaurant logo" />
                <span className={`${styles.logoText}`}>
                    Alero<span>Restaurant</span>
                </span>
            </Link>
        </div>
    )
}
