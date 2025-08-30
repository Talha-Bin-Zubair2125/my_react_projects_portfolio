import React, { useState } from 'react'

function Accordian_2() {
    // Content 
    let [Content, setcontent] = useState([
        {
            title: "Next.JS",
            content: "🌐 Node.js is a JavaScript runtime built on Chrome's V8 engine.  It allows developers to build scalable, high-performance server-side applications using JavaScript. "
        },
        {
            title: "React.JS",
            content: "⚛️ React.js is a JavaScript library for building user interfaces.  It helps developers create reusable UI components and efficiently update the DOM using its virtual DOM system."
        },
        {
            title: "JavaScript",
            content: "💻 JavaScript is a high-level, versatile programming language used to make web pages interactive. It powers both front-end and back-end development in modern applications. "
        }
    ])
    
    // Active FAQ
    let [ActiveFAQ, setActiveFAQ] = useState(0);

    let showcontent = (index) =>{
        ActiveFAQ = index;
        setActiveFAQ(ActiveFAQ);
        console.log("Index",ActiveFAQ);
    }
    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "Poppins, sans-serif" }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "2rem", 
                color: "#483d8b", 
                fontSize: "2rem",
                letterSpacing: "1px"
            }}>📘 FAQ Accordion</h1>
            
            {Content.map((value, index) => (
                <div key={index} style={faqStyle}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                        <p style={qStyle}>What is {value.title}?</p>
                        <button 
                          style={btnStyle} 
                          onClick={() => showcontent(index)}
                        >
                        {ActiveFAQ === index ? "▼" : "▲"}
                        </button>
                    </div>
                    {ActiveFAQ === index && (
                        <div style={ansStyle}>
                          {value.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

// Styles
const faqStyle = {
  background: "linear-gradient(135deg, #f8f9fa, #eef1f7)",
  padding: "1.2rem",
  margin: "1rem 0",
  borderRadius: "14px",
  border: "1px solid #ddd",
  boxShadow: "0px 6px 12px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
};

const qStyle = {
  margin: 0,
  fontWeight: "600",
  color: "#333",
  fontSize: "1.2rem",
};

const btnStyle = {
  padding: "0.5rem 1rem",
  marginLeft: "0.5rem",
  border: "none",
  borderRadius: "8px",
  background: "#6a5acd",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1.1rem",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
  transition: "0.3s ease",
};

const ansStyle = {
  marginTop: "1rem",
  padding: "1rem",
  background: "white",
  borderRadius: "10px",
  border: "1px solid #ddd",
  lineHeight: "1.6",
  color: "#555",
  fontSize: "1rem",
  boxShadow: "inset 0px 2px 6px rgba(0,0,0,0.05)",
  transition: "0.3s ease",
};

export default Accordian_2
