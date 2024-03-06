'use strict'

import styles from '@styles/SubFooter.module.css'
import logoAlero from '@assets/img/logo.svg'

export default function SubFooter() {
    return (
        <div className={styles.SubFooter}>
            <div className="container">
                <section className="brand">
                    <img src={logoAlero} />
                    <span className="doubleColor">
                        Alero<span>Restaurante</span>
                    </span>
                </section>
                <section className="links">
                    <a href="/">Inicio</a>
                    <a href="/about">Nosotros</a>
                    <a href="/products">Productos</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contacto</a>
                </section>
                <section className="social">
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </section>
            </div>
        </div>
    )
}
