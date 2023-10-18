import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-14 text-7xl font-extrabold text-white ">
        Brands Collection
      </h2>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/PMwmV0F/andrew-ridley-j-R4-Zf-ri-Ej-I-unsplash.jpg)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-28">
          {brands.map((brand) => (
            <Brand key={brand._id} brand={brand}></Brand>
          ))}
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </div>
  );
};

export default Brands;
