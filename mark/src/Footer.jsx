// src/Footer.jsx
//import React from 'react';
import './Footer.css'; // Import your footer styles
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Footer = () => {
    return (
        <footer className="footer">
            <p>Connect with me on social media!</p>
            <ul className="social-icons">
                <li>
                    <a href="https://github.com/sayan2k04" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sayan-majhi-04660228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sayan_058/profilecard/?igsh=dW4wc2I0ZWRuenM5" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/sayan.majhi.94617" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
