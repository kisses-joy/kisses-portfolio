import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import "./App.css";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Certificates />
    </div>
  );
}

export default App;
