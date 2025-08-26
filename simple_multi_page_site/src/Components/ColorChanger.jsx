import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ColorChanger() {
    let [red, setred] = useState("Red");
    let [green, setgreen] = useState("Green");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                gap: "1rem"
            }}>
                <Link to="/ColorChanger" style={{ textDecoration: "none" }}>
                    <button style={{
                        padding: "0.7rem 1.2rem",
                        backgroundColor: "#e63946",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        transition: "0.3s",
                        marginRight: "1rem"
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#c1121f"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#e63946"}
                        onClick={() => {
                            if (red === "Red") {
                                document.body.style.backgroundColor = red;
                                setred(red);
                            }
                        }}>
                        🔴 Red
                    </button>

                    <button style={{
                        padding: "0.7rem 1.2rem",
                        backgroundColor: "#2a9d8f",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        transition: "0.3s"
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#21867a"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#2a9d8f"}
                        onClick={() => {
                            if (green === "Green") {
                                document.body.style.backgroundColor = green;
                                setgreen(green);
                            }
                        }}>
                        🟢 Green
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ColorChanger
