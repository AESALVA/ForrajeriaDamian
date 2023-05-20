import React, { useState } from "react";
import "../styles/productDetail.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = ({ product }) => {
  const [showDetailOn, setShowDetailOn] = useState("ShowDetail");

  const ShowDetail = () => {
    if (showDetailOn === "ShowDetail") {
      setShowDetailOn("ShowDetailOn");
    } else {
      setShowDetailOn("ShowDetail");
    }
  };
  

  return (
    <div className="DetailContainer">
      <div className="Detail">
        <div className="DetailCard">
          <div className="DetailImg">
            <img src={product.img} alt="detalleArticulo" />
            <p>
              {product.disponibility ? (
                <>Producto Disponible</>
              ) : (
                <>Sin Stock</>
              )}
            </p>
          </div>
          <div className="CardDetail">
            <h1>{product.title}</h1>
            <h3>{`Categoria: ${product.category}`}</h3>
            <h3>{`Sabor: ${product.type}`}</h3>
            {product.subtitle ? (
              <>
                <h3>{`Calidad: ${product.subtitle}`}</h3>
              </>
            ) : (
              <>
                <h3>Calidad: Regular</h3>
              </>
            )}
            <p>Precio: $ {product.price}</p>
            <div className="Detalles">
              <NavLink onClick={ShowDetail}>
                Mas detalles <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>  
              <span className={showDetailOn}>
                <span className="Description">{product.description}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="DetailFooter">
          <div className="DetailBtn">
            <NavLink>Comprar</NavLink>
            <NavLink><FontAwesomeIcon icon={faCartShopping} />{' '}Añadir al carrito</NavLink>
          </div>
        </div>
        <div className="DetailCardMobile">
        <div className="CardDetail">
            <h1>{product.title}</h1>
            {product.subtitle ? (
              <>
                <h3>{`Calidad: ${product.subtitle}`}</h3>
              </>
            ) : (
              <>
                <h3>Calidad: Regular</h3>
              </>
            )}
            <h3>Precio: $ {product.price}</h3>
          </div>
        <div className="DetailImg">
            <img src={product.img} alt="detalleArticulo" />
            <div className="BottomImgMobile">
            <p>
              {product.disponibility ? (
                <>Producto Disponible</>
              ) : (
                <>Sin Stock</>
              )}
            </p>
            <p>{`Categoria: ${product.category}`}{' '}{`Sabor: ${product.type}`}</p>
            </div>
          </div>
          <div className="DetailFooterMobile">
          <div className="DetailBtn">
            <NavLink>Comprar</NavLink>
            <NavLink><FontAwesomeIcon icon={faCartShopping} />{' '}Añadir</NavLink>
          </div>
        </div>
          <div className="Detalles">
              <NavLink onClick={ShowDetail}>
                Mas detalles <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>  
              <span className={showDetailOn}>
                <span className="Description">{product.description}</span>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
