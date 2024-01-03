import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { useGsapDownStagger, useGsapUpward } from "../Hooks/gsap";
import "./Navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const fav = useRef(null);
  const logo = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [fav];

  useGsapDownStagger(liArr, 1.5);
  useGsapDownStagger(favArr, 2.6);
  useGsapUpward(logo, 2.2);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar wrapper ${isMenuOpen ? "open" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
      <GiHamburgerMenu />

      </button>
      <ul className={`links ${isMenuOpen ? "open" : ""}`}>
        <li ref={li1}>
          <Link to="featured" onClick={toggleMenu}>
            Featured
          </Link>
        </li>
        <li ref={li2}>
          <Link to="about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li ref={li3}>
          <Link to="gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li ref={li3}>
          <Link to="team" onClick={toggleMenu}>
            Team
          </Link>
        </li>
        <li className="logo" ref={logo}>
        <Link to="/" onClick={toggleMenu}>
          <h2>Pyrokinesis</h2>
        </Link>
      </li>
      <li className="favourite-link" ref={fav}>
        <Link to="favourites" onClick={toggleMenu}>
          Events
        </Link>
      </li>
      <li className="favourite-link" ref={fav}>
        <Link to="sponsors" onClick={toggleMenu}>
          Sponsors
        </Link>
      </li>
      </ul>
      
    </div>
  );
};

export default Navbar;
