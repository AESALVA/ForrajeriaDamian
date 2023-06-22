import React from "react";
import "../styles/landing.css";
import imgUno from "../assets/landing11.png";
import imgDos from "../assets/landing1.png";
import imgTres from "../assets/landing3.png";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Carousel1.webp';


const Landing = () => {
  return (
    <div className="ContainerLanding">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div className="ContainerImg">
        <div className="img">
          <img src={imgTres} alt="landing3" />
        </div>
        <div className="Card">
          <h2>
            ¡Bienvenido a nuestra tienda de mascotas! Aquí encontrarás todo lo
            que necesitas para cuidar y consentir a tu fiel compañero peludo.
          </h2>
        </div>
        <div className="img">
          <img src={imgUno} alt="landing11" />
        </div>
        <div className="Card">
          <h2>
            Descubre una amplia variedad de productos de alta calidad para
            perros, gatos y otras mascotas. ¡Todo en un solo lugar!
          </h2>
        </div>
        <div className="imgBottom">
          <img src={imgDos} alt="landing1" />
        </div>
        <div className="Card">
          <h2>
            En nuestra tienda, valoramos la salud y el bienestar de los
            animales. Trabajamos con marcas comprometidas con ingredientes
            naturales y opciones ecológicas.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
