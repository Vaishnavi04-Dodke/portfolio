import React from "react";
import "./About.css";
// import AboutImage from "./../../Images/vaishu (1).jpg";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <section id="about" className="about">
        <Container>
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>I'm Fresher </p>
          </div>

          <Row>
            <Col xs={12}  className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start">
              <div className="about-image">
                {/* <img src={AboutImage} alt="About" /> */}
              </div>
              
            </Col>
            <Col className="col-lg-8 d-flex flex-column align-items-stretch">
              <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                <Row className="mt-4">
                  <Col lg={6}>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Name:</strong> <span>Vaishnavi Dodke</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>8767784233</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Pune</span>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>24</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>Vaishnavidodke55@gmail.com</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span></span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
        
            <Row className="mt-n4">
              <div className="skills-content ps-lg-4">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `100%` }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">60%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                     
                      style={{ width: `60%` }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `55%` }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Bootstrap <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `75%` }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    React js <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `55%` }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
