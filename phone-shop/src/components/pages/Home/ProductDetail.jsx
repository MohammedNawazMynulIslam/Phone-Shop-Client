import { useState } from "react";
import Swal from "sweetalert2";

const ProductDetail = ({ card }) => {
  console.log(card);
  const { image, name, ShortDescription } = card;
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, card]);

    Swal.fire({
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });

    fetch("http://localhost:3000/addCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={name}
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{ShortDescription}</p>
            <button className="btn btn-success" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
