import React from "react";
import "../styles/forgotPass.css";
import { NavLink } from "react-router-dom";
import ForgotImg from "../assets/ForgotImg.png";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgotPass = () => {
  return (
    <div className="ContainerForgotPass">
      <div className="ForgotPass">
        <div className="CardForgotPass">
          <h2>Recuperar Contraseña</h2>
          <form className="FormForgotPass">
            <div className="InputForgotPass">
              <label>{" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email</label>
              <input type="mail" required maxLength={50} placeholder="Damian@TiendaDeMascotas.com" />
              <span className="Conditions">
                Se enviará un mail a su cuenta de correo Electrónico registrada
              </span>
            </div>
            <div className="imgForgotPass">
              <img src={ForgotImg} alt="imgForgotPass" />
            </div>
            <NavLink className="ForgotBtn">Enviar</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
