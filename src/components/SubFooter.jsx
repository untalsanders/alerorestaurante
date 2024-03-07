'use strict'

import styles from '@styles/SubFooter.module.css'
import Logo from './Logo'
import NavbarSubFooter from './NavbarSubFooter'
import SocialLinks from './SocialLinks'

export default function SubFooter() {
    return (
        <div className={styles.SubFooter}>
            <div className="container">
                <Logo />
                <NavbarSubFooter />
                <SocialLinks />
            </div>
        </div>
    )
}
