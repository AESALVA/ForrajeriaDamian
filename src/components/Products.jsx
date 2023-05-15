import React from "react";
import Product from "./Product";
import "../styles/products.css";
import ProductImg from "../assets/productImg.png";

const Products = () => {
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
    },
  ];

  return (
    <>
      <div className="TitleProducts">
        <h2>Lista de Productos</h2>
      </div>
      <div className="ContainerProducts">
        {DATA.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
