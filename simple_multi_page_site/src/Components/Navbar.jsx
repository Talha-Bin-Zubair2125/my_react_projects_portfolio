import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                padding: "1rem",
                backgroundColor: "#4a90e2",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "0 0 12px 12px"
            }}>
                <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Counter App</Link>
                <Link to="/ColorChanger" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Color Changer App</Link>
                <Link to="/Form_Data" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Form Data App</Link>
            </nav>
        </>
    )
}

export default Navbar
