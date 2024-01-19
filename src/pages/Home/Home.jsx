import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import "./Home.sass";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <>
        <About />
      </>
    </>
  );
};

export default Home;
