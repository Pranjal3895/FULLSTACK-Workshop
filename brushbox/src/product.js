import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>This is a Product page and id is {productId}</h1>
    </div>
  );
};

export default Product;