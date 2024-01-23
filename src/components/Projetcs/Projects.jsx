/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
// -----------------------------------------------------------------------------

//imports
import { useEffect, useRef } from "react";
//components
import MagnetoCircle from "../MagnetoCircle/MagnetoCircle";
// style
import "./Projects.sass";
//icons
import { TbApi } from "react-icons/tb";
import { FaReact, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
//images
import RestCountry from "../../imgs/projects/rest-country.png";
import RockPaper from "../../imgs/projects/pedra-papel.png";
import IpAddress from "../../imgs/projects/IP-Address.png";
import Space from "../../imgs/projects/Space.png";
import DisplayFlexCfg from "../../imgs/projects/dp-flex.png";

const Projects = () => {
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
              <TbApi />
              <FaReact />
              <IoLogoJavascript />
              <FaSass />
            </div>
            <div className="project-image">
              <img src={RestCountry} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://magical-duckanoo-d9dbfc.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>Rock Paper Scissors</h1>
            <div className="content-main">
              <FaReact />
              <IoLogoJavascript />
              <FaSass />
            </div>
            <div className="project-image">
              <img src={RockPaper} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://elegant-fudge-d486ff.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>IP Address Tracker</h1>

            <div className="content-main">
              <TbApi />
              <FaReact />
              <IoLogoJavascript />
              <FaSass />
            </div>
            <div className="project-image">
              <img src={IpAddress} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://cerulean-gingersnap-90ed6f.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>Space Tourism </h1>
            <div className="content-main">
              <FaReact />
              <IoLogoJavascript />
              <FaSass />
            </div>
            <div className="project-image">
              <img src={Space} alt="rest contry image" />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://64efd8178cf9c304f36e4ead--deluxe-profiterole-fea8eb.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>Display Flex Config</h1>
            <div className="content-main">
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
            </div>
            <div className="project-image">
              <img src={DisplayFlexCfg} alt="rest contry image" />
            </div>
          </div>
        </a>
        {/* <a
          target="_blank"
          href="https://64dafdef853a3a1e79751fc2--iridescent-twilight-603d5e.netlify.app/"
          className="container"
        >
          <div className="content">
            <h1>Display Flex Config</h1>
          
              <div className="built-with">
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
            
            </div>
            <div className="project-image">
              <img src={DisplayFlexCfg} alt="rest contry image" />
            </div>
          </div>
        </a> */}
      </section>
    </main>
  );
};

export default Projects;
