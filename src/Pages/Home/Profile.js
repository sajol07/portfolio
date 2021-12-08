import React from "react";
import {  Col, Row } from "react-bootstrap";
import Typical from "react-typical";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import MyProject from "../MyProject/MyProject";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Row className="profile-container">
        <Col className="profile-parent " xs={12} sm={12}  md={6} lg={6}>
          <div className="profile-detail">
            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I am <span className="highlighted-text">Kazoli Das</span>
              </span>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "MERN Stack Dev",
                      2000,
                      "Full Stack Web Developer",
                      3000,
                      "React Developer",
                      7000,
                      "Node.Js, Express, Mongo DB",
                      2000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tag">
                  I am Kazoli Das. I am a Web Developer. Building Website for
                  Front and BackEnd
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">Hire Me</button>
              <a
                className="highlighted-btn"
                href="Kazoli resume.pdf"
                download="Kazoli's Resume.pdf"
              >
                Download Resume
              </a>
            </div>
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/kazolikajol">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/kazolikajol/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kazoli-das-5a50511b4/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCmMzhD28E4iF-yBYKGmlR7w/">
                  <i className="fab fa-youtube-square"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>


        <Col className="profile-picture" xs={12} sm={12} md={6} lg={6}>
          <div className="profile-bg"></div>
        </Col>
        
      </Row>
      <MyProject></MyProject>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Profile;
