import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Lorum from "./pages/Lorum";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecretCodeEgg from "./components/SecretCodeEasterEgg";
import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  function handleEasterEggClick() {
    setIsEasterEggActive(true);
  }

  return (
    <div className="mainApp" id={isEasterEggActive ? "Easteregg" : ""}>
      <BrowserRouter>
        <Header onEasterEggClick={handleEasterEggClick} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/lorum" element={<Lorum />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <SecretCodeEgg />
      </BrowserRouter>
    </div>
  );
}

export default App;
