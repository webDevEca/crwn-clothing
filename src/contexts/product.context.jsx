import { createContext } from "react";
import { useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const PoductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
