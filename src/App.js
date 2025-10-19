import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Headercomponent";
import Footer from "./Components/Footercomponent";
import Home from "./Components/Homecomponent";
import { Images, Videos, Digitalart } from "./Components/GalleryPages";

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/digital-art" element={<Digitalart />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

