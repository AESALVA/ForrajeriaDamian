import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import ProductImg from "../assets/productImg.png";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
  useArticlesContext,
} from "../UserProvider";

const ProductsDetails = () => {

  const Articles = useArticlesContext();

  const params = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const aux = Articles.data.find((article) => article.id === params.id);
    setProduct(aux);
  }, []);
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
};

export default ProductsDetails;
