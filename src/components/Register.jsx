import React from "react";
import "../styles/register.css";
import { NavLink } from "react-router-dom";
import {faEnvelope,faLock,faEye,faEyeSlash,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistroImg from '../assets/registroImg.png';
import RegistroImgMobile from '../assets/RegistroImgMobile.png';

const Register = () => {
  return (
    <div className="ContainerRegister">
      <div className="Register">
      <div className="ImgRegister">
          <img src={RegistroImg} alt="registroImg" />
        </div>
        <div className="CardRegister">
       
          <h2>Registro</h2>
          <div className="ImgRegisterMobile">
          <img src={RegistroImgMobile} alt="registroImg" />
        </div>
          <form className="FormRegister">
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faUser} /> Nombre de Usuario
              </label>
              <input type="text" required maxLength={50} />
              <span className="Conditions">
                Al menos una letra mayúscula, sin números
              </span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input type="mail" required maxLength={40} />
              <span className="Conditions"></span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Contraseña
              </label>
              <input type="password" required maxLength={30} />
              <span className="Conditions">
                Al menos una letra mayúscula, una minúscula y un número
              </span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Repetir Contraseña
              </label>
              <input type="password" required maxLength={30} />
            </div>
            <NavLink className="RegisterBtn">Registrarse</NavLink>
            <div className="LoginRegister">
              Ya tienes cuenta?<NavLink to='/login'> Iniciar Sesión</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
