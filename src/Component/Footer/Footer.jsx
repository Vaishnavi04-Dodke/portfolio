import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
  <>
   <footer id="footer">
    <div className="container">
      <h3>Vaishnavi Dodke</h3>
      <p>FrontEnd Developer.</p>
      <div class="social-links">
     
      <Link to="#" className="twitter"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="facebook"><i className="fab fa-facebook"></i></Link>
            <Link to="#" className="instagram"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="google-plus"><i className="fab fa-google-plus"></i></Link>
            <Link to="#" className="linkedin"><i className="fab fa-linkedin"></i></Link>

      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>Vaishnavi</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
             Designed by <Link t0="#">VaishnaviDodke</Link>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>
  )
}

export default Footer;