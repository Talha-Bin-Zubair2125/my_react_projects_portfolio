import React, { useState,useEffect } from "react";

function Notes({ notes, updateparent, counter, setcounter }) {
  // State for Edit
  let [edit_data, seteditdata] = useState(null);
  // State for Delete
  let [delete_data, setdelete] = useState(null);
  // State for Textarea
  let [dataintextarea, setdata] = useState([]);
  // Edit
  let editdata = (index) => seteditdata(index);

  let deldata = (index) =>{
    console.log("index is:",index);
    setdelete(index);
  }
  let confirmDel = (index) =>{
    updateparent(notes.filter((_, i) => i !== index));
    setdata(dataintextarea.filter((_,i)=> i !== index));
    setdelete(null);
  }

  let submitedit = (index) =>  seteditdata(null);

  let datatoedit = (index, value) => {
    const updatedNotes = [...dataintextarea];
    updatedNotes[index] = value;
    setdata(updatedNotes);
    let updatedTasks = notes.map((t, i) => (i === index ? value : t));
    updateparent(updatedTasks);
    console.log("Edit",dataintextarea);
    console.log("Edit Parent",updatedTasks);
  };

  useEffect(() => {
    setdata(notes);   
  }, [notes]);

  return (
    <div style={styles.notesContainer}>
      <h1 style={styles.heading}>📝 My Stylish Notes</h1>
      {notes.map((value, index) => (
        <div key={index} style={styles.noteCard}>
          <textarea
            placeholder={`✍️ Write your note #${index + 1}`}
            style={styles.textarea}
            value={dataintextarea[index]}
            onChange={(e) => datatoedit(index, e.target.value)}
          ></textarea>
          <div style={styles.buttonGroup}>
            <button
              style={{ ...styles.btn, ...styles.deleteBtn }}
              onClick={() => deldata(index)}
            >
              🗑️ Delete
            </button>
            {delete_data === index && (
              <div style={styles.confirmBox}>
                Are you Sure?
                <div style={styles.confirmBtns}>
                  <button style={styles.confirmYes} onClick={() => {confirmDel(index)
                    counter = counter - 1;
                    setcounter(counter);
                  }}>
                    ✅ Yes
                  </button>
                  <button style={styles.confirmNo} onClick={() => setdelete(null)}>
                    ❌ No
                  </button>
                </div>
              </div>
            )}

            <button
              style={{ ...styles.btn, ...styles.editBtn }}
              onClick={() => editdata(index)}
            >
              ✏️ Edit
            </button>

            {edit_data === index && (
              <div style={styles.editContainer}>
                <input
                  type="text"
                  value={dataintextarea[index]}
                  onChange={(e) => datatoedit(index, e.target.value)}
                  style={styles.input}
                />
                <button
                  style={{ ...styles.btn, ...styles.submitBtn }}
                  onClick={() => {submitedit(index);}}
                >
                  ✅ Submit
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  notesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginTop: "40px",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.3rem",
    fontWeight: "800",
    color: "#f9fafb",
    marginBottom: "20px",
    textShadow: "0px 3px 10px rgba(0,0,0,0.6)",
  },
  noteCard: {
    background: "rgba(255, 255, 255, 0.12)",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    width: "90%",
    maxWidth: "700px",
    backdropFilter: "blur(12px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  textarea: {
    width: "80%",
    height: "140px",
    border: "1px solid rgba(255,255,255,0.2)",
    outline: "none",
    fontSize: "16px",
    resize: "vertical",
    minHeight: "100px",
    maxHeight: "300px",
    padding: "14px",
    borderRadius: "14px",
    boxShadow: "inset 0 4px 12px rgba(0,0,0,0.15)",
    marginBottom: "20px",
    background: "rgba(255,255,255,0.15)",
    color: "#f9fafb",
    fontWeight: "500",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  btn: {
    flex: "1 1 120px",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "none",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  },
  deleteBtn: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "#fff",
    boxShadow: "0 5px 15px rgba(239,68,68,0.4)",
  },
  editBtn: {
    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    color: "#fff",
    boxShadow: "0 5px 15px rgba(251,191,36,0.4)",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #10b981, #34d399)",
    color: "#fff",
    boxShadow: "0 5px 15px rgba(16,185,129,0.4)",
  },
  editContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    marginTop: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    outline: "none",
    fontSize: "15px",
    background: "rgba(255,255,255,0.2)",
    color: "#f9fafb",
  },
  confirmBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    marginTop: "10px",
    background: "rgba(239,68,68,0.1)",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(239,68,68,0.3)",
  },
  confirmInput: {
    padding: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.1)",
    color: "#f9fafb",
  },
  confirmBtns: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
  confirmYes: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #16a34a, #22c55e)",
    color: "white",
    cursor: "pointer",
  },
  confirmNo: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #f87171, #ef4444)",
    color: "white",
    cursor: "pointer",
  },
};

export default Notes;
