import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/petShopLogo.png';
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className='ContainerFooter'>
      <NavLink className='Logo'>
        <img src={Logo} alt="Logo"  />
      </NavLink>
      <ul>
        <li><NavLink>Inicio</NavLink></li>
        <li><NavLink>Productos</NavLink></li>
        <li><NavLink>Contacto</NavLink></li>
        <li><NavLink>Sobre Nosotros</NavLink></li>
      </ul>
      <div className='copyright'>
        <span>Copyright © 2023 Tienda de Mascotas Odie</span>
      </div>
    </div>
    </>
  )
}

export default Footer