import Banner from "./Banner";
import Brands from "./Brands";

import Footer from "./Footer";
import Nav from "./Nav";
import Review from "./Review";

const Home = () => {
  return (
    <div className="container mx-auto mt-14">
      <Nav></Nav>
      <Banner></Banner>
      <Brands></Brands>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
