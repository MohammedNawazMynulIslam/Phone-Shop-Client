const Brand = ({ brand }) => {
  console.log(brand);
  const { name, image } = brand;
  return (
    <div>
      <div className="card w-[400px] mx-auto h-[400px] bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={image}
            alt="Brand logo"
            className="rounded-xl w-full h-[269px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions mt-7">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
