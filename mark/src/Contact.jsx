// src/Contact.jsx
import './Contact.css';
import portimg6 from './images/portimg6.jpg'; // Adjust path as needed

const Contact = () => {
    return (
        <section id="personal-info">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <ul>
                    <li><strong>Name:</strong> Sayan Majhi</li>
                    <li><strong>Location:</strong> Madhya Joypur Bill, Howrah, Liluah, 711205</li>
                    <li><strong>Phone No:</strong> 7003099216</li>
                    <li><strong>Email:</strong> ssayanmjhi204@gmail.com</li>
                </ul>
                <img src={portimg6} alt="Sayan's Photo" className="profile-pic" />
            </div>
        </section>
    );
};

export default Contact;
