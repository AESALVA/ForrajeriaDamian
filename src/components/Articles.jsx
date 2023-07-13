import React from "react";
import "../styles/articles.css";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
  useArticlesContext,
} from "../UserProvider";
import Article from "./Article";

const Articles = () => {
  const Articles = useArticlesContext();

  

  return (
    <div className="ContainerArticles">
      <div className="titleArticles">
        <h2>Nuestra selección de las mejores marcas para tus mascotas !</h2>
      </div>
      <div className="cardsContainer">
        {Articles.articles.map((article, i) => (
          <Article key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
