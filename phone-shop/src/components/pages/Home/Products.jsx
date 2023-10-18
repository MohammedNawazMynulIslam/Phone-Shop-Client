import { useParams } from "react-router-dom";
import BrandsProduct from "./BrandsProduct";

const ProductsPage = () => {
  const { brandName } = useParams();

  return (
    <div className="container mx-auto">
      <h2 className="text-center my-14 text-7xl font-extrabold text-white">
        {brandName} Products
      </h2>
      <div className="carousel container mx-auto h-[500px]">
        {/* 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/HDkNJP7/Apple-iphone13-hero-09142021-inline-jpg-slideshow-xlarge-2x.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/YhkGQqQ/download.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/hsZXwKM/Samsung-Galaxy-S24-camera.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/NjPtwZb/9d6172cd764c205dfdf41c69ee3ed574.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <BrandsProduct brandName={brandName} />
    </div>
  );
};

export default ProductsPage;
