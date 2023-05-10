import React from 'react'
import '../styles/navbar.css';
import Logo from '../assets/petShopLogo.png';

const NavBar = () => {
  return (
<>
<div className="navbar">
    <div className='Logo'>
        <img src={Logo} alt="Logo" />
    </div>
    <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Sobre Nosotros</li>
        <li>Iniciar Sesión</li>
    </ul>
</div>
</>
    )
}

export default NavBar