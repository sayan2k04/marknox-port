import React from 'react';
import { Html } from '@react-three/drei';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <mesh position={[0, -25, 0]}>
            <planeGeometry args={[10, 1]} />
            <meshStandardMaterial color="gray" />
            <Html distanceFactor={10}>
                <footer className="footer">
                    <p>Connect with me on social media!</p>
                    <ul className="social-icons">
                        <li><a href="https://github.com/sayan2k04" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/sayan-majhi-04660228a" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/sayan_058" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                        <li><a href="https://www.facebook.com/sayan.majhi.94617" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                    </ul>
                </footer>
            </Html>
        </mesh>
    );
};

export default Footer;