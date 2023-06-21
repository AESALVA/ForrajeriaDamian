import React , { useContext, useEffect, useState } from "react";
import Product from "./Product";
import "../styles/products.css";
import ProductImg from "../assets/productImg.png";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
  useArticlesContext,
} from "../UserProvider";


const Products = () => {

  const Articles = useArticlesContext();

  return (
    <>
    <div className="WrapperProducts">
    <div className="TitleProducts">
      <h2>Lista de Productos</h2>
      </div>
      <div className="ContainerProducts">
        {Articles.data.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
      
    </>
  );
};

export default Products;
