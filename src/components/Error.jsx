import React from 'react';
import '../styles/error.css';
import huellaImg from '../assets/huella.png';
import { NavLink, useNavigate } from "react-router-dom";


const Error = () => {
  return (
    <div className='ContainerError'>
        <h1>Guau!! Lo sentimos, algo salió mal!</h1>
        <div className="huella">
        <img src={huellaImg} alt="huellaImg" />
        </div>
        <NavLink className='btnError'>Volver</NavLink>
    </div>
  )
}

export default Error