import React from 'react';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa'; // Importing icons
import { FaXTwitter } from 'react-icons/fa6';
import './../App.css'

const Footer = () => {
    return (
        <div style={{
            // border: "2px solid orange",
            width: "100%",
            padding: "2rem 0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
        }}>
            {/* Phone Section */}
            <div style={{ flex: "1", minWidth: "150px" }}>
                <h4 style={{ margin: "0 0 0.5rem", fontWeight: "bold" }}>Phone</h4>
                <p style={{ margin: 0 }}>+91 958 779 9262</p>
            </div>

            {/* Email Section */}
            <div style={{ flex: "1", minWidth: "150px" }}>
                <h4 style={{ margin: "0 0 0.5rem", fontWeight: "bold" }}>Email</h4>
                <p style={{ margin: 0 }}>muditmathur05@gmail.com</p>
            </div>

            {/* Follow Me Section */}
            <div style={{ flex: "1", minWidth: "150px" }}>
                <h4 style={{ margin: "0 0 0.5rem", fontWeight: "bold" }}>Follow Me</h4>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href="https://www.linkedin.com/in/muditmathurr/" target="_blank" rel="noreferrer" style={{ color: "inherit", fontSize: "1.5rem" }}>
                        <FaLinkedin />
                    </a>
                    {/* Twitter (X) Icon */}
                    <a href="https://x.com/muditdotcom?s=21" target="_blank" rel="noreferrer" style={{ color: "inherit", fontSize: "1.5rem" }}>
                        <FaXTwitter /> 
                    </a>
                    <a href="https://github.com/muditmathurr" target="_blank" rel="noreferrer" style={{ color: "inherit", fontSize: "1.5rem" }}>
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div style={{
                flex: "1",
                minWidth: "200px",
                fontSize: "0.8rem",
                color: "#777",
                marginTop: "1rem"
            }}>
                <p style={{ margin: 0 }}>© 2025 By Mudit Mathur.</p>
            </div>
        </div>
    );
};

export default Footer;
