import React from "react";
import "../styles/login.css";
import imgLogin from "../assets/landing2.png";
import { NavLink } from "react-router-dom";
import { faEnvelope,faLock,faEye,faEyeSlash, faE } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Login = () => {
  return (
    <div className="ContainerLogin">
      <div className="Login">
        <div className="CardLogin">
          <h2>Iniciar Sesión</h2>
          <form className="FormLogin">
            <div className="InputLogin">
            <label>
                <FontAwesomeIcon icon={faEnvelope} />{' '}Email
              </label>
              <span>
              </span>
              <input 
              placeholder="Damian@TiendaDeMascotas.com"
              type="mail"
              required
              maxLength={50}
              />
             
            </div>
            <div className="InputLogin">
            <label>
            <FontAwesomeIcon icon={faLock} />{' '}Contraseña
              </label>
              <span>
              </span>
              <input 
              type="password"
              placeholder="Damian9"
              required
              maxLength={30}
              />
            </div>
            <NavLink className='LoginBtn'>Iniciar</NavLink>
            <div className="LoginRegister">No tienes cuenta?<NavLink to='/register'>{' '}Registrate</NavLink></div>
            <div className="forgotpass"><NavLink>Olvidaste tu contraseña?</NavLink></div>
          </form>
        </div>
        <div className="imgLogin">
          <img src={imgLogin} alt="imgLogin" />
        </div>
      </div>
    </div>
  );
};

export default Login;
