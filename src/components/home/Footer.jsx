import { NavBar } from '../ui/NavBar'
import { Map } from './Map'

export const Footer = () => {
    return (
        <div className="footer__main">
            <footer className="footer__content">
                <section className="footer__navegation">
                    <h4>Navegación</h4>
                    <NavBar />
                </section>
                <section className="footer__map">
                    <h4>Ubicación</h4>
                    <div className="map">
                        {/* <img src="./img/map.webp" alt="" /> */}
                        <Map />
                    </div>
                </section>
                <section className="footer__redes">
                    <h4>Síguenos</h4>
                    <div className="footer__redes-content">
                        <a href="" target="_blank">
                            <img src="https://img.icons8.com/material-sharp/20/C30A00/youtube-play.png" />
                            Youtube.com/Guillermo Perez
                        </a>

                        <a href="https://www.facebook.com/nvliberalismo" target="_blank">
                            <img src="https://img.icons8.com/material-sharp/20/C30A00/facebook-new.png" />
                            Facebook.com/Guillermo Perez
                        </a>

                        <a href="https://twitter.com/NvLiberalismo" target="_blank">
                            <img src="https://img.icons8.com/ios-filled/20/C30A00/twitter-circled--v1.png" />
                            Twitter.com/Guillermo Perez
                        </a>
                    </div>
                </section>
            </footer>
            <p>
                <a href="https://momentumdigital.com.co/" target="_blank">
                    Momentum
                </a>
                Todos los derechos reservados 2022©
            </p>
        </div>
    )
}
