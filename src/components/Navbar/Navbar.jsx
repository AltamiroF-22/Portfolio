import { useEffect, useState } from "react";
import "./Navbar.sass";
//logos
import LogoDark from "../../svg/White-Logo.svg";
import Logo from "../../svg/Dark-Logo.svg";

//icons
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    width >= 600 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <img className="white-logo" src={Logo} alt="logo" />

      {/* Menu Mobile */}
      {isMobile ? (
        <div
          className={isMenuOpen ? "nav-mobile-open-true" : "nav-mobile-open"}
        >
          <div className="logo-menu-close">
            {isMenuOpen ? (
              <img className="white-logo" src={LogoDark} alt=" logo" />
            ) : (
              ""
            )}
            <button
              className="menu-mobile-btn"
              onClick={() =>
                isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
              }
            >
              {isMenuOpen ? <GrClose /> : <SlMenu />}
            </button>
          </div>
          {isMenuOpen ? (
            <>
              <ul className="mobile-ul">
                <li className="mobile-li">
                  <a
                    className="mobile"
                    onClick={() => setIsMenuOpen(false)}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="mobile-li">
                  <a
                    className="mobile"
                    onClick={() => setIsMenuOpen(false)}
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="mobile-li">
                  <a
                    className="mobile"
                    onClick={() => setIsMenuOpen(false)}
                    href="#projects"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <ul>
          {/* Menu Descktop */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
