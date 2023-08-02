import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Art from './Art';
import "../styles/products.css";




export const ArticleDetail = ({article}) => {


  return (
    <>
    <div className="WrapperProducts">
      <div className="ContainerProducts">
{article&&article.products.map((art,i)=>(
 <Art key={i} art={art} />
))}
</div>
</div>
    </>
  )
}
