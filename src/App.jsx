import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Values from './components/Values';
import Amenities from './components/Amenities';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Vision />
            <Values />
            <Amenities />
            <Projects />
            <About />
          </>
        } />
        <Route path="/projects" element={<Projects standalone={true} />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About standalone={true} />} />
        <Route path="/contact" element={<Contact standalone={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
