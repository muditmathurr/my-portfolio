import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../App.css'

const Resume = () => {
    const sectionStyle = {
        width: "90%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        lineHeight: "1.5",
    };

    const headerStyle = {
        display: 'flex',
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        textAlign: "left",
    };
    const downloadResume = {
        fontSize: "15px",
        marginLeft: "10px",
        color: "#8a8e8e"
    }
    const subsectionHeaderStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
    };

    const itemContainerStyle = {
        display: "flex",
        justifyContent: "start",
        marginBottom: "1.5rem",
    };

    const detailsStyle = {
        // display: "flex",
        // justifyContent: "start",
        // border: "2px solid black",
        flex: "0 0 40%",
        gap: "1rem",
    };

    const descriptionStyle = {
        fontSize: "0.9rem",
        color: "#555",
        marginTop: "0.5rem",
    };

    const dividerStyle = {
        width: "100%",
        height: "1px",
        backgroundColor: "#green",
        margin: "2rem 0",
    };

    return (
        <>
            <Navbar />
            <div style={{ padding: "3rem 0", }}>
                <div style={sectionStyle}>


                    <div style={headerStyle}>Resume <button style={downloadResume}>
                        <a
                        href="/Resume.pdf" 
                        download="MyResume.pdf"
                    >
                        Download here
                    </a></button></div>
                    <div>
                        <div style={subsectionHeaderStyle}>Work Experience</div>

                        <div style={itemContainerStyle}>
                            <div>

                            </div>
                            <div style={detailsStyle}>
                                <h4 style={{fontWeight: "bold", fontSize: "1.3rem",  width: "15rem"}}>Frontend Developer</h4>
                                <p>
                                    Deeporion Technology
                                </p>
                                <p>May 2024 - Present</p>
                            </div>
                        </div>
                        <div style={itemContainerStyle}>
                            <div>

                            </div>
                            <div style={detailsStyle}>
                                <h4 style={{fontWeight: "bold", fontSize: "1.3rem",width:"15rem"}}>Software Developer Intern</h4>
                                <p>
                                    Autope Payment Solutions Pvt. Ltd.
                                </p>
                                <p>Nov 2022 - Oct 2023</p>
                            </div>
                        </div>
                    </div>

                    <div style={dividerStyle}></div>

                    <div>
                        <div style={subsectionHeaderStyle}>Education</div>
                        <div style={itemContainerStyle}>
                            <div>
                                <h4 style={{fontWeight: "bold", fontSize: "1.3rem", width:"19rem"}}>Subodh College | Master’s Degree</h4>
                                <p>2021 - 2023</p>
                            </div>
                            
                        </div>
                        <div style={itemContainerStyle}>
                            <div>
                                <h4 style={{fontWeight: "bold", fontSize: "1.3rem", width:"19rem"}}>JECRC University | Bachelor’s Degree</h4>
                                <p>2018 - 2021</p>
                            </div>
                        </div>
                    </div>

                    <div style={dividerStyle}></div>

                    <div>
                        <div style={subsectionHeaderStyle}>Skill & Expertise</div>
                        <div style={itemContainerStyle}>
                            <div style={detailsStyle}>
                                <p style={{
                                    width: "90vw",
                                    gap: ".5rem",
                                    display: "flex",
                                }}>Programming Languages:
                                    <strong>
                                        Javascript, Typescript, Java
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div style={itemContainerStyle}>
                            <div style={detailsStyle}>
                                <p style={{
                                    width: "90vw",
                                    gap: ".5rem",
                                    display: "flex",
                                }}>Web Development:
                                    <strong>
                                        HTML, CSS, Tailwind CSS, Material UI, JS, TS
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div style={itemContainerStyle}>
                            <div style={detailsStyle}>
                                <p style={{
                                    width: "90vw",
                                    gap: ".5rem",
                                    display: "flex",
                                }}>Libraries, Framework and Tools:
                                    <strong>
                                        Reactjs, Redux-Toolkit, Context API, Nextjs, Git, Postman
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div style={itemContainerStyle}>
                            <div style={detailsStyle}>
                                <p style={{
                                    width: "90vw",
                                    gap: ".5rem",
                                    display: "flex",
                                }}>Databases:
                                    <strong >
                                        MongoDb, Mysql, Postgresql
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div style={itemContainerStyle}>
                            <div style={detailsStyle}>
                                <p style={{
                                    width: "90vw",
                                    gap: ".5rem",
                                    display: "flex",
                                }}>Operating System:
                                    <strong>
                                        Linux, Windows
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", height: "1px", border: "1px solid black"}}></div>
            <Footer />
        </>
    );
};

export default Resume;
