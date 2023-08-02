import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/product.css";



const Art = ({art}) => {
  return (
    <>
<div className="CardProduct">
        <h2>{art.name}</h2>
        <p>{art.type}</p>
        <div className="ProductImg">
          <img src={art.img} alt="Product" />
        </div>
        <div className="CardBottom">
        <NavLink to={`/producto/${art.id}`} className="ProductBtn">
          Ir al producto
        </NavLink>
        </div>
      </div>
    </>
  )
}

export default Art