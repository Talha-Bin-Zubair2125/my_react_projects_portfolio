import React from "react";

function Tabs({ Tabs }) {
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Tabs.map((value, index) => (
        <div
          key={index}
          style={{
            padding: "1rem 2rem",
            border: "2px solid #483d8b",
            borderRadius: "12px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            transition: "0.3s ease",
            cursor: "pointer",
          }}
        >
          <h3 style={{ margin: "0", color: "#483d8b" }}>{value}</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "gray" }}>
             ✨ This is some extra content for <b>{value}</b>.  
                Add details, notes, or highlights here.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
