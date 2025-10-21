import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src="/Images/Header-1-a-bend.PNG"
          alt="Gallery header"
          className="header-image"
        />
        <div className="overlay">
          <div className="title">Pixel & Pulse Gallery</div>
          <nav>
            <ul className="navList">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/digital-art">Digital Art</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

