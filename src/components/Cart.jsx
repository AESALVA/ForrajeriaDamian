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

  // const Listado = [
  //   {
  //     id: "1",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "2",
  //     name: "Royal",
  //     description:
  //       "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
  //     quantity: 2,
  //     price: 500,
  //   },
  //   {
  //     id: "3",
  //     name: "Old Prince",
  //     description:
  //       "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
  //     quantity: 5,
  //     price: 700,
  //   },
  //   {
  //     id: "4",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "5",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "6",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  // ];

  // const [DATA, setDATA] = useState([
  //   {
  //     id: "1",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "2",
  //     name: "Royal",
  //     description:
  //       "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
  //     quantity: 2,
  //     price: 500,
  //   },
  //   {
  //     id: "3",
  //     name: "Old Prince",
  //     description:
  //       "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
  //     quantity: 5,
  //     price: 700,
  //   },
  //   {
  //     id: "4",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "5",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  //   {
  //     id: "6",
  //     name: "Golden",
  //     description:
  //       "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
  //     quantity: 1,
  //     price: 1000,
  //   },
  // ]);

  let TotalPrice = [];

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
            </tr>
          </thead>
          <tbody>
            { Articles.cart?(<>{ Articles.cart.map((articulo, i) => (
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
              </tr>
            ))}</>):(<tr><td><h2>Su carrito esta vacio</h2></td></tr>)            }
          </tbody>
        </table>
        <div className="ScoreContainer">
          <div className="Score">
            <span>Subtotal: ${PriceTotal}</span>
            <h2>TOTAL: ${PriceTotal}</h2>
          </div>
        </div>
        <div className="CartBtn">
          <NavLink>Finalizar Compra</NavLink>
          <NavLink>Seguir Comprando</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
