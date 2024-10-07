import {useState, useEffect} from "react"
import { useNavigate, Link} from 'react-router-dom';
import "./header.scss"

export default function Header(){
    const navigate = useNavigate();

    

  const listaNav = [
    "Peliculas",
    "Series",
    "Estrenos",
    "Recien agregados",
    "Musica"
  ]

    return(
        <div className="nav-header">
            <div className="nav-header-content">
                <div className="nav-left">
                    <Link to="/">
                        <img src="/LOGO-SVG/logo.svg"></img>
                    </Link>

                    <ul>
                        {listaNav.map((dataUnidad)=>{
                            return(
                                <li>{dataUnidad}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="nav-right">

                </div>
            </div>
        </div>
    )
}