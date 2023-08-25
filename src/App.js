import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/react-portfolio/" element={<Main />} />
        <Route path="/react-portfolio/about" element={<About />} />
        <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/react-portfolio/experience" element={<Experience />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
