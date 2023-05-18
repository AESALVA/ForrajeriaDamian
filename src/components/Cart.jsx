import React from "react";
import "../styles/cart.css";
import { NavLink } from "react-router-dom";


const Cart = () => {
  const DATA = [
    {
      name: "Golden",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: "1",
      price: 1000,
    },
    {
      name: "Royal",
      description:
        "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
      quantity: "2",
      price: 500,
    },
    {
      name: "Old Prince",
      description:
        "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
      quantity: "5",
      price: 700,
    },
    {
      name: "Golden",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: "1",
      price: 1000,
    },
    {
      name: "Golden",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: "1",
      price: 1000,
    },
    {
      name: "Golden",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: "1",
      price: 1000,
    },
  ];
  let TotalPrice = [];

  DATA.map((art) => {
    TotalPrice.push(art.price);
  });

  const Total = (total, num) => {
    return total + num;
  };
  const PriceTotal = TotalPrice.reduce(Total);

  return (
    <div className="ContainerCart">
      <div className="Cart">
        <h1>Sus Productos</h1>
        <table>
          <thead>
            <tr>
              <th>Articulo</th>
              <th className="Description">Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((articulo, i) => (
              <tr key={i}>
                <td>{articulo.name}</td>
                <td className="Description">{articulo.description}</td>
                <td>{articulo.quantity}</td>
                <td>{articulo.price}</td>
              </tr>
            ))}
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
