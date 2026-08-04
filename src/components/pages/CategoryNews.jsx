import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  useEffect(()=>{
    const filteredNews=data.filter
  })
  return <div>CategoryNews -{id}</div>;
};

export default CategoryNews;
