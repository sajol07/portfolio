import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css'

const Thanks = () => {
    return (
        <div className="thanks">
            <h2>Thank You For Your Inquiry, You will get response soon...</h2>

            <Link to="/home">Home</Link>
        </div>
    );
};

export default Thanks;