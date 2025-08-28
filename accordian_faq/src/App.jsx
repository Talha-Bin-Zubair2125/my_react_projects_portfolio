import { useState } from "react";
import Accordian_2 from "./Accordian_2";

function App() {
  // States
  let [showAns1, setShowAns1] = useState(false);
  let [showAns2, setShowAns2] = useState(false);
  let [showAns3, setShowAns3] = useState(false);

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "70%",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
            📚 Accordion FAQ
          </h1>

          {/* Question#1 */}
          <div style={faqStyle}>
            <p style={qStyle}>What is Node.js?</p>
            <div>
              <button
                onClick={() => setShowAns1(true)}
                style={btnStyle}
              >
                +
              </button>
              <button  style={btnStyle} onClick={()=>{
                setShowAns1(false)
                
              }}>
                -
              </button>
            </div>
          </div>

          {showAns1 === true ? (
            <div style={ansStyle}>
              <p>
                🌐 Node.js is a JavaScript runtime built on Chrome's V8 engine.  
                It allows developers to build scalable, high-performance server-side 
                applications using JavaScript.  
              </p>
            </div>
          ) : (
            " "
          )}

          {/* Question#2 */}
          <div style={faqStyle}>
            <p style={qStyle}>What is React.js?</p>
            <div>
              <button
                onClick={() => setShowAns2(true)}
                style={btnStyle}
              >
                +
              </button>
              <button style={btnStyle} onClick={() => setShowAns2(false)}>
                -
              </button>
            </div>
          </div>

          {showAns2 === true ? (
            <div style={ansStyle}>
              <p>
                ⚛️ React.js is a JavaScript library for building user interfaces.  
                It helps developers create reusable UI components and efficiently update 
                the DOM using its virtual DOM system.  
              </p>
            </div>
          ) : (
            " "
          )}

          {/* Question#3 */}
          <div style={faqStyle}>
            <p style={qStyle}>What is JavaScript?</p>
            <div>
              <button
                onClick={() => setShowAns3(true)}
                style={btnStyle}
              >
                +
              </button>
              <button  style={btnStyle} onClick={() => setShowAns3(false)}>
                -
              </button>
            </div>
          </div>

          {showAns3 === true ? (
            <div style={ansStyle}>
              <p>
                💻 JavaScript is a high-level, versatile programming language used to 
                make web pages interactive.  
                It powers both front-end and back-end development in modern applications.  
              </p>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>

      <Accordian_2/>
    </>
  );
}

// Styles
const faqStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9f9f9",
  padding: "1rem",
  margin: "1rem 0",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const qStyle = {
  margin: 0,
  fontWeight: "bold",
  color: "#333",
};

const ansStyle = {
  background: "#eef2f7",
  padding: "1rem",
  borderRadius: "8px",
  margin: "0.5rem 0 1.2rem 0",
  color: "#444",
  lineHeight: "1.6rem",
  fontSize: "0.95rem",
};

const btnStyle = {
  padding: "0.5rem 1rem",
  marginLeft: "0.5rem",
  border: "none",
  borderRadius: "6px",
  background: "#6a5acd",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;
