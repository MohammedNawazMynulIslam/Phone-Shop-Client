const ProductDetail = ({ card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }
  console.log(card);

  const { _id, image, name, brandName, price, type, rating } = card;

  return (
    <div>
      <h1>{name}</h1>
      <p>{card.description}</p>
      <img src={card.imageUrl} alt="product" />
      <p>
        <b>Price:</b> ${card.price}
      </p>
      <button
        onClick={() => {
          alert("Add to cart");
        }}
      >
        Buy Now!
      </button>
    </div>
  );
};

export default ProductDetail;
