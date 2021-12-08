import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import image from './../../../img/project/json.PNG'
import image2 from './../../../img/project/json2.PNG'
import image3 from './../../../img/project/json3.PNG'

const jsonUniversity = () => {
    return (
        <div>
             <div className="my-card">
        <h1>JSON University</h1>
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
            <Card.Title>JSON </Card.Title>
            <Card.Text>
            <h5>Technologies Used: </h5>
                <input type="text" className="mx-2" disabled placeholder="Bootstrap"  style={{width:"100px"}}/> 
                <input type="text" className="mx-2" disabled placeholder="React-Router"  style={{width:"130px"}}/> 
                <input type="text" className="mx-2" disabled placeholder="Bootstrap"  style={{width:"100px"}}/> <br /><br />
                •  We used React Router Dom v5  <br />
              •  In our University We Offer A 
                vast collection of Course. Science, Technology, Arts and Social
                Science.  It has intelligent Routing system. we used Bootstrap
                and Vanilla Css. <br />
            </Card.Text>
          </Card.Body>
          {/* <Button> <a href="/book-archive">Project Detail</a></Button> */}
          <div className="my-btn">
            <a className="highlighted-btn" href="https://jsonuniversisty.netlify.app">
              Live Site
            </a>
            <a className="highlighted-btn" href="https://github.com/kajoldas/University-Website">
              Source Code
            </a>
          </div>
          {/* <Link className="highlighted-btn" to="/book-archive">Project Detail</Link> */}
        </Card>
      </div>
        </div>
    );
};

export default jsonUniversity;