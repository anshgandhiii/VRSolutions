import React from 'react';
import '../index.css'; // Import the CSS file
import logo from '../assets/logo.jpg';
import drone from '../assets/drone.png';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Precision in Data. Perfection in Design — Powered by AI.
          </h1>
          <p className="hero-description">
            Transforming complexity into clarity with AI-powered data analysis and design.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="hero-button primary">Explore Our Services</a>
            <a href="#contact" className="hero-button secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={drone} // Using logo for now; replace with drone if preferred
            alt="AI-driven traffic analysis" 
          />
          <p className="image-caption">
            AI-driven traffic analysis in action.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default Homepage;