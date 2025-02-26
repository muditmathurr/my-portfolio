import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import slack from './../assets/slack.jpg'
const Home = () => {
        const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth <= 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
        height: isMobile ? "auto" : "70%",
        textAlign: "center",
    };

    const imageStyle = {
        width: isMobile ? "200px" : "400px",
        height: isMobile ? "200px" : "400px",
        borderRadius: "50%",
        objectFit: "cover",
    };

    const buttonStyle = {
        width: isMobile ? "6rem" : "8.5rem",
        height: isMobile ? "6rem" : "8.5rem",
        borderRadius: "50%",
        fontSize: isMobile ? "0.8rem" : "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        fontWeight: "bold",
    };

    return (
        <>
            <Navbar />
            <div
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Arial, sans-serif",
                    marginTop: "8rem"
                }}
            >
                <div style={containerStyle}>
                    {/* Image Section */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "3px solid black", borderRadius: "50%", padding: "5px"}}>
                        <img
                            style={imageStyle}
                            src={slack}
                            alt="Responsive"
                        />
                    </div>

                    {/* Text Section */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isMobile ? "center" : "flex-start",
                        maxWidth: isMobile ? "100%" : "35%",
                        textAlign: isMobile ? "center" : "left",
                        padding: "1rem",
                    }}>
                        <h1 style={{
                            fontSize: isMobile ? "3rem" : "5rem",
                            fontWeight: "bolder",
                        }}>Hello</h1>
                        <h1 style={{
                            fontSize: "1.3rem",
                            fontWeight: "bolder",
                        }}>I'm Mudit</h1>
                        <p
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: isMobile ? 10 : 12,
                                WebkitBoxOrient: "horizontal",
                                flexWrap: 'wrap'
                            }}
                        >
                            I'm a passionate frontend developer with over 1.5 years of experience building dynamic and responsive web applications using React.js. I specialize in creating intuitive user interfaces, ensuring seamless user experiences, and delivering high-quality code. I'm always eager to learn new technologies, collaborate on exciting projects, and bring ideas to life on the web.
                        </p>
                        {/* Buttons Section */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>


                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}>
                                <button onClick={() => navigate("/resume")} style={{ ...buttonStyle, backgroundColor: "#c06f1e" }}>Resume</button>
                                <button onClick={() => navigate("/project")} style={{ ...buttonStyle, backgroundColor: "#FF5733" }}>Projects</button>
                                <button onClick={() => navigate("/contact")} style={{ ...buttonStyle, backgroundColor: "#15a9a9" }}>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Divider */}
                {/* <div style={{ width: "95vw", height: "1px", border: "1px solid gray", marginTop: "2rem" }}></div> */}
            </div>

            <Footer />
        </>
    );
};

export default Home;
