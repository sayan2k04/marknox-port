// src/Projects.jsx
//import React from 'react';
import './Projects.css';
import portimg5 from './images/portimg5.jpg'; // Replace with your actual image path

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="project-details">
                    <h2>My Projects</h2><br />
                    <div className="project-list">
                        <div className="project-card">
                            <h3>Music-clone Web</h3>
                            <p>A web application that replicates the functionality of a music player.</p>
                            <a href="https://sayan2k04.github.io/music-clone-web/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                        {/* <div className="project-card">
                            <h3>Travel Form</h3>
                            <p>A responsive travel form designed for booking trips.</p>
                            <a href="https://sayan2k04.github.io/Travel-form/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div> */}
                    </div>
                </div>
                <div className="project-image">
                    <img src={portimg5} alt="Project Cover" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
