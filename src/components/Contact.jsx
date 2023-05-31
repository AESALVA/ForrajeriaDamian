import React from "react";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopesBulk, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="ContainerContact">
      <div className="Contact">
        <h2>¡Contáctanos!</h2>
        <p>
          ¡Estamos emocionados de escuchar de ti! En la Tienda de Mascotas Odi,
          nos apasiona proporcionar alimentos de alta calidad para perros y
          gatos, asegurando una nutrición óptima para tus adorables compañeros
          peludos. Si tienes alguna pregunta, consulta o simplemente quieres
          compartir tus experiencias con nuestros productos, no dudes en ponerte
          en contacto con nosotros. Estamos aquí para ayudarte y brindarte el
          mejor servicio posible.
        </p>
        <p>
          Puedes comunicarte con nuestro equipo de atención al cliente de varias
          maneras:
        </p>
        <div className="ContactWays">
          <ul>
            <li>
              <NavLink>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </NavLink>
              <span>Whatsapp</span>
              <span>
                Si prefieres mandar directamente un mensaje de Whatsapp a uno de
                nuestros representantes, puedes hacerlo!
              </span>
              <span>Cel: 3815534462</span>
            </li>
            <li>
              <NavLink>
                <FontAwesomeIcon className="icon" icon={faHashtag} />
              </NavLink>
              <span>Redes Sociales</span>
              <span>
                ¡Síguenos en nuestras redes sociales para obtener las últimas
                novedades, consejos sobre cuidado de mascotas y promociones
                especiales! Puedes encontrarnos en:
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} /> Tienda de Mascotas Odi
              </span>
              <span>
                <FontAwesomeIcon icon={faFacebook} /> Tienda Odi
              </span>
            </li>
            <li>
              <NavLink>
                <FontAwesomeIcon className="icon" icon={faEnvelopesBulk} />
              </NavLink>
              <span>Correo Electrónico</span>
              <span>
                Si prefieres comunicarte por escrito, envíanos un correo
                electrónico. Nuestro equipo revisa regularmente los correos
                electrónicos y se esfuerza por responder en un plazo de 24
                horas.
              </span>
              <span>Damian@TiendaDeMascotas.com</span>
            </li>
          </ul>
        </div>
      </div>
      <h2>También puedes completar el formulario de contacto a continuación</h2>
      <p>
        {" "}
        Simplemente proporciona tu nombre, dirección de correo electrónico y
        mensaje. Nos pondremos en contacto contigo lo antes posible.
      </p>
      <div className="ContainerForm">
        <form className="Form">
          <div className="Inputs">
            <div className="InputContact">
              <label>Nombre</label>
              <input type="text" />
            </div>
            <div className="InputContact">
              <label>Email</label>
              <input type="mail" />
            </div>
          </div>
          <div className="TextArea">
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </div>
      <div className="FooterContact mt-auto">
        <p>
          No importa cómo elijas contactarnos, te aseguramos que recibirás una
          respuesta personalizada y amigable. Valoramos tus comentarios y
          estamos comprometidos en brindarte una excelente experiencia de compra
          en la Tienda de Mascotas Odi. ¡Gracias por elegirnos como tu proveedor
          de alimentos para mascotas! Estamos ansiosos por servirte y contribuir
          al bienestar de tus adorables perros y gatos. Equipo de la Tienda de
          Mascotas Odi
        </p>
      </div>
    </div>
  );
};

export default Contact;
