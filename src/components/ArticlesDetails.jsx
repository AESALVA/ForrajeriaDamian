import React, { useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import {
    useUserContext,
    useLoadedContext,
    useValidationContext,
    useArticlesContext,
  } from "../UserProvider";
  import { ArticleDetail } from './ArticleDetail';


export const ArticlesDetails = () => {
    const Articles = useArticlesContext();
    const params = useParams();


  return (
    <>

    </>
  )
}
