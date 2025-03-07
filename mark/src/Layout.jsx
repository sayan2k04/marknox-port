import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'; // Navbar is inside Layout
import Footer from './Footer'; // Footer is inside Layout
import './Layout.css'; // Ensure the correct CSS filename

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar /> {/* Navbar at the top */}
            <main className="content">{children}</main> {/* Main content area */}
            <Footer /> {/* Footer at the bottom */}
        </div>
    );
};

// Define PropTypes for type safety
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
