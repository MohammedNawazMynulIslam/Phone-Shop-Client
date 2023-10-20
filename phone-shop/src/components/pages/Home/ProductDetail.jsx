const ProductDetail = ({ card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }
  console.log(card);

  const { _id, image, name, brandName, price, type, rating, ShortDescription } =
    card;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{ShortDescription}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                alert("Add to cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
