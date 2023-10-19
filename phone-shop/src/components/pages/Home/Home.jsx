import DarkModeToggle from "../../Toggle/Toogle";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";
import Nav from "./Nav";
import Review from "./Review";
import Sale from "./Sale";

const Home = () => {
  return (
    <div className="container mx-auto mt-14 bg-white dark:bg-gray-900 text-black dark:text-white">
      <DarkModeToggle></DarkModeToggle>
      <Nav />
      <Banner />
      <Brands />
      <Review />
      <Sale />
      <Footer />
    </div>
  );
};

export default Home;
