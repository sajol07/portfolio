import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
                        <div className="footer-col">
                            <h4>My Projects</h4>
                            <ul>
                                <li><a href="https://jsonuniversisty.netlify.app/">JSON University</a> </li>
                                <li><a href="https://kajolbooks.netlify.app/">Book Archive</a> </li>
                                <li><a href="https://imackajol.netlify.app">IMac Shopping</a> </li>
                                <li><a href="https://travel-agency-7a9a1.web.app/">Travel Agency</a> </li>
                                
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Experties</h4>
                            <ul>
                                <li><a href="Kazoli resume.pdf">Skills</a> </li>
                                <li><a href="Kazoli resume.pdf">Used Tools</a> </li>
                                <li><a href="Kazoli resume.pdf">Used Technologies</a> </li>
                                <li><a href="Kazoli resume.pdf">Familier With </a> </li>
                                <li><a href="Kazoli resume.pdf">Language</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Upcomming</h4>
                            <ul> 
                                <li><a href="Kazoli resume.pdf">Goals</a> </li>
                                <li><a href="Kazoli resume.pdf">Next Projects</a> </li>
                                <li><a href="Kazoli resume.pdf">Project</a> </li>
                                <li><a href="Kazoli resume.pdf">Project</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                               <a href="https://www.facebook.com/kazolikajol"><i className="fab fa-facebook-f"></i></a> 
                               <a href="https://www.instagram.com/kazolikajol/"><i className="fab fa-instagram"></i></a> 
                               <a href="https://www.linkedin.com/in/kazoli-das-5a50511b4/"><i className="fab fa-linkedin-in"></i></a> 
                               <a href="https://www.youtube.com/channel/UCmMzhD28E4iF-yBYKGmlR7w"><i className="fab fa-youtube"></i></a> 
                                
                            </div>
                        </div>
                   </div>
               </div>
               <h6 className="text-center" style={{color:'white', marginTop:'35px', margin:'auto'}}> All © copyright reserved 2020-2021</h6>           </footer>

        
        </div>
    );
};

export default Footer;