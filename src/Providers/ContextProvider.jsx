import { createContext, useEffect, useState } from "react";

export const AllContext = createContext();
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, setProducts]);
  const info = { products };
  return <AllContext.Provider value={info}>{children}</AllContext.Provider>;
};

export default ContextProvider;
