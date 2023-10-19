// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { _id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.URL.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const updateProduct = {
      image,
      name,
      brandName,
      price,
      type,
      rating,
    };
    console.log(updateProduct);
    fetch(`http://localhost:3000/${brandName}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added successfully!", data);
      })
      .catch((err) => console.error(err));
  };
  const product = useLoaderData();
  const { image, name, brandName, price, type, rating } = product;
  //fetch request to update product here

  return (
    <div className="p-24">
      <h2 className="text-6xl font-extrabold text-center my-6">
        Update Product
      </h2>
      <form onSubmit={handleUpdate}>
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
                defaultValue={image}
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
                defaultValue={name}
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
                defaultValue={brandName}
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
                defaultValue={type}
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
                defaultValue={price}
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
                defaultValue={rating}
                placeholder="Rating(1-5)"
                className="input input-bordered w-full"
                min="1"
                max="5"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update" className="btn  mx-auto" />
      </form>
    </div>
  );
};

export default UpdateProduct;
