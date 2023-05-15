import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import ProductImg from "../assets/productImg.png";

const ProductsDetails = () => {
  const DATA = [
    {
      id: "1",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "2",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Cordero",
      description:
        "Mas de doce meses 25% de proteinas 100% ingredientes naturales 0% soja",
      price: "500",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "3",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Cachorro",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 26% de proteinas 100% ingredientes naturales 0% soja",
      price: "700",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "4",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "5",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "6",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "7",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "8",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "9",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "10",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "11",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
    {
      id: "12",
      title: "Old Prince",
      subtitle: "Premium",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Mas de doce meses 23% de proteinas 100% ingredientes naturales 0% soja",
      price: "300",
      img: ProductImg,
      disponibility:true
    },
  ];

  const params = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const aux = DATA.find((article) => article.id === params.id);
    setProduct(aux);
  }, []);

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
};

export default ProductsDetails;
