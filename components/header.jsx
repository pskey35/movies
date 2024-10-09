import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom';
import "./header.scss"

export default function Header() {
    const navigate = useNavigate();


    const listaNav = [
        "Peliculas",
        "Series",
        "Estrenos",
        "Recien agregados",
        "Musica"
    ]

    let clickCount = 1

    const clickLupa = () => {
        //esto sirve para contar los clicks dado
        clickCount++
        const inputElement = document.querySelector(".input-element")
        inputElement.style.cssText = "opacity:1;width:100%"


        const logoImg = document.querySelector("#logo")
        const home_link_header = document.querySelector(".home-link_header")



        //si se da click cuando el viewport es menor a 800 esporq estan en celular
        if (window.innerWidth <= 800) {


            if (clickCount % 2 == 0) {
                //si clickCount es el segundo click entonces entra aqui esto abre la barrra

                logoImg.style.display = "none"
                home_link_header.style.cssText = "display:none"

            } else {
                //si es inpar el conteoClicks esto cierra la barra
                inputElement.style.cssText = "opacity:0;width:10%"
                logoImg.style.display = "block"
                home_link_header.style.cssText = "display:block"
            }
        } else if (window.innerWidth > 800) {
            //esto es en PC

            if (!(clickCount % 2 == 0)) {
                //si es inpar el conteoClicks esto cierra la barra
                inputElement.style.cssText = "opacity:0;width:10%"
                logoImg.style.display = "block"
                home_link_header.style.cssText = "display:block"

            }
        }



    }


    return (
        <div className="nav-header">
            <div className="nav-header-content">
                <div className="nav-left">
                    <Link to="/" className="home-link_header">
                        <img src="/LOGO-SVG/logo.svg" id="logo"></img>
                    </Link>

                    <ul>
                        {listaNav.map((dataUnidad) => {
                            return (
                                <li>{dataUnidad}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className="nav-center">
                    <div>
                        <input className="input-element"></input>
                        <div className="lupa-icon" onClick={clickLupa}>
                            <svg class="icono-busqueda " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="icon-right_header">
                        <div className="icon-login_header">
                            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 16.9998C6 17.3511 6 17.5268 6.01567 17.6795C6.14575 18.9473 7.0626 19.9945 8.30206 20.291C8.45134 20.3267 8.6255 20.3499 8.97368 20.3963L15.5656 21.2753C17.442 21.5254 18.3803 21.6505 19.1084 21.361C19.7478 21.1068 20.2803 20.6406 20.6168 20.0405C21 19.3569 21 18.4104 21 16.5174V7.48232C21 5.58928 21 4.64275 20.6168 3.95923C20.2803 3.35911 19.7478 2.89288 19.1084 2.63868C18.3803 2.34914 17.442 2.47423 15.5656 2.72442L8.97368 3.60335C8.62546 3.64978 8.45135 3.67299 8.30206 3.7087C7.0626 4.0052 6.14575 5.05241 6.01567 6.32018C6 6.47288 6 6.64854 6 6.99984M12 7.99984L16 11.9998M16 11.9998L12 15.9998M16 11.9998H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span>
                            Iniciar sesion
                        </span>

                    </div>

                </div>
            </div>
        </div>
    )
}