import React from 'react';
import './Hero.css';
import hero from "../../images/Hero.jpg";
import kill from "../../images/Kill.svg";

const Hero = () => {
  return (
    <>
    
    <div className="hero-container">
        
        <img src={kill} alt="" className="text-hero" />
        
    </div>

    </>
  )
}

export default Hero