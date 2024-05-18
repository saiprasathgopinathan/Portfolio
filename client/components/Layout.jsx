/*
Layout.jsx
Name: Saiprasath Gopinath
StuID: 301174654
Date: 16/05/2024
*/


import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Ensure this path is correct
import logo from './logo.jpg'; 
export default function Layout() 
{
    return (
    <>
    <header>
    <img src={logo} alt="logo" className="logo" height="100px" weight="100px"/>
    </header>
    <h1>My Portfolio</h1>
    <nav>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
    </nav>
    <hr />
    </>
    );
}