import React from "react";
import "../styles/articles.css";
import {useUserContext,useLoadedContext,useValidationContext,useArticlesContext,} from "../UserProvider";


const Articles = () => {




  
  return (
    <div className="ContainerArticles">
      <div className="titleArticles">
        <h2>Nuestra variedad de Articulos por marca</h2>
      </div>
      <div className="cardsContainer">

      </div>
    </div>
  );
};

export default Articles;
