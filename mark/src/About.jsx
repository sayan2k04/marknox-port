import React from 'react';
import { Html } from '@react-three/drei';
import './About.css';
import portimg6 from './images/portimg6.jpg';

const About = () => {
    return (
        <mesh position={[0, -5, 0]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
            <Html distanceFactor={10}>
                <section id="about" className="about-content">
                    <h2>About Myself</h2>
                    <img src={portimg6} alt="Sayan's Profile" className="profile-pic" />
                    <p>
                        Hello! I am Sayan, a passionate web developer with experience in frontend technologies like HTML, CSS, JavaScript, and React.
                    </p>
                    <div className="skills-container">
                        <h3>Skills</h3>
                        <div className="skills">
                            <div className="skill-section">
                                <h4>Frontend</h4>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                            <div className="skill-section">
                                <h4>Programming Languages:</h4>
                                <ul>
                                    <li>C</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                </ul>
                            </div>
                            <div className="skill-section">
                                <h4>Tools</h4>
                                <ul>
                                    <li>Git & GitHub</li>
                                    <li>Visual Studio Code</li>
                                    <li>Chrome DevTools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Html>
        </mesh>
    );
};

export default About;