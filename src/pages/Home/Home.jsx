import { useEffect, useState } from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import BackTop from "../../components/BackTop/BackTop";
import Projects from "../../components/Projetcs/Projects";

//style
import "./Home.sass";

const Home = () => {
  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) setShowArrowUp(true);
      else setShowArrowUp(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="home">
        <Navbar />
        <Header />
      </header>
      {showArrowUp ? (
        <a href="#home">
          <BackTop />
        </a>
      ) : (
        ""
      )}
      <>
        <About />
        <Projects />
      </>
    </>
  );
};

export default Home;
