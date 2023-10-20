import { useEffect, useState } from "react";
import Brand4Products from "./Brand4Products";

const BrandsProduct = ({ brandName }) => {
  // console.log(brandName);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${brandName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brandName]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.length === 0 ? (
        <h1 className="text-center font-extrabold text-6xl text-white ">
          Out of Stock
        </h1>
      ) : (
        products.map((product) => (
          <Brand4Products key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default BrandsProduct;
