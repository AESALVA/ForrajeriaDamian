import React from 'react';
import '../styles/landing.css';
import imgUno from '../assets/landing11.png';
import imgDos from '../assets/landing2.png';
import imgTres from '../assets/landing3.png';

const Landing = () => {
  return (
    <div className='ContainerLanding'>
      <div className='ContainerImg'>
      <div className="img">
        <img src={imgTres} alt="landing3" />
      </div>
      <div className="Card">
        <h2>¡Bienvenido a nuestra tienda de mascotas! Aquí encontrarás todo lo que necesitas para cuidar y consentir a tu fiel compañero peludo.</h2>
        <h2>Descubre una amplia variedad de productos de alta calidad para perros, gatos y otras mascotas. ¡Todo en un solo lugar!</h2>
        <h2>En nuestra tienda, valoramos la salud y el bienestar de los animales. Trabajamos con marcas comprometidas con ingredientes naturales y opciones ecológicas.</h2>
        </div>
        <div className="img">
        <img src={imgUno} alt="landing11" />
      </div>
      </div>
     
    </div>
  )
}

export default Landing