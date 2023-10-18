import { useEffect, useState } from "react";
import Brand4Products from "./Brand4Products";

const BrandsProduct = ({ brandName }) => {
  console.log(brandName);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/product/${brandName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brandName]);
  return (
    <div>
      <h2>Products :{brandName}</h2>
      {products.map((product) => {
        return (
          <p key={product._id}>
            {" "}
            <Brand4Products product={product}></Brand4Products>
          </p>
        );
      })}
    </div>
  );
};

export default BrandsProduct;
