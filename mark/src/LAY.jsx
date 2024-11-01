// src/Layout.jsx
//import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import './layout.css'; // Import CSS styles for the layout

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main className="content">{children}</main> {/* This is where child components will render */}
            <Footer />
        </div>
    );
};

// Define PropTypes for the Layout component
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Specify that 'children' must be a valid React node
};

export default Layout; // Export the Layout component for use in other parts of the application
