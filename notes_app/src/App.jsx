import { useState } from "react"
import Notes from "./Component/Notes";

function App() {
  // State for Adding Data in Buttons
  let [adddatainbtn, setaddbtn] = useState([]);
  // State for Count
  let [count, setcount] = useState(0);

  let addNotes = (count) => {
    setaddbtn([...adddatainbtn, count]);
  };

  return (
    <>  
      <div style={appStyle}>
        <h1 style={headingStyle}>📝 Notes Taking App</h1>
        <p style={countStyle}>Note {count}</p>
        
        <button  
          style={addBtnStyle}
          onClick={() => {
            count = count + 1;
            setcount(count);
            addNotes(count);
          }}
        >
          ➕ Add Note
        </button>

        {/* Adding Notes Component */}
        <Notes notes={adddatainbtn} updateparent={setaddbtn} counter = {count} setcounter = {setcount}/>
      </div>
    </>
  )
}

// Styles
const appStyle = {
  maxWidth: "1000px",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "20px",
  background: "linear-gradient(135deg, #f9fafb, #e0e7ff, #fdf4ff)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  textAlign: "center",
  fontFamily: "'Poppins', sans-serif",
};

const headingStyle = {
  marginBottom: "1rem",
  color: "#1e1b4b",
  fontSize: "2.5rem",
  fontWeight: "800",
  textShadow: "2px 2px 8px rgba(0,0,0,0.15)",
};

const countStyle = {
  fontSize: "1.2rem",
  marginBottom: "1rem",
  color: "#334155",
};

const addBtnStyle = {
  padding: "0.8rem 1.5rem",
  border: "none",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
  color: "white",
  fontWeight: "700",
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
};
addBtnStyle[":hover"] = {
  transform: "scale(1.08)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

export default App;
