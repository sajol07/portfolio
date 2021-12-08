import React from "react";
import image from "./../../../img/project/imac.PNG";
import image2 from "./../../../img/project/imac2.PNG";
import image3 from "./../../../img/project/imac3.PNG";
import { Card, Carousel } from "react-bootstrap";

const IMac = () => {
  return (
    <div className="my-card">
      <h1 className="py-5">IMac</h1>
      <Card
        className="my-3 py-3 my-card "
        style={{ height: "500px", width: "500px" }}
      >
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Book Archive</Card.Title>
          <Card.Text>
            <h5>Technologies Used: </h5>
            <input
              type="text"
              disabled
              placeholder="Bootstrap"
              style={{ width: "90px" }}
            />
            <input
              type="text"
              disabled
              placeholder="Javascript"
              style={{ width: "90px" }}
            />
            <input
              type="text"
              disabled
              placeholder="HTML5"
              style={{ width: "90px" }}
            />
            <input
              type="text"
              disabled
              placeholder="CSS3"
              style={{ width: "90px" }}
            />{" "}
            <br />
            The site is about buy IMaz . Choose your Favourit Hardware
            Configuration <br />
            Project description : <br />
            • This project integrate JavaScript base.  
            • This is a online Shop for
            • buying iMac  Used Discount coupon do get 20% discount  by using Coupon Code "stevekaku"
            
          </Card.Text>
        </Card.Body>
        {/* <Button> <a href="/book-archive">Project Detail</a></Button> */}
        <div className="my-btn">
          <a className="highlighted-btn" href="https://imackajol.netlify.app">
            Live Site
          </a>
          <a
            className="highlighted-btn"
            href="https://github.com/kajoldas/book-interactive-website"
          >
            Source Code
          </a>
        </div>
        {/* <Link className="highlighted-btn" to="/book-archive">Project Detail</Link> */}
      </Card>
    </div>
  );
};

export default IMac;
