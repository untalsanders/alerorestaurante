'use strict'

import styles from '@styles/SocialLinks.module.css'
import { Link } from 'react-router-dom'

const links = [
    {
        name: 'Facebook',
        href: '#',
        icon: 'facebook-f',
    },
    {
        name: 'Instgram',
        href: '#',
        icon: 'instagram',
    },
    {
        name: 'Twitter',
        href: '#',
        icon: 'x-twitter',
    },
    {
        name: 'WhatsApp',
        href: '#',
        icon: 'whatsapp',
    },
    {
        name: 'YouTube',
        href: '#',
        icon: 'youtube',
    },
]

export default function SocialLinks() {
    return (
        <section className={styles.SocialLinks}>
            {links.map((link) => (
                <Link key={link.name} to={link.href}>
                    <i className={`fa-brands fa-${link.icon}`}></i>
                </Link>
            ))}
        </section>
    )
}
