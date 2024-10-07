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


    const clickLupa = ()=>{
        const inputElement = document.querySelector(".input-element")
        inputElement.style.cssText = "opacity:1"
    
    }


    return (
        <div className="nav-header">
            <div className="nav-header-content">
                <div className="nav-left">
                    <Link to="/">
                        <img src="/LOGO-SVG/logo.svg"></img>
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

                </div>
            </div>
        </div>
    )
}