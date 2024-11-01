// src/Education.jsx
//import React from 'react';
import './Education.css';
import portimgskf from './images/portimgskf.jpeg';
import portimgschool from './images/portimgschool.jpeg';

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-card">
                <h2>Education</h2>

                {/* Bachelor's Degree */}
                <div className="education-details">
                    <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                    <div className="education-image">
                        <img src={portimgskf} alt="Supreme Knowledge Foundation" />
                    </div>
                    <p><strong>Supreme Knowledge Foundation Group of Institution</strong></p>
                    <p>West Bengal, India</p>
                    <p className="date">October 2024 – Present</p>
                    <p><strong>CGPA:</strong> 7.19</p>
                    <h4>Relevant Coursework</h4>
                    <ul>
                        <li>Data Structures</li>
                        <li>Design and Analysis of Algorithms</li>
                        <li>Operating Systems</li>
                        <li>Compiler Design</li>
                    </ul>
                </div>

                {/* Higher Secondary */}
                <div className="education-details">
                    <div className="education-image">
                        <img src={portimgschool} alt="Anandanagar High School" />
                    </div>
                    <h3>Higher Secondary (Science)</h3>
                    <p><strong>Anandanagar High School</strong>, Bally, West Bengal</p>
                    <p className="date">2022</p>
                    <p><strong>Percentage:</strong> 76%</p>
                </div>

                {/* Secondary */}
                <div className="education-details">
                    <h3>Secondary</h3>
                    <p><strong>Anandanagar High School</strong>, Bally, West Bengal</p>
                    <p className="date">2020</p>
                    <p><strong>Percentage:</strong> 60%</p>
                </div>
            </div>
        </div>
    );
};
export default Education;
