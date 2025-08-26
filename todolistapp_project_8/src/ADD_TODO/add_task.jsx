import React, { useState } from 'react'

function Add_task({ tasks,taskdata }) {
    let [editdata, seteditdata] = useState("");
    let [editbtn, seteditbtn] = useState(null);
    let [delbtn, setdelbtn] = useState(false);

    let updatestate = (index) =>{
        console.log(index);
        console.log(editdata);
        // Changes Detected
        console.log(tasks[index]);
        let updatedTasks = tasks.map((t, i) => (i === index ? editdata : t));
        taskdata(updatedTasks);
    }
    let delval = (index) =>{
        taskdata(tasks.filter((_, i) => i !== index));  // for delete
    }
    return (
        <>
            <ul style={{
                listStyle: "none",
                padding: 0,
                width: "60vw",
                maxWidth: "600px",
                marginTop: "2rem"
            }}>
                {tasks.map((item, index) => (
                    <li key={index} style={{
                        marginBottom: "1.5rem"
                    }}>
                        {/* Task Card */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "white",
                            padding: "1rem 1.2rem",
                            borderRadius: "12px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                            fontSize: "1rem",
                            fontWeight: "500",
                            transition: "0.3s",
                        }}>
                            {/* Task Text */}
                            <span style={{ flex: 1, color: "#333" }}>{item}</span>

                            {/* Buttons */}
                            <div style={{ display: "flex", gap: "0.6rem" }}>
                                <button style={{
                                    padding: "0.5rem 0.9rem",
                                    border: "none",
                                    borderRadius: "8px",
                                    backgroundColor: "#ffb703",
                                    color: "white",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    transition: "0.3s",
                                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
                                }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = "#e09e00"}
                                    onMouseOut={(e) => e.target.style.backgroundColor = "#ffb703"}
                                    onClick={() => {
                                        seteditbtn(index);
                                        //updatestate(index);
                                        seteditdata(tasks[index])
                                    }}
                                >
                                    ✏️ Edit
                                </button>

                                <button style={{
                                    padding: "0.5rem 0.9rem",
                                    border: "none",
                                    borderRadius: "8px",
                                    backgroundColor: "#e63946",
                                    color: "white",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    transition: "0.3s",
                                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
                                }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = "#c1121f"}
                                    onMouseOut={(e) => e.target.style.backgroundColor = "#e63946"}
                                    onClick={() => {
                                        setdelbtn(index);
                                    }}
                                >
                                    ❌ Delete
                                </button>
                            </div>
                        </div>

                        {/* Delete Confirmation (separate row) */}
                        {delbtn === index && (
                            <div style={{
                                marginTop: "0.8rem",
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "0.5rem",
                                background: "#fff5f5",
                                padding: "0.7rem",
                                borderRadius: "8px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.08)"
                            }}>
                                <span style={{ flex: 1, color: "#e63946", fontWeight: "600" }}>
                                    Are you sure you want to delete?
                                </span>
                                <button style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "none",
                                    borderRadius: "6px",
                                    backgroundColor: "#2a9d8f",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                                    onClick={() => {
                                        // Function to delete
                                        delval(index);
                                        setdelbtn(false)
                                    }}
                                >
                                    ✅ Yes
                                </button>
                                <button style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "none",
                                    borderRadius: "6px",
                                    backgroundColor: "#e76f51",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                                    onClick={() => setdelbtn(false)}
                                >
                                    ❌ No
                                </button>
                            </div>
                        )}

                        {/* Edit Section (separate row) */}
                        {editbtn === index && (
                            <div style={{
                                marginTop: "0.8rem",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "0.6rem",
                                background: "#f0f7ff",
                                padding: "0.8rem",
                                borderRadius: "8px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.08)"
                            }}>
                                <input
                                    type="text"
                                    value={editdata}
                                    style={{
                                        padding: "0.5rem",
                                        borderRadius: "8px",
                                        border: "1px solid #ccc",
                                        outline: "none",
                                        fontSize: "0.95rem",
                                        flex: 1
                                    }}
                                    onChange={(e) => {
                                        editdata = e.target.value;
                                        seteditdata(editdata);
                                    }}
                                />
                                <button style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "none",
                                    borderRadius: "6px",
                                    backgroundColor: "#2a9d8f",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                                    onClick={() => {
                                        console.log(editdata);
                                        updatestate(index);
                                        seteditbtn(false)
                                        
                                    }}
                                >
                                    ✅ Yes
                                </button>
                                <button style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "none",
                                    borderRadius: "6px",
                                    backgroundColor: "#e76f51",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                                    onClick={() => seteditbtn(false)}
                                >
                                    ❌ No
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Add_task
