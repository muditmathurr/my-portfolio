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
                'service_63ec6fd', 
                'template_pfzrtpj',
                formRef.current, 
                '-Kxp5JUU-pahNBrZx'
            )
            .then(
                (result) => {
                    alert('Email sent successfully!');
                    formRef.current.reset();
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                    console.error(error);
                }
            );
    };

    const contactStyle = {
        marginTop: isMobile ? '50px': '',
        display: 'flex',
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "center",
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.5',
        height: "100vh"
    };

    const formStyle = {
        width: isMobile ? '100%' : '80%', 
        maxWidth: '30rem',
        margin: '0 auto', 
        padding: '1.5rem',
        borderRadius: '10px',
    };

    const leftSectionStyle = {
        width: isMobile? '80%': '40%',
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

            <div style={{marginTop: "80px"}}></div>
            <Footer />
        </>
    );
};

export default Contact;
