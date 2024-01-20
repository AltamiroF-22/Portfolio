/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./About.sass";

import MagnetoCircle from "../MagnetoCircle/MagnetoCircle";

const About = () => {
  useEffect(() => {
    const articles = document.querySelectorAll(".hidden");
    window.addEventListener("scroll", () => {
      const innerHeightOfWindow = window.innerHeight;

      articles.forEach((e) => {
        const articleTop = e.getBoundingClientRect().top;
        if (articleTop < innerHeightOfWindow) {
          e.classList.add("apears");
        } else {
          e.classList.remove("apears");
        }
      });
    });
  }, []);

  return (
    <main className="main-about" id="about">
      <MagnetoCircle backgroundColor={"white"} text={"About me"} />
      <section className=" section-about">
        <div className="row"></div>

        <article className="hidden">
          <h2>12/2022 </h2>
          <div className="spacing"></div>
          <p>
            Hey there, I'm Altamiro Ribeiro da Rocha Junior, a web development
            enthusiast who began their journey in the programming world in
            December 2022. My exploration started with HTML and CSS, delving
            into the structures and design of web pages.
          </p>
        </article>
        <article className="hidden">
          <h2>03/2023 </h2>
          <div className="spacing"></div>
          <p>
            The passion for web development led me to explore JavaScript in
            March 2023, opening doors to interactivity and dynamism in my
            projects.
          </p>
        </article>
        <article className="hidden">
          <h2>09/2023 </h2>
          <div className="spacing"></div>
          <p>
            Later, in November 2023, I embarked on an exciting journey to learn
            React and Sass, enhancing my skills and enabling me to create more
            robust and stylized web applications.
          </p>
        </article>
        <article className="hidden">
          <h2>12/2023 </h2>
          <div className="spacing"></div>
          <p>
            At the end of 2023, I faced a personal challenge when my mom was
            hospitalized, which caused me to take a break for about two months.
            However, I returned to my learning path at the end of December 2023,
            motivated by my passion for programming and my desire to continue
            growing as a developer.
          </p>
        </article>
        <article className="hidden">
          <h2>01/2024 </h2>
          <div className="spacing"></div>
          <p>
            But nowadays (1/16/2024), I'm excited to start my journey with
            TypeScript, adding an additional layer of typing and structure to my
            skill set. I'm eager to explore new horizons and face more complex
            challenges while continuing to improve my skills as a developer...
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
