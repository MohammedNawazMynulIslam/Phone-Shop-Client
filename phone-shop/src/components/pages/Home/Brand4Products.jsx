import { useParams } from "react-router-dom";

const Brand4Products = ({ product }) => {
  console.log(product);

  const { image, name, brandName, price, type, rating } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{brandName}</p>
          <p>{price}</p>
          <p>{type}</p>
          <p>{rating}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand4Products;
