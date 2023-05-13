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
      <NavLink to='/' className='LogoFooter'>
        <img src={Logo} alt="LogoFooter"  />
      </NavLink>
      <ul className='ulFooter'>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink>Productos</NavLink></li>
        <li><NavLink to='/contact'>Contacto</NavLink></li>
        <li><NavLink to='/about'>Sobre Nosotros</NavLink></li>
      </ul>

      <div className='copyright'>
      <ul className='SocialIcons'>
        <li><NavLink className="d-flex"><FontAwesomeIcon icon={faFacebook} /></NavLink></li>
        <li><NavLink className="d-flex"><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
        <li><NavLink className="d-flex"><FontAwesomeIcon icon={faWhatsapp} /></NavLink></li>
      </ul>
        <span>Copyright © 2023 Tienda de Mascotas Odi</span>
      </div>
    </div>
    </>
  )
}

export default Footer