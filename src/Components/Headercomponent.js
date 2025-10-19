import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="title">Pixel & Pulse Gallery</div>
      
      <nav>
        <ul className="navList">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/images">Images</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/digital-art">Digital Art</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
