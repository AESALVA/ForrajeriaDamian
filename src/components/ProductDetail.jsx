import React from "react";
import "../styles/productDetail.css";
import { NavLink } from "react-router-dom";

const ProductDetail = ({ product }) => {
  return (
    <div className="DetailContainer">
      <div className="Detail">
        <div className="DetailImg">
          <img src={product.img} alt="detalleArticulo" />
        </div>
        <div className="CardDetail">
          <h1>{product.title}</h1>
          <h3>{`Categoria: ${product.category}`}</h3>
          <h3>{`Sabor: ${product.type}`}</h3>
          <h3>{`Calidad: ${product.subtitle}`}</h3>
          <h2>Mas detalles del producto</h2>
          <p>{product.description}</p>
          <p>Precio: $ {product.price}</p>
          <p>
            {product.disponibility ? <>Producto Disponible</> : <>Sin Stock</>}
          </p>
          <div className="DetailBtn">
            <NavLink>Comprar</NavLink>
            <NavLink>Añadir al carrito</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
