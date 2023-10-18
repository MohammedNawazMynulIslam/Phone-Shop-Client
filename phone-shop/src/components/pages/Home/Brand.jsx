const Brand = ({ brand, onClick }) => {
  // console.log(brand);
  const { name, image } = brand;
  // const productName = (name) => {};
  return (
    <div onClick={() => onClick(name)}>
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
          <div className="card-actions mt-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
