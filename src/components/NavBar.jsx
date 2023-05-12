import React, { useState } from 'react'
import '../styles/navbar.css';
import Logo from '../assets/petShopLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const [menuResponsive, setMenuResponsive] = useState("NavListResponsive");
    const handleMenu = () => {
        if (menuResponsive === "NavListResponsive") {
          setMenuResponsive("NavListResponsiveShow");
        } else {
          setMenuResponsive("NavListResponsive");
        }
      };

  return (
<>
<div className="navbar">
    <NavLink className='Logo'>
        <img src={Logo} alt="Logo" />
    </NavLink>
    <div className='Title'>
        <h1>Tienda de Mascotas Odi</h1>
     </div>
    <ul className='ul'>
        <li><NavLink>Inicio</NavLink></li>
        <li><NavLink>Productos</NavLink></li>
        <li><NavLink>Contacto</NavLink></li>
        <li><NavLink>Sobre Nosotros</NavLink></li>
        <li><NavLink>Iniciar Sesión</NavLink></li>
    </ul>
    <div className='barsMenu'>
    {menuResponsive==='NavListResponsive'?(<FontAwesomeIcon icon={faBars} onClick={handleMenu} />):(<FontAwesomeIcon icon={faX  } onClick={handleMenu} />)} 
    </div>
    <ul className={menuResponsive}>
        <li><NavLink>Inicio</NavLink></li>
        <li><NavLink>Productos</NavLink></li>
        <li><NavLink>Contacto</NavLink></li>
        <li><NavLink>Sobre Nosotros</NavLink></li>
        <li><NavLink>Iniciar Sesión</NavLink></li>
    </ul>
</div>
</>
    )
}

export default NavBar