import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const formRef = useRef(null); // Use a ref for the form

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_63ec6fd', // Replace with your EmailJS service ID
                'template_pfzrtpj', // Replace with your EmailJS template ID
                formRef.current, // Use the form reference
                '-Kxp5JUU-pahNBrZx' // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    alert('Email sent successfully!');
                    formRef.current.reset(); // Clear the form
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                    console.error(error);
                }
            );
    };

    const contactStyle = {
        display: 'flex',
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-evenly",
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.5',
        height: "100vh"
    };

    const formStyle = {
        width: isMobile ? '100%' : '80%', // Full width for mobile, 50% for desktop
        maxWidth: '30rem', // Limit the max width for desktop
        margin: '0 auto', // Center the form
        padding: '1.5rem', // Add padding inside the form
        borderRadius: '10px', // Optional: Round the corners
    };

    const leftSectionStyle = {
        width: '40%',
        textAlign: isMobile ? 'center' : '',
        marginBottom: isMobile ? "" : '17rem',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    };

    const textAreaStyle = {
        ...inputStyle,
        height: '100px',
    };

    const buttonStyle = {
        backgroundColor: 'orange',
        border: 'none',
        color: 'white',
        padding: '15px 30px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '25px',
        width: '100%',
    };

    return (
        <>
            <Navbar />
            <div style={contactStyle}>
                <div style={leftSectionStyle}>
                    <h2 style={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                    }}>Contact</h2>
                    <p style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                    }}>Looking forward to hearing from you</p>
                    <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                        <strong>Phone</strong> <br />
                        +91 958 779 9262
                    </p>
                    <p style={{ fontSize: "1rem" }}>
                        <strong>Email</strong> <br />
                        muditmathur05@gmail.com
                    </p>
                </div>
                <form ref={formRef} style={formStyle} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input
                            style={inputStyle}
                            type="text"
                            name="first_name"
                            placeholder="First Name *"
                            required
                        />
                        <input
                            style={inputStyle}
                            type="text"
                            name="last_name"
                            placeholder="Last Name *"
                            required
                        />
                    </div>
                    <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                    />
                    <input style={inputStyle} type="text" name="phone_number" placeholder="Phone Number" />
                    <textarea style={textAreaStyle} name="message" placeholder="Message"></textarea>
                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
