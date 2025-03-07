import React from 'react';
import { Html } from '@react-three/drei';
import './Contact.css';
import portimg6 from './images/portimg6.jpg';

const Contact = () => {
    return (
        <mesh position={[0, -20, 0]}>
            <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshStandardMaterial color="yellow" />
            <Html distanceFactor={10}>
                <section id="contact" className="contact-content">
                    <h2>Contact Me</h2>
                    <ul>
                        <li><strong>Name:</strong> Sayan Majhi</li>
                        <li><strong>Location:</strong> Howrah, West Bengal</li>
                        <li><strong>Phone No:</strong> 7003099216</li>
                        <li><strong>Email:</strong> ssayanmjhi204@gmail.com</li>
                    </ul>
                    <img src={portimg6} alt="Sayan's Photo" className="profile-pic" />
                </section>
            </Html>
        </mesh>
    );
};

export default Contact;