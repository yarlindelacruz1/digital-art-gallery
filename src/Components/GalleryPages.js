import React, { useState } from "react";


function Gallery({ items, type }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="main-content">
      <h2>{type} Gallery</h2>
      <div className="gallery-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelectedItem(item)}
            style={{ cursor: "pointer" }}
          >
            {type === "Videos" ? (
              <video width="100%" controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={item.title} />
            )}
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const images = [
  { id: 1, title: "Galaxy", src: "/Users/yarlindelacruz/digital-art-gallery/src/Components/M16SHO.jpeg", description: "Beautiful sunset over the ocean." },
  { id: 2, title: "Mountain", src: "images/img2.jpg", description: "Snowy mountain peak." },
  { id: 3, title: "Forest", src: "images/img3.jpg", description: "Green forest with sunlight." },
];

const videos = [
  { id: 1, title: "Art Timelapse", src: "videos/video1.mp4", description: "Watch the creation process." },
  { id: 2, title: "Digital Painting", src: "videos/video2.mp4", description: "A digital painting from start to finish." },
  { id: 3, title: "Animation Clip", src: "videos/video3.mp4", description: "Short animated art clip." },
];

const digitalArt = [
  { id: 1, title: "Glitch Art", src: "images/digital1.jpg", description: "Abstract glitch effect." },
  { id: 2, title: "3D Render", src: "images/digital2.jpg", description: "Futuristic 3D render." },
  { id: 3, title: "Pixel Art", src: "images/digital3.jpg", description: "Retro pixel art style." },
];

export function Images() {
  return <Gallery items={images} type="Images" />;
}

export function Videos() {
  return <Gallery items={videos} type="Videos" />;
}

export function Digitalart() {
  return <Gallery items={digitalArt} type="Digital Art" />;
}
