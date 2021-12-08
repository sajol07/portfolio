import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from './../../img/profile.png'
import './KazoliDas.css'


const KazoliDas = () => {
    return (
        <Container className="my-background">
            <div className="d-flex justify-content-center ">
                <img src={image} className="text-center" alt="kazoli das"/>
                {/* <img className="pt-5 my-5 mx-auto text-center" src="https://www.facebook.com/photo/?fbid=1016749595836618&set=a.111256756385911" alt="kazoli das"/> */}
            </div>

            <h1 className="py-2 my-2 text-center mx-auto display-5">I am Kazoli Das</h1>
            <p className="py-2 text-center mx-auto h4 text-justify">
                Hello I am passionate Full-stack Web Developer with having knowledage on JavaScript Library React JS and the Backend. Also Knowledge on CSS Frameworks like Bootstrap, TailWind, Material UI and Vanilla CSS. I know basic C and C++  but basically I am MERN Developer. I am very focused on learning new technology. I am currently studing in the B.Sc in Engineering in EEE at North Western University, Khulna, Bangladesh. 
            </p>
                    
            <Row>

           <Col className="my-auto" xs={12} sm={12} md={6} lg={6} >
           <h2>My Skills</h2>

                    <h4 className=" my-color">Expertise:</h4>
                    <input type="text" className="text-light  text-center mx-1 my-2" disabled  placeholder="HTML"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="CSS"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="React JS"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="BootStrap"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="JavaScript (ES6)"  style={{ width: "160px" }} />





                    <h4  className=" my-color">Comfortable:</h4>
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Node JS"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Express"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Mongo DB"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Firebase"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="C"  style={{ width: "130px" }} />





                    <h4  className=" my-color">Familiar:</h4>
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Python"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Redux"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Axios"  style={{ width: "130px" }} />
                 


                    <h4  className=" my-color">Other Skills:</h4>
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Audio Editing"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Adobe PhotoShop"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Networking"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Computer Architecture"  style={{ width: "130px" }} />


                    <h4  className=" my-color">Tools:</h4>
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="VS Code"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Chrome"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Git"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="CodeBlocks"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Firebase"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Netlify"  style={{ width: "130px" }} />
                    <input type="text" className="text-center mx-1 my-2" disabled  placeholder="Heroku"  style={{ width: "130px" }} />

                            
           </Col>
           <Col className="my-auto" xs={12} sm={12} md={6} lg={6}>
                    <div className="my-3 py-3 text-center">
                        <h2 className="my-color">My Education Qualification</h2>
                        <h3  className=" my-color">Under Graduation</h3>
                        <h4  className="text-light ">B.Sc in Electrical & Electronics Engineering</h4>
                        <h4  className="text-light quoted-text ">North Western University, Khulna</h4>
                    </div>



                   <div className="my-3 py-3 text-center ">
                    <h3 className="my-color">Diploma in Engineering</h3>
                        <h5 className="text-light ">Diploma in Electronics Engineering</h5>
                        <h5 className="text-white">Khulna Polytecnic Institute, Khulna</h5>
                   </div>
           </Col>

            </Row>


        </Container>
    );
};

export default KazoliDas;