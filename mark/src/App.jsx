// src/App.jsx
//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './LAY';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import CvPage from './Cvpage';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/about" element={<About />} /> {/* About route */}
                    <Route path="/projects" element={<Projects />} /> {/* Projects route */}
                    <Route path="/contact" element={<Contact />} /> {/* Contact route */}
                    <Route path="/education" element={<Education />} /> {/* Education route */}
                    <Route path="/cv" element={<CvPage />} /> {/* CV Page Route */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
