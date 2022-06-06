import React, { useState, useEffect } from "react";
import axios from "axios";

import { Product } from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className="product">
      <h1>Products</h1>
      
      <div  className="allProduct">
        {products.map((product) => (
          <div style={{border:"1px solid black",
          fontSize:"30px",
          padding:"10px",
          background:"white",
          borderRadius:"15px"}}>
          <Product key={product.id} {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
