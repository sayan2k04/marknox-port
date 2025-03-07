import React from 'react';
import { Html } from '@react-three/drei';
import './Projects.css';
import portimg5 from './images/portimg5.jpg';

const Projects = () => {
    return (
        <mesh position={[0, -10, 0]}>
            <torusGeometry args={[1.5, 0.5, 16, 100]} />
            <meshStandardMaterial color="green" />
            <Html distanceFactor={10}>
                <section id="projects" className="projects-container">
                    <h2>My Projects</h2>
                    <div className="project-card">
                        <h3>Music-clone Web</h3>
                        <p>A web application that replicates the functionality of a music player.</p>
                        <a href="https://sayan2k04.github.io/music-clone-web/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                    <img src={portimg5} alt="Project Cover" className="project-image" />
                </section>
            </Html>
        </mesh>
    );
};

export default Projects;