import React from 'react';
import '../styles/resetPass.css';
import {faEnvelope,faLock,faEye,faEyeSlash,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


const ResetPass = () => {
  return (
    <div className='ContainerReset'>
<div className="ResetPass">
    <div className="CardReset">
        <h2>Restablecer Contraseña</h2>
        <form className='FormReset'>
            <div className="InputReset">
                <label>{" "}<FontAwesomeIcon icon={faEnvelope} /> Clave Token</label>
                <input type="text" required maxLength={70} placeholder='Token'  />
            </div>
            <div className="InputReset">
            <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Contraseña
              </label>
              <input type="password" required maxLength={30} placeholder="Damian9" />
              <span className="Conditions">
                Al menos una letra mayúscula, una minúscula y un número
              </span>
            </div>
            <div className="InputReset">
            <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Repetir Contraseña
              </label>
              <input type="password" required maxLength={30} placeholder="Damian9" />
            </div>
            <NavLink className="ResetBtn">Restablecer</NavLink>
        </form>
    </div>
</div>
    </div>
  )
}

export default ResetPass