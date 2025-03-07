import React from 'react';
import { Html } from '@react-three/drei';
import './Education.css';
import portimgskf from './images/portimgskf.jpeg';
//import portimgschool from './images/portimgschool.jpeg';

const Education = () => {
  return (
    <mesh position={[0, -15, 0]}>
      <coneGeometry args={[1.5, 3, 32]} />
      <meshStandardMaterial color="purple" />
      <Html distanceFactor={10}>
        <section id="education" className="education-container">
          <h2>Education</h2>
          <div className="education-details">
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <img src={portimgskf} alt="Supreme Knowledge Foundation" />
            <p><strong>Supreme Knowledge Foundation Group of Institution</strong></p>
            <p>West Bengal, India</p>
          </div>
        </section>
      </Html>
    </mesh>
  );
};

export default Education;