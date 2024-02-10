import React from 'react';
import './Banner.css';
import HeroImage from './../../Images/profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>


          <section
          id="hero"
          style={{
            // background: `url(/Images/j) top right`,
            backgroundRepeat: 'no-repeat',
            background:`url('${HeroImage}')top right`,
            backgroundSize: 'cover',
            backgroundPosition: 'relative',
          }}
        >
        
      <div className="hero-container">
          <h1>Vaishnavi Dodke</h1>
          <h2>FrontEnd Developer</h2>
          <Link to ="/about" className="btn-scroll scrollto" title="Scroll Down">
            <i className="fas fa-chevron-down"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Banner;
