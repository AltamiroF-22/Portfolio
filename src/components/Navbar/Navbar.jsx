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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      width >= 600 ? setIsMobile(false) : setIsMobile(true);
    });
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
                <li>
                  <a className="mobile" onClick={()=> setIsMenuOpen(false)} href="#about">About</a>
                </li>
                <li className="mobile-li">Projects</li>
                <li className="mobile-li">Contact</li>
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
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
