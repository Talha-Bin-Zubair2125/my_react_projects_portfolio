import React, { useState } from 'react'
import { Link } from "react-router-dom";

function CounterApp() {
    let [number, setnum] = useState(0);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                fontFamily: "Segoe UI, sans-serif"
            }}>
                <p style={{ fontSize: "1.2rem", fontWeight: "600", color: "#4a90e2" }}>Page #1</p>
                <Link to="/" style={{ textDecoration: "none", textAlign: "center" }}>
                    <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Count is: <b>{number}</b></p>
                    <button style={{
                        padding: "0.7rem 1.2rem",
                        backgroundColor: "#4a90e2",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        transition: "0.3s",
                        boxShadow: "0 3px 6px rgba(0,0,0,0.15)"
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#357ABD"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#4a90e2"}
                        onClick={() => {
                            number = number + 1;
                            setnum(number);
                        }}>
                        Click Me to Update!
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CounterApp
