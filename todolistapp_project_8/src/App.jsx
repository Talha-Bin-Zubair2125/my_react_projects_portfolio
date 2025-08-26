import { useRef, useState } from 'react'
import Add_task from './ADD_TODO/add_task';

function App() {
  // Add todo
  let [add, addtask] = useState("");
  // State for Array
  let [items,submit] = useState([]);
  // Edit todo
  const [edit,edittask] = useState("");
  // Delete todo
  const [delete_todo,deletetask] = useState("");


  // Function to add Component
  const addelement = ()=>{
    submit(previous => [...previous, add])
  }

  return (
    <>
    {/* Parent */}
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif",
      fontSize: "medium",
      padding: "2rem",
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{
        padding: "1rem 2rem",
        backgroundColor: "#4a90e2",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0 }}>✨ To Do List ✨</h1>
      </div>

      {/* Input Section */}
      <div style={{
        background: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        width: "60vw",
        maxWidth: "500px"
      }}>
        {/* Textfield */}
        <input
          type="text"
          placeholder="Enter Task..."
          style={{
            flex: 1,
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            transition: "0.3s"
          }}
          onFocus={(e) => e.target.style.border = "1px solid #4a90e2"}
          onBlur={(e) => e.target.style.border = "1px solid #ccc"}
          onChange={(e)=>{
              addtask(e.target.value);
          }}
        />
        <button style={{
          padding: "0.7rem 1.2rem",
          border: "none",
          borderRadius: "8px",
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
        onClick={()=>{
          addelement()       
          console.log(items);
        }}>
          ➕ Add Task
        </button> 
      </div>
    </div>
    
      
      <Add_task tasks= {items} taskdata = {submit}/>
       
    </>
  )
}

export default App
