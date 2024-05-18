/*
project.jsx
Name: Saiprasath Gopinath
StuID: 301174654
Date: 16/05/2024
*/


import React from 'react';
import '../components/styles.css';
import project1Image from '../components/1.png'; // Replace with actual paths to your project images
import project2Image from '../components/2.png'; // Replace with actual paths to your project images
import project3Image from '../components/5.png'; // Replace with actual paths to your project images

export default function Projects() {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project">
                    <img src={project1Image} alt="Project 1" className="project-image" />
                    <h2>Project 1: Student UI</h2>
                    <p>Role: Developer</p>
                    <p>Description: Using JavaFx UI was designed. The user needs to give input based on his choice. If numbers are entered in the name fields the error message will de displayed in the text area below.</p>
                </div>
                <div className="project">
                    <img src={project2Image} alt="Project 2" className="project-image" />
                    <h2>Project 2: Database Filter</h2>
                    <p>Role: Developer</p>
                    <p>Description: Using JavaFX UI was created. The User enters the city name as the input. If city data is stored in JDBC relevant data will be displayed in the text area. If no entries on the city not found, an exception will be thrown.</p>
                </div>
                <div className="project">
                    <img src={project3Image} alt="Project 3" className="project-image" />
                    <h2>Project 3: Media Player</h2>
                    <p>Role: Developer</p>
                    <p>Description: Using the package Media will be the running ground for the video. GridPane and BorderPane serve as the layout for the player. The user can open any <b>mp4</b> video required. The player has the ability to move forward & backward by 10secs, adjust volume, increase/decrease speed.</p>
                </div>
            </div>
        </div>
    );
}
