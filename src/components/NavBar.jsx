import React from 'react'
import '../styles/navbar.css';
import Logo from '../assets/petShopLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
<>
<div className="navbar">
    <NavLink className='Logo'>
        <img src={Logo} alt="Logo" />
    </NavLink>
    <ul>
        <li><NavLink>Inicio</NavLink></li>
        <li><NavLink>Productos</NavLink></li>
        <li><NavLink>Contacto</NavLink></li>
        <li><NavLink>Sobre Nosotros</NavLink></li>
        <li><NavLink>Iniciar Sesión</NavLink></li>
    </ul>
    <div className='barsMenu'>
    <FontAwesomeIcon icon={faBars} />
    </div>
</div>
</>
    )
}

export default NavBar