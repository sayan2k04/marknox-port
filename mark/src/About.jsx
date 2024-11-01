// src/About.jsx
import './About.css';
import portimg6 from './images/portimg6.jpg'; // Adjust path as needed

const About = () => {
    return (
        <section id="about-me">
            <div className="about-content">
                <h2>About Myself</h2>
                <img src={portimg6} alt="Sayan's Profile" className="profile-pic" />
                <p>
                    Hello! I am Sayan, a passionate web developer with experience in frontend technologies like HTML, CSS, JavaScript, and React. 
                    I am currently pursuing a BTech in Computer Science and Engineering, and I’m enthusiastic about learning new things and creating impactful web solutions.
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
            </div>
        </section>
    );
};

export default About;
