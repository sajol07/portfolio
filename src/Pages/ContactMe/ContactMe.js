import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div className="contactme">
            <h1 className="title">Contact Me</h1>

            <div className="form-parent">
                <form className='form' action="https://formsubmit.co/kajolpori33@gmail.com" method="post">
                    
                    {/* validation */}
                    <input type="hidden" name="_captcha" value="false"/>
                    {/* <input type="hidden" name="_next" value="https://kazolidas.netlify.app/thanks"/> */}
                    <input type="hidden" name="_next" value="http://localhost:3000/thanks"/>

                    <input type="text" name="name" placeholder="Your Name" required/>  <br />
                    <input type="email" name="email" placeholder="Your Email" required/> <br />
                    <textarea name="message" id="" cols="25" rows="5" placeholder="enter your message"></textarea>
                    <button type="submit">Send Your Response</button>

                </form>
            </div>
        </div>
    );
};

export default ContactMe;