import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {

  return (
    <>
    <section className="secA">
        <video autoPlay loop muted playsInline>
          <source src="test.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video>
        <div className="pyroText">
        <p style={{letterSpacing:'15px',fontWeight:'600'}}>PYROKINESIS 2024</p>
        <h3>Presents</h3>
          <h1>ENCHANTO ENIGMA</h1>
          <Link to="/register"><button className="explore-button">REGISTER HERE</button></Link>
        
        </div>
      </section>
    
    </>

  );
};

export default Hero;
