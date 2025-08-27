import { useState } from "react";

function App() {
  let [name, setname] = useState("");
  let [fname, setfname] = useState("");
  let [uniname, setuniname] = useState("");
  let [semno, setsem] = useState(0);

  let [nextinfo, setnextinfo] = useState(false);
  //let [disablebtn, setdisable] = useState(false);
  let [disablenextbtn, setdisablenextbtn] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "450px",
    transition: "all 0.3s ease",
  };

  const headingStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#4b0082",
    letterSpacing: "1px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    transition: "0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  // const submitBtn = {
  //   ...buttonStyle,
  //   background: disablebtn ? "#ccc" : "#6a5acd",
  //   color: "white",
  // };

  const nextBtn = {
    ...buttonStyle,
    background: "#32cd32",
    color: "white",
  };

  const uniSubmitBtn = {
    ...buttonStyle,
    background: disablenextbtn ? "#ccc" : "#228b22",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>🎓 Student Information Form</h1>

        {/* First Info */}
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            style={inputStyle}
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Your Father’s Name"
            style={inputStyle}
            value={fname}
            onChange={(e) => {
               setfname(e.target.value);   
            }}
          />
          {/* <button
            style={submitBtn}
             disabled={disablebtn}
            onMouseOver={(e) =>
              !disablebtn && (e.target.style.background = "#483d8b")
            }
            onMouseOut={(e) =>
              !disablebtn && (e.target.style.background = "#6a5acd")
            }
            onClick={() => {
              if (name == "" || fname == "") {
              {
                setdisable(true); 
              }
              } else {
                setdisable(false);
              }
            }}
          >
            Submit Info
          </button> */}

          <button
            style={nextBtn}
            onMouseOver={(e) => (e.target.style.background = "#228b22")}
            onMouseOut={(e) => (e.target.style.background = "#32cd32")}
            onClick={()=>{
              if (name == "" || fname == "") {
                 setnextinfo(false);
              }
              else {
                setnextinfo(true);
              }
            }}
          >
            ➡ Next
          </button>
        </div>
        
        {nextinfo && (
          <div style={{ marginTop: "20px", borderTop: "2px solid #eee", paddingTop: "20px" }}>
            <input
              type="text"
              placeholder="Enter University Name"
              style={inputStyle}
              value={uniname}
              onChange={(e) => {
                setuniname(e.target.value)
              }}
            />
            <input
              type="number"
              placeholder="Enter Semester Number"
              style={inputStyle}
              value={semno}
              onChange={(e) => {
                setsem(Number(e.target.value));
              }}
            />

            <button
              style={uniSubmitBtn}
              onMouseOver={(e) =>
                !disablenextbtn && (e.target.style.background = "#006400")
              }
              onMouseOut={(e) =>
                !disablenextbtn && (e.target.style.background = "#228b22")
              }
              onClick={() => {
                if (uniname == "" || semno == 0) {
                  setdisablenextbtn(true);
                  setuniname("")
                  setsem(0)
                } else {
                  setdisablenextbtn(false);
                }
              }}
            >
              Submit University Info
            </button>
          </div>
        )}
      </div>

      {/* Display */}
      <div style={{ marginTop: "20px", textAlign: "center", color: "white" }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Father Name:</strong> {fname}</p>
        <p><strong>University Name:</strong> {uniname}</p>
        <p><strong>Semester No:</strong> {semno}</p>
      </div>
    </div>
  );
}

export default App;
