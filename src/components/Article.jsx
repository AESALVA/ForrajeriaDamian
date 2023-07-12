import React from 'react';
import { NavLink } from "react-router-dom";


const Article = ({article}) => {
  return (
    <>
      <div className="CardProduct">
        <h2>{article.title}</h2>
        <p>{article.name}</p>
        <div className="ProductImg">
          <img src={article.img} alt="Product" />
        </div>
        <div className="CardBottom">
        <NavLink to={`/producto/${article.id}`} className="ProductBtn">
          Ver más
        </NavLink>
        </div>
      </div>
    </>
  )
}

export default Article