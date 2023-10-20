import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, [id]);

  return <ProductDetail card={card} />;
};

export default ProductDetails;
