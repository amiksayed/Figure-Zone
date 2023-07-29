import "./Products.css";
const Products = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Products;
