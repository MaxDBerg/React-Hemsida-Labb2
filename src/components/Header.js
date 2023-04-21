import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [activeLink, setActiveLink] = useState(null);

  function handleEasterClick() {
    props.onEasterEggClick();
  }

  function handleLinkClick(linkName) {
    setActiveLink(linkName);
  }

  return (
    <header>
      <div className="mainHeader">
        <h1 className="headerName" onClick={handleEasterClick}>
          Max Dahlberg's Website
        </h1>
        <nav>
          <div className="navbar">
            <Link
              to="/"
              className={activeLink === "Home" ? "active" : ""}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={activeLink === "Projects" ? "active" : ""}
              onClick={() => handleLinkClick("Projects")}
            >
              Projects
            </Link>
            <Link
              to="/lorum"
              className={activeLink === "Lorum" ? "active" : ""}
              onClick={() => handleLinkClick("Lorum")}
            >
              Lorum
            </Link>
            <Link
              to="/about"
              className={activeLink === "About" ? "active" : ""}
              onClick={() => handleLinkClick("About")}
            >
              About me
            </Link>
            <Link
              to="/contact"
              className={activeLink === "Contact" ? "active" : ""}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
