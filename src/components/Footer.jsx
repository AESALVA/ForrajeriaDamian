import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/petShopLogo.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
    <div className='ContainerFooter mt-auto'>
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
      <ul className='SocialIcons'>
        <li><NavLink><FontAwesomeIcon icon={faFacebook} /></NavLink></li>
        <li><NavLink><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
        <li><NavLink><FontAwesomeIcon icon={faWhatsapp} /></NavLink></li>
      </ul>
        <span>Copyright © 2023 Tienda de Mascotas Odie</span>
      </div>
    </div>
    </>
  )
}

export default Footer