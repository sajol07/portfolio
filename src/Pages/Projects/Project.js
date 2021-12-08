import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import project1 from "./../../img/project/book.PNG";
import project2 from "./../../img/project/imac.PNG";
import project3 from "./../../img/project/json.PNG";
import project4 from "./../../img/project/travel.PNG";
import './Project.css'

const Project = () => {
  return (
    <div className="project">
      <Row xs={1} sm={1} md={1} lg={2} className="">
        <Col className="column">
          <Card className="my-3 py-3 my-card " style={{height:'500px', width:'500px'}}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Title>Book Archive</Card.Title>
              <Card.Text>
                The site is belong about book archive From Backend API. Find Any
                book from search. <br />
                 Project description <br />
                • We can use this website to Find Book Api <br />
                • This project created by intermediate JavaScript <br />
                • Used  CSS Framework Bootstrap
              </Card.Text>
            </Card.Body>
            {/* <Button> <a href="/book-archive">Project Detail</a></Button> */}
            <Link className="highlighted-btn" to="/book-archive">Project Detail</Link>
          </Card>
        
          <Card className="my-3 py-3 my-card " style={{height:'500px', width:'500px'}}>
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Title>IMac Shopping</Card.Title>
              <Card.Text>
              • This project integrate JavaScript base. <br />
              • This is a online Shop for buying iMac <br />
              • Used Discount coupon do get 20% discount <br />
                Live site : https://imackajol.netlify.app  <br />
                Code link :
                https://github.com/kajoldas/book-interactive-website
              </Card.Text>
            </Card.Body>
            <Link className="highlighted-btn" to="/imac">Project Detail</Link>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 py-3 my-card" style={{height:'500px', width:'500px'}}>
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Title>JSON University</Card.Title>
              <Card.Text>
              •  We used React Router Dom v5 
              •  In our University We Offer A
                vast collection of Course. Science & Technology, Arts and Social
                Science.  It has intelligent Routing system. we used Bootstrap
                and Vanilla Css. <br />
                • live code :
                https://jsonuniversisty.netlify.app/ <br />
                • code link : https://github.com/kajoldas/University-Website{" "}
                <br />
              </Card.Text>
            </Card.Body>
            <Link className="highlighted-btn" to="/json-university">Project Detail</Link>
          </Card>
        
          <Card className="my-3 py-3 my-card" style={{height:'500px', width:'500px'}}>
            <Card.Img variant="top" src={project4} />
            <Card.Body>
              <Card.Title>Travel Agency</Card.Title>
              <Card.Text>
                The site is belong about book archive From Backend API. Find Any
                book from search
              </Card.Text>
            </Card.Body>
            <Link className="highlighted-btn" to="/travel-agency">Project Detail</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
