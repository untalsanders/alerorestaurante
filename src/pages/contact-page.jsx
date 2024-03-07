'use strict'

export function ContactPage() {
    return (
        <div className="contact">
            <div className="contact-hero">
                <div className="container">
                    <h2 className="titulo">Contacto</h2>
                </div>
            </div>
            <div className="container">
                <section className="contact-info">
                    <div>
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <h3>Dirección</h3>
                        <p>768 West Lane Road, Atlanta, AT54490 Georgia</p>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-mobile-screen"></i>
                        </span>
                        <h3>Teléfono</h3>
                        <p>
                            <a href="tel:000">
                                +55.123.654.987 <br />
                                +55.123.654.987
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-envelope-open"></i>
                        </span>
                        <h3>Correo Electrónico</h3>
                        <p>
                            <a href="#">contact@domain.com</a>
                        </p>
                    </div>
                </section>
                <div className="contact-form">
                    <header>
                        <h4>¿Tenés alguna consulta o comentario?</h4>
                        <p>
                            Sus comentarios son muy valiosos para nosotros, ya sea para mejorar o para continuar
                            brindándole un servicio acorde al que nuestros clientes se merecen.
                        </p>
                    </header>

                    <form
                        method="POST"
                        action=""
                        data-validation="contact"
                        data-exito="Mensaje enviado con éxito. A la brevedad nos contactaremos."
                        data-error="Ha ocurrido un error. Intente nuevamente más tarde."
                        data-subject="Consulta desde contacto"
                    >
                        <input
                            data-name="Nombre y Apellido"
                            data-rule-required="true"
                            data-rule-nombre-y-apellido="true"
                            data-msg-required="Este campo es requerido."
                            name="nombre-y-apellido"
                            type="text"
                            placeholder="Nombre y Apellido"
                        />

                        <input
                            data-name="Mail"
                            data-rule-required="true"
                            data-rule-mail="true"
                            data-msg-required="Este campo es requerido."
                            name="mail"
                            type="email"
                            placeholder="Mail"
                        />

                        <textarea
                            data-name="Comentario"
                            data-rule-required="true"
                            data-rule-comentario="true"
                            data-msg-required="Este campo es requerido."
                            name="mensaje"
                            placeholder="Escribe aquí tu mensaje"
                        ></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
