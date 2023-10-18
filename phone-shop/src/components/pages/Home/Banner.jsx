const Banner = () => {
  return (
    <div className="mt-20 container mx-auto ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fkjXVyh/young-man-holding-shopping-bags-showing-mobile-phone-screen-money-application-standing-yell.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-center font-extrabold text-7xl mb-8 text-white">
              New Arrival
            </h1>

            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/xjWLQMX/Apple-i-Phone-15-Pro-lineup-hero-230912-Full-Bleed-Image-jpg-large.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/Dffr3CW/samsung-galaxy-s23-ultra-facebook-1695194345920.webp" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/47SVMTy/maxresdefault.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/H4fcmn9/realme-11-pro.webp" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/9r80HDd/Xiaomi-Mi-11-blue-and-pink-hues.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.ibb.co/8jKWkyV/ASUS-Rog-Phone-7-And-Cooler.jpg" />
              </div>
            </div>
            <button className="btn btn-outline text-white my-5">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
