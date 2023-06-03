import React, { useEffect, useState, useRef } from "react";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopesBulk, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const auth = useUserContext();
  const navigate = useNavigate();
  const Load = useLoadedContext();
  const Validation = useValidationContext();
  const form = useRef();


  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstText, setFirstText] = useState(true);

  const HandleClick = () => {
    Load.setIsLoaded(true);
    if (
      Validation.validateName(name) &&
      Validation.validateMail(mail) &&
      Validation.validateText(text)
    ) {
      emailjs.sendForm(
        "service_6te7sr6",
        "template_x3rxlzp",
        form.current,
        "ugkrjxlh9YCbw85u7"
      );
      Load.setIsLoaded(false);
    } else {
      setMessage("Debe completar correctamente el formulario");
      Load.setIsLoaded(false);
    }
  };


  useEffect(() => {
  if(Validation.validateText(text)){
    setFirstText(true)
  }
  }, [text])
  

  return (
    <div className="ContainerContact">
      <div className="Contact">
        <h2>¡Contáctanos!</h2>
        <p className="Text">
          ¡Estamos emocionados de escuchar de ti! En la Tienda de Mascotas Odi,
          nos apasiona proporcionar alimentos de alta calidad para perros y
          gatos, asegurando una nutrición óptima para tus adorables compañeros
          peludos. Si tienes alguna pregunta, consulta o simplemente quieres
          compartir tus experiencias con nuestros productos, no dudes en ponerte
          en contacto con nosotros. Estamos aquí para ayudarte y brindarte el
          mejor servicio posible.
        </p>
        <h4>
          Puedes comunicarte con nuestro equipo de atención al cliente de varias
          maneras:
        </h4>
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
              <span>Damian@TiendaMascotas.com</span>
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
        <form className="Form" ref={form} id="formulario">
          <span className="text-danger">{message}</span>
          <div className="Inputs">
            <div className="InputContact">
              <label>
                Nombre{" "}
                {!Validation.validateName(name) && !firstName && (
                  <span className="text-danger">Completar</span>
                )}
              </label>
              <input
                className="bg-dark"
                value={name}
                onInput={(e) => setName(e.target.value)}
                onBlur={() => setFirstName(false)}
                required
                maxLength={50}
                placeholder="JulioDamian"
              />
            </div>
            <div className="InputContact">
              <label>
                Email{" "}
                {!Validation.validateMail(mail) && !firstMail && (
                  <span className="text-danger">Completar</span>
                )}
              </label>
              <input
                className="bg-dark"
                type="mail"
                required
                maxLength={40}
                placeholder="Damian@TiendaDeMascotas.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
              />
            </div>
          </div>
          <div className="TextArea">
            <label>
              Mensaje{" "}
              {!Validation.validateName(text) && !firstText && (
                <span className="text-danger">Completar</span>
              )}
            </label>
            <textarea
              className="bg-dark"
              type="text"
              required
              maxLength={300}
              placeholder="En la Tienda de Mascotas Odi encuentro todos los artículos que mi mascota necesita!"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={() => !Validation.validateText(text)&&setFirstText(false)}
            ></textarea>
          </div>
          <div className="BtnContact">
            <NavLink className="BtnContainer" onClick={() => HandleClick()}>
            {Load.isLoaded ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  'Enviar'
                )}
            </NavLink>
            </div>
        </form>
      </div>
      <div className="FooterContact mt-auto">
        <p className="Text">
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
