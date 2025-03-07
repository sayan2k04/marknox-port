import React from 'react';
import Layout from './Layout'; // Keep only Layout
//import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import CvPage from './CvPage';
import Footer from './Footer';
import Navbar from './Navbar'; // Navbar is inside Layout 
import './App.css';

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
      <CvPage />
      <Footer />
      <Navbar />
      <Layout />
    </Layout>
  );
};

export default App;
