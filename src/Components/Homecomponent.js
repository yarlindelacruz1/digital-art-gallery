import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function home(){
    return(
        <div>Pixel & Pulse </div>
    )
}

export default home;



/*import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const boxes = [
    { id: 1, title: "Images", img: "images/home-images.jpg", path: "/images" },
    { id: 2, title: "Videos", img: "images/home-videos.jpg", path: "/videos" },
    { id: 3, title: "Digital Art", img: "images/home-digitalart.jpg", path: "/digital-art" },
  ];

  return (
    <div className="main-content">
      <h2>Welcome to Pixel & Pulse Gallery</h2>
      <div className="gallery-grid">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="gallery-item"
            onClick={() => navigate(box.path)}
            style={{ cursor: "pointer" }}
          >
            <img src={box.img} alt={box.title} />
            <h3>{box.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;*/