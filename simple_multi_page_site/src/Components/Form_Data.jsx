import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Form_Data() {
    let [val, setval] = useState("")

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                gap: "1rem",
                fontFamily: "Segoe UI, sans-serif"
            }}>
                <Link to="/Form_Data" style={{ textDecoration: "none", width: "100%", maxWidth: "400px" }}>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        onChange={(e) => {
                            val = e.target.value;
                            console.log(val);
                        }}
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                            outline: "none",
                            marginBottom: "1rem",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
                        }}
                    />

                    <button style={{
                        width: "100%",
                        padding: "0.8rem",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#4a90e2",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "0.3s",
                        boxShadow: "0 3px 6px rgba(0,0,0,0.15)"
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#357ABD"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#4a90e2"}
                        onClick={() => {
                            setval(val);
                        }}>
                        Click to Submit
                    </button>

                    <p style={{
                        marginTop: "1rem",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#333"
                    }}>👤 Name is: {val}</p>
                </Link>
            </div>
        </>
    )
}

export default Form_Data
