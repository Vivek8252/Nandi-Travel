import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Packages from "./components/Packages";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Cars />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
