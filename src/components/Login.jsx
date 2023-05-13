import React from "react";
import "../styles/login.css";
import imgLogin from "../assets/landing2.png";
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div className="ContainerLogin">
      <div className="Login">
        <div className="CardLogin">
          <h2>Iniciar Sesión</h2>
          <form className="FormLogin">
            <div className="InputLogin">
            <label>
                Email
              </label>
              <span>
              </span>
              <input />
             
            </div>
            <div className="InputLogin">
            <label>
                Contraseña
              </label>
              <span>
              </span>
              <input />
            </div>
            <NavLink className='LoginBtn'>Iniciar</NavLink>
            <div className="LoginRegister">No tienes cuenta?<NavLink>Registrate</NavLink></div>
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
