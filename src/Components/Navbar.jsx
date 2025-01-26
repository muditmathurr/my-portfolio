import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{
                // border: "2px solid red",
                paddingTop: "1rem",
                width: "100%",
                height: "3rem",
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <div onClick={() => navigate("/")} style={{
                    width: "12rem",
                    // border: "2px solid blue",
                    marginLeft:"1rem",
                    alignItems: "center",
                    textAlign: "center",
                    gap: '1rem',
                    display: 'flex',
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <div style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        backgroundColor: "orange",
                    }}></div>
                    <div>
                        <p onClick={() => navigate("/")} style={{ fontSize: "1.5rem", fontWeight: 'bold'}}>
                            mudit.dev
                        </p>
                    </div>
                </div>

                <div style={{ width: "20rem",
                    // border: "2px solid blue",
                    marginLeft:"1rem",
                    alignItems: "center",
                    textAlign: "center",
                    gap: '1rem',
                    display: 'flex',
                    // justifyContent: "space-between"
                    }}>
                        <button onClick={() => navigate("/resume")} ><h1 style={{fontWeight: "bold"}}>Resume</h1></button>
                        <button onClick={() => navigate("/project")}><h1 style={{fontWeight: "bold"}}>Project</h1></button>
                        <button onClick={() => navigate("/contact")}><h1 style={{fontWeight: "bold"}}>Contact</h1></button>

                </div>
            </div>
        </div>
    )
}

export default Navbar