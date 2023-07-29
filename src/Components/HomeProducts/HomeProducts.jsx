import { useContext } from "react";
import { AllContext } from "./../../Providers/ContextProvider";
import Products from "../Products/Products";
import "./HomeProducts.css";
const HomeProducts = () => {
  const { products } = useContext(AllContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Products key={product.id} product={product}></Products>
      ))}
    </div>
  );
};
export default HomeProducts;
