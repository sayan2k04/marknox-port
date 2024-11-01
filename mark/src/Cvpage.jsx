// src/CvPage.jsx
//import React from 'react';
import './cv.css';
import cvFile from './images/MYCV8.pdf';

const CvPage = () => {
    return (
        <div className="cv-container">
            <iframe src={cvFile} title="CV Document" className="cv-iframe" />
        </div>
    );
};

export default CvPage;
