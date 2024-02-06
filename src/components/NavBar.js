import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/MyLogo.png";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <header style={{
      backgroundColor: scrolling ? "black" : "transparent",
    }}>
      <a className="logo" href="index.html">
        <img src={logo} alt="logo" />
      </a>

      <div id="navigation">
        <ul className="nav-menu">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">QUALIFICATIONS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;