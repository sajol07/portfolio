import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./MyProject.css";
import image from "./../../img/project/json.PNG";
import image2 from "./../../img/project/json2.PNG";
import image3 from "./../../img/project/json3.PNG";
import image4 from "./../../img/project/travel.PNG";
import image5 from "./../../img/project/travel2.PNG";
import image6 from "./../../img/project/travel3.PNG";
import image7 from "./../../img/project/book.PNG";
import image8 from "./../../img/project/book2.PNG";
import image9 from "./../../img/project/book3.PNG";
import image10 from "./../../img/project/imac.PNG";
import image11 from "./../../img/project/imac2.PNG";
import image12 from "./../../img/project/imac3.PNG";

const MyProject = () => {
  return (
    <div className="my-div">
      {/* ----------------------JSON University------------ */}
      <h1 className="py-5 text-center">My Recent Projects</h1>
      <Container className="border border-primary rounded mx-auto my-4 px-4 py-5 y-5  my-5">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  style={{ height: "300px" }}
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  style={{ height: "300px" }}
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  style={{ height: "300px" }}
                  src={image3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>JSON University</h3>
            <h5>Technologies Used: </h5>
            <input
              type="text"
              className="mx-2 my-2 text-center"
              disabled
              placeholder="React"
              style={{ width: "100px" }}
            />
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="React-Router"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="Bootstrap"
              style={{ width: "120px" }}
            />{" "}
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="Vanilla CSS"
            />{" "}
            <input
              type="text"
              className="mx-2 my-2 text-center"
              disabled
              placeholder="Netlify"
              style={{ width: "100px" }}
            />{" "}
            <br />
            <br />
            • We used React Router Dom v5 <br />
            • In our University We Offer A vast collection of Course. Science,
            Technology, Arts and Social Science. <br />
            • It has intelligent Routing system. <br />
            • we used Bootstrap and Vanilla Css. <br />
            <div className="my-btn">
              <a
                className="highlighted-btn text-center"
                href="https://jsonuniversisty.netlify.app"
              >
                Live Site
              </a>
              <a
                className="highlighted-btn text-center"
                href="https://github.com/kajoldas/University-Website"
              >
                Source Code
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --------------------------Travel Agency-------------------------- */}
      <Container className="border border-primary rounded mx-auto my-4 px-4 py-5 y-5">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ height: "400px" }}
                  src={image4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image5}
                  style={{ height: "400px" }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ height: "400px" }}
                  src={image6}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>Travel Agency</h3>
            <h5>Technologies Used: </h5>
            <input
              type="text"
              className="mx-1 text-center"
              disabled
              placeholder="Bootstrap"
              style={{ width: "100px" }}
            />
            <input
              type="text"
              className="text-center mx-1"
              disabled
              placeholder="Vanilla CSS"
              style={{ width: "110px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2"
              disabled
              placeholder="React-Router"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1"
              disabled
              placeholder="React-Hook-Form"
              style={{ width: "170px" }}
            />
            <input
              type="text"
              className="text-center mx-1"
              disabled
              placeholder="Vanilla CSS"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2"
              disabled
              placeholder="Firebase"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2"
              disabled
              placeholder="Express"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2"
              disabled
              placeholder="Node"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2 text-center"
              disabled
              placeholder="Heroku "
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="text-center mx-1 my-2 text-center"
              disabled
              placeholder="MongoDB"
              style={{ width: "120px" }}
            />{" "}
            <br />
            <br />
            The site is belong about Traveling. Users can select their prefered
            destination and Book their tour. The booking information then send
            back to database and users can cancle their tour anytime. <br />
            Project description <br />
            • Users use this website to Find prefered Tour <br />
            • This project created by React JS, React-Router-Dom <br />
            • Users <br />• Used CSS Framework Bootstrap
            <div className="my-btn">
              <a
                className="highlighted-btn text-center"
                href="https://assignment11-82507.web.app/"
              >
                Live Site
              </a>
              <a
                className="highlighted-btn text-center"
                href="https://github.com/kajoldas/travel-agency-server"
              >
                Server Source Code
              </a>
              <a
                className="highlighted-btn text-center"
                href="https://github.com/kajoldas/travel-agency"
              >
                Website Source Code
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ---------------------------Book Archive-------------- */}
      <Container className="border border-primary rounded mx-auto my-4 px-4 py-5 y-5">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  src={image7}
                  style={{ height: "400px" }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  src={image8}
                  style={{ height: "400px" }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-thumbnail"
                  src={image9}
                  style={{ height: "400px" }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>Book Archive</h3>
            <h5>Technologies Used: </h5>
            <input
              type="text"
              className="mx-3 text-center"
              disabled
              placeholder="Bootstrap"
              style={{ width: "95px" }}
            />
            <input
              type="text"
              className="mx-3 text-center"
              disabled
              placeholder="JavaScript"
              style={{ width: "100px" }}
            />
            <input
              type="text"
              className="mx-3 text-center"
              disabled
              placeholder="HTML5"
              style={{ width: "95px" }}
            />
            <input
              type="text"
              className="mx-3 my-2 text-center"
              disabled
              placeholder="CSS3"
              style={{ width: "95px" }}
            />
            <input
              type="text"
              className="mx-3 text-center"
              disabled
              placeholder="API"
              style={{ width: "55px" }}
            />{" "}
            <br />
            <br />
            The site is belong about book archive From Backend API. Find Any
            book from search. <br />
            Project description <br />
            • We can use this website to Find Book from Api <br />
            • This project created by intermediate JavaScript <br />• Used CSS
            Framework Bootstrap
            <br />
            <div className="my-btn">
              <a
                className="highlighted-btn text-center"
                href="https://kajolbooks.netlify.app/"
              >
                Live Site
              </a>
              <a
                className="highlighted-btn text-center"
                href="https://github.com/kajoldas/book-archive-website/blob/master/index.html"
              >
                Source Code
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ------------------------------------IMac Container----------------------- */}

      <Container className="border border-primary rounded mx-auto my-4 px-4 py-5 y-5">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image10}
                  style={{ height: "400px" }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image11}
                  style={{ height: "400px" }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  style={{ height: "400px" }}
                  src={image12}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>IMac</h3>
            <h5>Technologies Used: </h5>
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="Bootstrap"
              style={{ width: "100px" }}
            />
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="JavaScript"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="mx-2 text-center"
              disabled
              placeholder="HTML5"
              style={{ width: "130px" }}
            />
            <input
              type="text"
              className="mx-2 my-2 text-center"
              disabled
              placeholder="CSS3"
              style={{ width: "130px" }}
            />{" "}
            <br />
            <br />
            The site is about buying IMac . Choose your Favourit Hardware
            Configuration <br />
            Project description : <br />
            • This project integrate JavaScript base. <br />
            • This is a online Shop for buying iMac <br />• Used Discount coupon
            do get 20% discount by using Coupon Code "stevekaku"
            <div className="my-btn">
              <a
                className="highlighted-btn text-center"
                href="https://imackajol.netlify.app"
              >
                Live Site
              </a>
              <a
                className="highlighted-btn text-center"
                href="https://github.com/kajoldas/book-interactive-website"
              >
                Source Code
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProject;
