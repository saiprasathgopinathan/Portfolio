/*
contact.jsx
Name: Saiprasath Gopinath
StuID: 301174654
Date: 16/05/2024
*/


import React, { useState } from 'react';
import '../components/styles.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Form submitted successfully!');
        // Redirect to Home Page
        window.location.href = '/';
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p><b>Phone:</b> +1(978)) 729 9570</p>
                <p><b>Email:</b> sgopina7@my.centennialcollege.ca</p>
                <p><b>Address:</b> Toronto ON, Canada</p>
            </div>
            <h2>Send me a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Last Name:
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Contact Number:
                    <input 
                        type="text" 
                        name="contactNumber" 
                        value={formData.contactNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
