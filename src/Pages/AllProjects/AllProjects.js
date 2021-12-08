import React from 'react';
import Project from '../Projects/Project';
import './AllProjects.css'

const AllProjects = () => {
    return (
        <div className="container">
            <div className="title">
            <h1>All Projects</h1>

            </div>
            <Project></Project>
        </div>
    );
};

export default AllProjects;