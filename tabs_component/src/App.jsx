import { useState } from "react";

function App() {
  // Pushing Elements in Array
  let [Tabs, setTabs] = useState([]);
  let [Tabtoopen, settabtoopen] = useState(0);
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #f3f4f7, #e6e9f0)",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <h1
          style={{
            marginBottom: "1.5rem",
            color: "#483d8b",
            fontSize: "2rem",
            letterSpacing: "1px",
          }}
        >
          🚀 Tab System
        </h1>

        {/* Buttons */}
        <div style={{ marginBottom: "2rem" }}>
          <button
            value={"Tab1"}
            onClick={(e) => {
              setTabs([...Tabs, e.target.value]);
              settabtoopen(Tabs.length);
            }}
            style={btnStyle}
          >
            Tab 1
          </button>
          <button
            value={"Tab2"}
            onClick={(e) => {
              setTabs([...Tabs, e.target.value]);
              settabtoopen(Tabs.length);
            }}
            style={btnStyle}
          >
            Tab 2
          </button>
          <button
            value={"Tab3"}
            onClick={(e) => {
              setTabs([...Tabs, e.target.value]);
              settabtoopen(Tabs.length);
            }}
            style={btnStyle}
          >
            Tab 3
          </button>
        </div>

        {/* Tab Content */}
        <div
          style={{
            width: "60%",
            minHeight: "180px",
            border: "2px solid #6a5acd",
            borderRadius: "12px",
            padding: "1.5rem",
            background: "white",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          {Tabs.map((value, index) =>
            Tabtoopen === index ? (
              <div key={index}>
                <h2 style={{ color: "#483d8b" }}>{value}</h2>
                <p style={{ color: "#555", lineHeight: "1.6rem" }}>
                  This is the content of <b>{value}</b>.  
                  You can add details, descriptions, or features here.  
                  Try switching between tabs to see the content update instantly.
                </p>
                <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                  <li>✅ Feature One of {value}</li>
                  <li>⚡ Feature Two of {value}</li>
                  <li>🔥 Feature Three of {value}</li>
                </ul>
              </div>
            ) : (
              " "
            )
          )}
        </div>
      </div>
    </>
  );
}

const btnStyle = {
  padding: "0.7rem 1.4rem",
  margin: "0 0.5rem",
  border: "none",
  borderRadius: "8px",
  background: "linear-gradient(135deg, #6a5acd, #483d8b)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s ease",
};

export default App;
