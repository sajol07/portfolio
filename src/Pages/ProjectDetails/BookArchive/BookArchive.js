import React from "react";
import { Card, Carousel } from "react-bootstrap";
import image from "./../../../img/project/book.PNG";
import image2 from "./../../../img/project/book2.PNG";
import image3 from "./../../../img/project/book3.PNG";

import "./BookArchive.css";

const BookArchive = () => {
  return (
    <div className="my-card">
      <h1 className="py-5 my-3">Book Archive</h1>
      <Card
        className="my-3 py-3 my-card "
        style={{ height: "500px", width: "500px" }}
      >
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        
        
       
        <Card.Body>
          <Card.Title>Book Archive</Card.Title>
          <Card.Text>
          <h5>Technologies Used: </h5>
              <input type="text" className="mx-3" disabled placeholder="Bootstrap"  style={{width:"95px"}}/> 
              <input type="text" className="mx-3" disabled placeholder="API"  style={{width:"55px"}}/> <br />
            The site is belong about book archive From Backend API. Find Any
            book from search. <br />
            Project description <br />
            • We can use this website to Find Book Api <br />
            • This project created by intermediate JavaScript <br />• Used CSS
            Framework Bootstrap
          </Card.Text>
        </Card.Body>
        {/* <Button> <a href="/book-archive">Project Detail</a></Button> */}
        <div className="my-btn">
          <a className="highlighted-btn" href="https://kajolbooks.netlify.app/">
            Live Site
          </a>
          <a className="highlighted-btn" href="https://github.com/kajoldas/book-archive-website/blob/master/index.html">
            Source Code
          </a>
        </div>
        {/* <Link className="highlighted-btn" to="/book-archive">Project Detail</Link> */}
      </Card>
    </div>
  );
};

export default BookArchive;
