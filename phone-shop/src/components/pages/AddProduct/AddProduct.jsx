const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.URL.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const ShortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const newProduct = {
      image,
      name,
      brandName,
      price,
      type,
      ShortDescription,
      rating,
    };
    console.log(newProduct);
    fetch("http://localhost:3000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added successfully!", data);
      });
  };
  return (
    <div>
      <div className="p-24">
        <h2 className="text-6xl font-extrabold text-center my-6">
          Add Product
        </h2>
        <form onSubmit={handleAdd}>
          {/* form img and name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="URL"
                  name="URL"
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Brand name and type  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="name"
                  name="brandName"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Type </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and details */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  type="price"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className="mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating(1-5)"
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add" className="btn  mx-auto" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
