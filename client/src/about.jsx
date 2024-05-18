
/*
about.jsx
Name: Saiprasath Gopinath
StuID: 301174654
Date: 16/05/2024
*/

import React from 'react';
import '../components/styles.css';
import myImage from '../components/pic_project.jpeg'; 
import resume from '../components/Resume.pdf';

export default function About() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="profile-container">
                <img src={myImage} alt="Sai's Headshot" className="profile-image" />
                <div className="profile-description">
                    <p>Hi, I am Sai. Currently, I am pursuing my 2nd semester of Software Engineering Technology at Centennial College.</p>
                    <p>Highly Skilled <b>Backend and AI engineer</b> with <b>4+ years</b> of experience in developing end-to-end solutions with computer vision (models for object detection, classification, recognition, OCR) and NLP (NER, classification) for real-time applications.<br /> 
                    Proficient in functional and low-level programming. Interested in <b>building end-to-end solutions</b> using AI frameworks.</p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">Click here to Download Resume</a>
                </div>
            </div>
        </div>
    );
}
