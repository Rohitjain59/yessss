import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Values from './components/Values';
import Amenities from './components/Amenities';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

function App() {

  // Smooth scroll behavior or other global effects can go here
  useEffect(() => {
    // Optional: Add simple scroll interactions
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Vision />
      <Values />
      <Amenities />
      <Projects />
      <About />
    </div>
  );
}

export default App;
