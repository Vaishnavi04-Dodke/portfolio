import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <Container>
          <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>
          <Row>
            <Col lg={6}>
              <Row>
                <Col md={12}>
                  <div className="info-box">
                  <FontAwesomeIcon icon={faShareAlt}  className='icon'/>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <Link to="/" className="twitter"><FaTwitter /></Link>
                      <Link to="/" className="facebook"><FaFacebook /></Link>
                      <Link to="/" className="instagram"><FaInstagram /></Link>
                      <Link to="/" className="google-plus"><FaSkype /></Link>
                      <Link to="/y" className="linkedin"><FaLinkedin /></Link>
                    
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <h3>Email Me</h3>
                    <p>Vaishnavidodke55@gmail.com</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faPhoneAlt}  className='icon'/>
                    <h3>Call Me</h3>
                    <p>+91 8767784233</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <form action="" method="post"  className="php-email-form">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Control type="text" name="name" id="name" placeholder="Your Name" required />
                    </FormGroup>
                  </Col>
                  <Col md={6} className="mt-3 mt-md-0">
                    <FormGroup>
                      <Form.Control type="email" name="email" id="email" placeholder="Your Email" required />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup className="mt-3">
                  <Form.Control type="text" name="subject" id="subject" placeholder="Subject" required />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Form.Control as="textarea" name="message" rows="6" placeholder="Message" required />
                </FormGroup>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
