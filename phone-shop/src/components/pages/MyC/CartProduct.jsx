const CartProduct = ({ product, products, setProducts }) => {
  console.log(typeof product);
  const { _id, image, name, brandName, price, type, rating } = product;

  const handleDelete = (_id) => {
    console.log(typeof _id);

    fetch(`http://localhost:3000/addCart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remain = products.filter((pro) => pro._id !== _id);
    setProducts(remain);
  };

  return (
    <div>
      <div className="card h-[200px]  w-1/2 bg-base-100 shadow-xl image-full">
        <figure>
          <img className="" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandName}</p>
          <p>{price}</p>
          <p>{type}</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
