import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                padding: "1rem",
                marginTop: "2rem",
                backgroundColor: "#f1f1f1",
                borderTop: "2px solid #ddd",
                borderRadius: "12px 12px 0 0"
            }}>
                <Link to="/" style={{ color: "#4a90e2", textDecoration: "none", fontWeight: "600" }}>Counter App</Link>
                <Link to="/ColorChanger" style={{ color: "#4a90e2", textDecoration: "none", fontWeight: "600" }}>Color Changer App</Link>
                <Link to="/Form_Data" style={{ color: "#4a90e2", textDecoration: "none", fontWeight: "600" }}>Form Data App</Link>
            </footer>
        </>
    )
}

export default Footer
