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
              <button 
                onClick={() => setSelectedItem(null)} 
                className="close-button"
              >
                Close
              </button>

          </div>
        </div>
      )}
    </div>
  );
}

const images = [
  { id: 1, title: "Innocence in Bloom", src: "/Images/Innocence.PNG", description: "By Tuesdae Castillo. Half hidden behind the flowers, a child’s eyes tell their own story. Exploring both a feeling of curiosity and comfort. It’s quiet while showing innocence, beauty, and small moments." },
  { id: 2, title: "Violet Daydreams", src: "/Images/Violet-daydreams.PNG", description: "By Tuesdae Castillo. Bright purple flowers stretching toward the sunlight showcasing a moment of stillness and light on a warm day" },
  { id: 3, title: "A Bend in the Journey", src: "/images/Header-1-a-bend.PNG", description: "By Tuesdae Castillo. The boardwalk curves gently through calm water and green trees. It’s a simple, peaceful scene that makes you want to slow down and see where the path leads." },
];

const videos = [
  { id: 1, title: "Alien Planet - 2022", src: "videos/Alien-planet.mp4", description: "Stancu creates moving digital paintings based in surrealism. They usually show space or the universe. In this video he brings you through a magical ethereal landscape in an unknown alien planet. Video is able to show surreal art in an entirely new media." },
  { id: 2, title: "Banff National Park - 2023 ", src: "videos/Banff-national-park.mp4", description: "Begum creates digital media for relaxing and meditative spaces. In this video we see a landscape of Banff National Park shot entirely on drone footage.  The use of drones has created a new and beautiful way to enjoy nature. Began has shot and edited her film in a way that makes it art." },
  { id: 3, title: "Portrtai- 2017", src: "videos/Video-portrait.mp4", description: "Iqbal created Illustrations video and photography for use in media.  His style is bright colors lots of movement and light. This portrait is a slow motion of a woman having color dust blown on her.  The movement adds a new level in interest in portraiture." },
];

const digitalArt = [
  { id: 1, title: "Here Comes", src: "/images/Here-comes.jpg", description: "Citone present a digital collage multimedia pieces that fuses traditional drawing with graphic art skills. She creates a moody thoughtful atmosphere with brushstroke and image manipulation." },
  { id: 2, title: "She Holds Life", src: "/images/She-holds-life.jpg", description: "Citone presents an digital collage my mixing and manipulating multiple existing images. The work shows a powerful image by mixing color black and white.." },
  { id: 3, title: "Depth Of Thought", src: "/images/Depth-of-thought.jpg", description: "Citone here uses digital collage with traditional painting skills.  She uses multiple images with layers of digital paint to create the atmosphere." },
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
