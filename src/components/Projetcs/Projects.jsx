/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
//imports
import { useEffect } from "react";
//components
import MagnetoCircle from "../MagnetoCircle/MagnetoCircle";
// style
import "./Projects.sass";
//icons
import { TbApi } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
//images
import RestCountry from "../../imgs/projects/rest-country.png";
import RockPaper from "../../imgs/projects/pedra-papel.png";
import IpAddress from "../../imgs/projects/IP-Address.png";
import Space from "../../imgs/projects/Space.png";
import DisplayFlexCfg from "../../imgs/projects/dp-flex.png";

const Projects = () => {
  // useEffect(() => {
  //   const divCursor = document.createElement("div");
  //   divCursor.classList.add("divCursor");
  //   divCursor.style.position = "fixed";
  
  //   document.body.appendChild(divCursor);
  
  //   let timeoutId;
  
  //   const handleMouseMove = (event) => {
  //     clearTimeout(timeoutId);
  
  //     timeoutId = setTimeout(() => {
  //       const mouseX = event.pageX;
  //       const mouseY = event.pageY;
  //       divCursor.style.left = `${mouseX}px`;
  //       divCursor.style.top = `${mouseY}px`;
  //     }, 2); // Ajuste o valor do timeout conforme necessário
  //   };
  
  //   document.addEventListener("mousemove", handleMouseMove);
  
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.body.removeChild(divCursor);
  //   };
  // }, []);
  

  return (
    <main id="projects" className="projects">
      <MagnetoCircle text={"Projects"} backgroundColor={"orange"} />
      <section>
        <a
          target="_blank"
          href="https://snazzy-malasada-b4cc16.netlify.app/"
          className="container"
        >
          <div className="content  first">
            <h1>REST Coutrie API</h1>
            <div className="content-main">
              <h3>Responsive game built with React + SASS</h3>
              <div className="built-with">
                <TbApi />
                <FaReact />
                <IoLogoJavascript />
                <FaSass />
              </div>
            </div>
            <div className="project-image">
              <img src={RestCountry} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://snazzy-malasada-b4cc16.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>REST Coutrie API</h1>
            <div className="content-main">
              <h3>Responsive game built with React + SASS</h3>
              <div className="built-with">
                <TbApi />
                <FaReact />
                <IoLogoJavascript />
                <FaSass />
              </div>
            </div>
            <div className="project-image">
              <img src={RockPaper} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://snazzy-malasada-b4cc16.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>REST Coutrie API</h1>
            <div className="content-main">
              <h3>Responsive game built with React + SASS</h3>
              <div className="built-with">
                <TbApi />
                <FaReact />
                <IoLogoJavascript />
                <FaSass />
              </div>
            </div>
            <div className="project-image">
              <img src={IpAddress} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://snazzy-malasada-b4cc16.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>REST Coutrie API</h1>
            <div className="content-main">
              <h3>Responsive game built with React + SASS</h3>
              <div className="built-with">
                <TbApi />
                <FaReact />
                <IoLogoJavascript />
                <FaSass />
              </div>
            </div>
            <div className="project-image">
              <img src={Space} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://snazzy-malasada-b4cc16.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>REST Coutrie API</h1>
            <div className="content-main">
              <h3>Responsive game built with React + SASS</h3>
              <div className="built-with">
                <TbApi />
                <FaReact />
                <IoLogoJavascript />
                <FaSass />
              </div>
            </div>
            <div className="project-image">
              <img src={DisplayFlexCfg} alt="rest contry image" />
            </div>
          </div>
        </a>
      </section>
    </main>
  );
};

export default Projects;
