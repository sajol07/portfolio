import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import image from './../../../img/project/travel.PNG'
import image2 from './../../../img/project/travel2.PNG'
import image3 from './../../../img/project/travel3.PNG'
import './TravelAgency.css'

const TraveAgency = () => {
    return (
        <div className="my-card">
      <h1 className="py-5">Book Archive</h1>
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
              <input type="text" className="mx-3" disabled placeholder="Bootstrap"  style={{width:"100px"}}/> 
              <input type="text" className="mx-3" disabled placeholder="Vanilla CSS"  style={{width:"110px"}}/> 
              <input type="text" className="mx-3 my-3" disabled placeholder="React-Router"  style={{width:"130px"}}/> 
              <input type="text" className="mx-3" disabled placeholder="React-Hook-Form"  style={{width:"170px"}}/> 
              <input type="text" className="mx-3" disabled placeholder="Vanilla CSS"  style={{width:"130px"}}/> 
              <input type="text" className="mx-3 my-3" disabled placeholder="Firebase"  style={{width:"130px"}}/> 
              <input type="text" className="mx-3 my-3" disabled placeholder="Heroku"  style={{width:"130px"}}/> 
              <input type="text" className="mx-3 my-2" disabled placeholder="MongoDB"  style={{width:"120px"}}/> <br />
            The site is belong about book archive From Backend API. Find Any
            book from search. <br />
            Project description <br />
            • We can use this website to Find Book Api <br />
            • This project created by intermediate JavaScript <br />
            • Used CSS
            Framework Bootstrap
          </Card.Text>
        </Card.Body>
        {/* <Button> <a href="/book-archive">Project Detail</a></Button> */}
        <div className="my-btn">
          <a className="highlighted-btn" href="https://assignment11-82507.web.app/">
            Live Site
          </a>
          <a className="highlighted-btn" href=":https://github.com/kajoldas/travel-agency">
             Source Code
          </a>
          <a className="highlighted-btn" href=":https://github.com/kajoldas/travel-agency">
            Source Code
          </a>
        </div>
        {/* <Link className="highlighted-btn" to="/book-archive">Project Detail</Link> */}
      </Card>
    </div>
    );
};

export default TraveAgency;