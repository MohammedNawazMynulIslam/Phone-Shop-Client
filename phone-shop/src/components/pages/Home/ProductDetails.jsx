import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  console.log(id);
  // Fetch the product details when component mounts
  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/product/${brandName}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, [brandName]);
  return (
    <div>
      <ProductDetail card={card}></ProductDetail>
    </div>
  );
};
export default ProductDetails;
