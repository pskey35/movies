import { useState } from "react"
import "./login.scss"

export default function Login() {
    return (
        <div className="loginVentana_login">
            <div className="login-content_login">
                <h1>Inicio de sesion</h1>
                <div className="block-2_login">
                    <div>
                        <i class="fab fa-facebook-f apps__icono" aria-hidden="true">
                        </i>
                    </div>
                    <div>
                        <i class="fab fa-google-plus-g apps__icono" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i class="fab fa-linkedin-in apps__icono" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i class="fab fa-github apps__icono" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="inputsCaja_login">
                    <div>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" placeholder="Contrasena" />
                    </div>
                </div>
                <div className="submitBoton_login">
                    Iniciar sesion
                </div>
            </div>
        </div>
    )
}