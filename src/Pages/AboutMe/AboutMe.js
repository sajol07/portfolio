import React from "react";
import "./AboutMe.css";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="section">
        <Row className="container">
          <Col className="content-section" xs={12} sm={12} md={6} lg={6}>
            <div className="title">
              <h1>About Me</h1>
            </div>
            <div className="content">
              <h3>
                <strong className='h3'> Full-Stack-Web Developer</strong>
              </h3>
              <p>
                I am a Full-Stack Developer with excellent at adopting new
                technologies. Able to work at great proficiency, clean and
                efficient coding. Ready to take the challenging role. Skilled in
                React, MongoDB, and well-known CSS Frameworks like Bootstrap,
                Tailwind and MUI Express, Node.js
              </p>
              <div className="button">
                <Link to="/contactme">Hire Me</Link>
              </div>
            </div>
            <div className="social">
              <a href="http://www.google.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>

          <Col className="image-section" xs={12} sm={12} md={6} lg={6}>
            <img className="image" src="https://images.unsplash.com/photo-1618422168181-177d9d0a1fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBjb2Rpbmd8ZW58MHx8MHx8&w=1000&q=80" alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
