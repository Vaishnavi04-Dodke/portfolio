import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Resume.css";

function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <Container>
          <div className="section-title">
            <span>My Resume</span>
            <h2>My Resume</h2>
            <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p>
          </div>

          <Row>
            <Col lg={6}>
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Vaishnavi Dodke</h4>
                <p>
                  <em>
                    "I possess 6 months of internship experience in web design,
                    demonstrating proficiency and skills in creating visually
                    appealing and functional web solutions."
                  </em>
                </p>
                <div>
                <ul>
                  <li>Pune Maharashtra India</li>
                  <li>8767784233</li>
                  <li>Vaishnavidodke55@gmail.com</li>
                </ul>
                </div>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master of Computer Application &amp; Computer Science</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>Institute of computer Application Latur </em>
                </p>
                <p>77%</p>
                <p>
                  <em>Completed </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Computer Science &amp; Computer Science</h4>
                <h5>2018 - 2021</h5>
                <p>
                  <em>
                    College Of Computer Science & Information Technology Latur
                  </em>
                </p>
                <p>77%</p>
               
              </div>
              <div className="resume-item">
                <h4>
                  12 <sup>th</sup>
                </h4>
                <h5>2016 - 2018</h5>
                <p>
                  <em>Shardha Junior College Latur</em>
                </p>
                <p>60%</p>
              </div>
              <div className="resume-item">
                <h4>
                  10 <sup>th</sup>
                </h4>
                <h5>2015 - 2016</h5>
                <p>
                  <em>Kamla Nehru Vidyalaya Latur</em>
                </p>
                <p>74%</p>
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="resume-title">
                Professional Experience & Project Details
              </h3>
              <div className="resume-item">
                <h4>Software Developer Intern</h4>
                <h5> May-2023 - Present</h5>
                <p>
                  <em>Pune Mahrashta India </em>
                </p>
                <div>
                  <ul>
                    <li>
                      Implemented responsive web design techniques to enhance
                      user experience across various devices.
                    </li>
                    <li>
                      Gained proficiency in using HTML, CSS, JavaScript, React..{" "}
                    </li>
                    <li>
                      Applied best practices in coding and adhered to industry
                      standards during development.
                    </li>
                    <li>
                      Identified and resolved frontend bugs, improving overall
                      application stability. Conducted code reviews and
                      implemented optimizations to enhance website performance.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item">
                <h4>Academics project</h4>
                <h5>2017 - 2018</h5>
                <h6>
                  <em>Gift Shop Mangement System</em>
                </h6>
                <div>
                  <ul>
                    <li>
                      Implemented the project using a technology stack that
                      included HTML, CSS, and JavaScript for the frontend,
                      creating an interactive and visually appealing user
                      interface.
                    </li>
                    <li>
                    Employed PHP as the backend technology, ensuring seamless communication between the user interface and the server.
                    </li>
                    <li>
                    Developed a dynamic and responsive design, allowing users to access the Gift Shop Management System from various devices and screen sizes.
                    </li>
                    <li>Incorporated JavaScript for client-side scripting, enhancing the interactivity and responsiveness of the system.</li>
                    <li>
                    Integrated a database to store and manage critical information related to products, customers, and transactions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item">
                <h4>Certification</h4>
                <p>
                  <em>HTML</em>
                </p>
                <p>
                  <em>CSS</em>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Resume;
