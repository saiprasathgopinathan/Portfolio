/*
services.jsx
Name: Saiprasath Gopinath
StuID: 301174654
Date: 16/05/2024
*/

import React from 'react';
import '../components/styles.css';
import service1Image from '../components/compvision.png'; // Replace with actual paths to your service images
import service2Image from '../components/nlp.png'; // Replace with actual paths to your service images

export default function Services() 
{
    return (
        <div className="services-page">
            <h1>Services</h1>
            <div className="service">
                <img src={service1Image} alt="Service 1" className="service-image" height="250px"/>
                <h2>Service 1: Computer Vision</h2>
                <ul>
                    <li>Have developed computer vision models ranging from Classification to encoder models and custom OCR models from scratch.</li>
                    <li>Proficient in ComputerVision frameworks like OpenCV, PIL, imgaug, and much more.</li>
                    <li>Expert in finding the right parameters and the perfect model size that solves the problem.</li>
                </ul>            
            </div>
            <div className="service">
                <img src={service2Image} alt="Service 2" className="service-image" height = "150px" />
                <h2>Service 2: NLP</h2>
                <ul>
                    <li>Named Entity recognition to highlight the required information from the mail.</li>
                    <li>Proficient in NLP frameworks like spacy, gensim, Transformers, Flask, word2vec.</li>
                    <li>Document classification to determine which pipeline to continue.</li>
                </ul>
            </div>
        </div>
    );
}