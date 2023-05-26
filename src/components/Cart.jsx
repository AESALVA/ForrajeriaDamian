import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
  useArticlesContext,
} from "../UserProvider";

const Cart = () => {
  const Articles = useArticlesContext();

  let TotalPrice = [0];

  Articles.cart.map((art) => {
    TotalPrice.push(art.price);
  });

  const Total = (total, num) => {
    return total + num;
  };

  const PriceTotal = TotalPrice.reduce(Total);

  const Up = (id) => {
    const Prod = Articles.data.find((art) => art.id === id);
    Prod.quantity += 1;
    let price = 0;
    Articles.LISTA.map((art) => {
      if (art.id === id) {
        price = Prod.quantity * art.price;
      }
    });

    const aux = [...Articles.data];
    aux.map((art) => {
      if (art.id === id) {
        art.quantity = Prod.quantity;
        art.price = price;
        Articles.setData(aux);
      }
    });
  };

  const Down = (id) => {
    const Prod = Articles.data.find((art) => art.id === id);
    if (Prod.quantity > 1) {
      Prod.quantity -= 1;
      let price = 0;
      Articles.LISTA.map((art) => {
        if (art.id === id) {
          price = Prod.quantity * art.price;
        }
      });
      const aux = [...Articles.data];
      aux.map((art) => {
        if (art.id === id) {
          art.quantity = Prod.quantity;
          art.price = price;
          Articles.setData(aux);
        }
      });
    }
  };

  const DelProduct = (id) => {
    Articles.setCart(Articles.cart.filter((d) => d.id !== id));
  };
  const ClearCart = () => {
    Articles.setCart([]);
  };

  return (
    <div className="ContainerCart">
      <div className="Cart">
        <h1>Sus Productos</h1>
        <table>
          <thead>
            <tr>
              <th>Articulo</th>
              <th className="Descrip">Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Articles.cart[0] ? (
              <>
                {Articles.cart.map((articulo, i) => (
                  <tr key={i}>
                    <td>{articulo.name}</td>
                    <td className="Descrip">{articulo.description}</td>
                    <td className="UpDownContainer">
                      {articulo.quantity}
                      <span className="UpDown">
                        <FontAwesomeIcon
                          className="Btn"
                          onClick={() => Up(articulo.id)}
                          icon={faChevronUp}
                        />
                        <FontAwesomeIcon
                          onClick={() => Down(articulo.id)}
                          className="Btn"
                          icon={faChevronDown}
                        />
                      </span>
                    </td>
                    <td>{articulo.price}</td>
                    <td>
                      <NavLink
                        onClick={() => DelProduct(articulo.id)}
                        className="DelProduct"
                      >
                        X
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <></>
            )}
          </tbody>
        </table>
        {!Articles.cart[0] && (
          <>
            <h2>Su carrito está vacío</h2>
          </>
        )}
        <div className="ScoreContainer">
          <div className="Score">
            <span>Subtotal: ${PriceTotal}</span>
            <h2>TOTAL: ${PriceTotal}</h2>
          </div>
        </div>
        <div className="CartBtn">
          <NavLink to={Articles.cart[0]&&'/checkout'}>Finalizar Compra</NavLink>
          <NavLink to="/products">Seguir Comprando</NavLink>
          <NavLink onClick={() => ClearCart()}>Limpiar Carrito</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
