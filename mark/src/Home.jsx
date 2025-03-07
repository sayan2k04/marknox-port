import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Typed from 'typed.js';
import './Home.css';
import portimg5 from './images/portimg5.jpg';

const Home = () => {
    const cubeRef = useRef();

    // Rotate the cube
    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y += 0.01;
        }
    });

    // Typed.js effect
    React.useEffect(() => {
        const options = {
            strings: ['<i>Frontend Web Developer</i>', '<i>Coding Enthusiast</i>'],
            typeSpeed: 50,
            loop: true,
        };
        const typed = new Typed('#element', options);
        return () => typed.destroy();
    }, []);

    return (
        <mesh ref={cubeRef} position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
            <Html distanceFactor={10}>
                <section id="home" className="home">
                    <div className="intro">
                        <div className="left-section">
                            <h1>Hi, My name is <span className="highlight">Sayan</span></h1>
                            <p>and I am a Student of B.Tech (CSE)</p>
                            <div className="typed">
                                <span id="element" />
                            </div>
                            <div className="button-container">
                                <a href="/cv" className="btn">View CV</a>
                                <a href="https://github.com/sayan2k04" target="_blank" rel="noopener noreferrer" className="btn github-btn">Visit Github</a>
                            </div>
                        </div>
                        <div className="right-section">
                            <img src={portimg5} alt="Sayan" className="profile-image" />
                        </div>
                    </div>
                </section>
            </Html>
        </mesh>
    );
};

export default Home;