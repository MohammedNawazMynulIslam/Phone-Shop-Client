import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="container mx-auto mt-14">
      <Nav></Nav>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
