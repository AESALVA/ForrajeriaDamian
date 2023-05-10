import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/petShopLogo.png'

const Footer = () => {
  return (
    <>
    <div className='ContainerFooter'>
      <div className='Logo'>
        <img src={Logo} alt="Logo"  />
      </div>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Sobre Nosotros</li>
      </ul>
      <div className='copyright'>
        <span>Copyright © 2023 Tienda de Mascotas Odie</span>
      </div>
    </div>
    </>
  )
}

export default Footer