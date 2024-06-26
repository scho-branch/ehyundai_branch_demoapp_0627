import React, { createContext, useState, useEffect } from "react";
import { storeData } from "../storedata/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products

  console.log("products", products)
  useEffect(() => {
    const fetchProducts = async () => {
      // const response = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json();
      setProducts(storeData);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
