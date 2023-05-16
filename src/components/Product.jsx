import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="CardProduct">
        <h2>{product.title}</h2>
        <p>{product.type}</p>
        <div className="ProductImg">
          <img src={product.img} alt="Product" />
        </div>
        <div className="CardBottom">
        <NavLink to={`/producto/${product.id}`} className="ProductBtn">
          Ir al producto
        </NavLink>
        </div>
      </div>
    </>
  );
};

export default Product;
