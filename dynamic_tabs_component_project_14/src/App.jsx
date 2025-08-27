
import { useState } from "react";
import Tabs from "./Tabs/Tabs";


function App() {
  let [elements, setelements] = useState([]);

  // Style for buttons
  const btnStyle = {
    padding: "0.6rem 1.2rem",
    margin: "0.5rem",
    border: "none",
    borderRadius: "8px",
    background: "#483d8b",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s ease",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem", color: "#483d8b" }}>Dynamic Tabs Example</h1>

      {/* Buttons */}
      <div>
        <button
          style={btnStyle}
          value="Tab1"
          onClick={(e) => setelements([...elements, e.target.value])} 
        >
          Tab1
        </button>
        <button
          style={btnStyle}
          value="Tab2"
          onClick={(e) => setelements([...elements, e.target.value])}
        >
          Tab2
        </button>
        <button
          style={btnStyle}
          value="Tab3"
          onClick={(e) => setelements([...elements, e.target.value])}
        >
          Tab3
        </button>
      </div>

      {/* Render Tabs */}
      <Tabs Tabs = {elements}/>
    </div>
  );
}

export default App;
