const Review = () => {
  return (
    <div>
      <h2 className="text-center font-extrabold text-5xl text-white my-20 mx-auto">
        Customer Reviews
      </h2>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/drhFVk3/marvin-meyer-SYTO3xs06f-U-unsplash.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40">
              <div className="card w-[400px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-[400px]"
                    src="https://i.ibb.co/hcxr46B/Miranda-Kerr-6880801131.jpg"
                    alt="customer"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name: Sarah M.
                    <div className="badge badge-secondary">NEW CUSTOMER</div>
                  </h2>
                  <p>Product: iPhone 13 Pro</p>
                  <p>
                    Review: "I absolutely love my new iPhone 13 Pro! Thanks to
                    your website, I got a great deal on this amazing device!"
                  </p>
                </div>
              </div>
              <div className="card w-[400px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-[400px]"
                    src="https://i.ibb.co/cYRF8P0/80482428.webp"
                    alt="customer"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name: John D.</h2>
                  <p>Product: Samsung Galaxy S21 Ultra</p>
                  <p>
                    Review: "The Samsung Galaxy S21 Ultra is hands down the best
                    Android phone. The performance is top-notch. I'm extremely
                    satisfied with my purchase!"
                  </p>
                </div>
              </div>
              <div className="card w-[400px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-[400px]"
                    src="https://i.ibb.co/D5qtH2n/photo-1506794778202-cad84cf45f1d.jpg"
                    alt="customer"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name: Emily P.</h2>
                  <p>Product: iPhone 13 Pro</p>
                  <p>
                    Review: "I recently switched to the Google Pixel 6, and I'm
                    loving it! Great choice, and thanks for the prompt
                    delivery!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
