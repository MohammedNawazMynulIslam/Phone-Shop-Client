import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-center my-11 font-bold text-5xl text-white">
        My Cart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-32 ">
        {products.map((product) => (
          <CartProduct
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
