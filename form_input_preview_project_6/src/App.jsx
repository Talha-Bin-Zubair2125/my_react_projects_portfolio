import { useState } from 'react'

function App() {
  // e.preventDefault() = "Stop the browser from doing its default action." Normally, when you click submit on a form, the browser refreshes the page.
  
  // State for Textfields
  let [name,setName] = useState("");
  let [Fname,setFName] = useState("");
  let [Uniname,setUniName] = useState("");
  // State for Radio Buttons
  let [selectedoption,setSelectedOption] = useState("");
  //State for Dropdown and Gender Selection
  let [selectedvalue,setselectedvalue] = useState("");
  let [genderselect,setgenderselect] = useState("");
  // State for View and Submit
  let [submitdata,setsubmitdata] = useState(false);
  let [viewdata,setviewdata] = useState(false);
  return (
    <>
        {/* Parent div */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"sans-serif",padding:"2rem"}}>
          {/* Heading for Project */}
          <h1>Form Input Preview</h1>
          {/* Forms */}
          <div style={{padding:"2rem",textAlign:"center"}}>
            <form action="">
              {/* For Name */}
              <input type="text" name="" id="" style={{width:"50vw",marginBottom:"2rem",padding:"0.5rem"}} placeholder='Enter Your Name' onChange={(e)=>{
                  name = e.target.value;
                  console.log("Name is:",name);
                  e.preventDefault();
                  setName(name);  
              }}/>
              {/* For Father Name */}
              <input type="text" name="" id="" style={{width:"50vw",marginBottom:"2rem",padding:"0.5rem"}} placeholder='Enter Your Father Name' onChange={(e)=>{
                Fname = e.target.value;
                console.log("Father Name is:",Fname);
                setFName(Fname);
              }}/> 
              {/* For University Name */}
              <input type="text" name="" id="" style={{width:"50vw",marginBottom:"2rem",padding:"0.5rem"}} placeholder='Enter Your University Name' onChange={(e)=>{
                Uniname = e.target.value;
                console.log("University Name is:",Uniname);
                setUniName(Uniname);
              }}/>
              {/* For Location Selection 
                name="language" → All radios in the same group must share the same name.
                value="..." → The actual value of that radio button.
                checked={selected === "..."} → Ensures React knows which radio is currently active.
                onChange → Updates state when a radio is selected.              
              */}
              <h2>Choose Your City</h2>
              <label>
                <input type="radio" name="location" value="Islamabad" checked={selectedoption == "Islamabad"} id="" onChange={(e)=>{
                  selectedoption  = e.target.value;  
                  setSelectedOption(selectedoption);
                  console.log(selectedoption);
                  e.preventDefault();
                }}/>
                Islamabad
              </label>
              <label>
                <input type="radio" name="location"   id="" value="Rawalpindi" checked={selectedoption == "Rawalpindi"} onChange={(e)=>{
                  selectedoption  = e.target.value;  
                  setSelectedOption(selectedoption);
                  console.log(selectedoption);
                  e.preventDefault();
                }} />
                Rawalpindi
              </label>
              <label>
                <input type="radio" name="location"  id=""  value="Lahore" checked={selectedoption == "Lahore"} onChange={(e)=>{
                  selectedoption  = e.target.value;  
                  setSelectedOption(selectedoption);
                  console.log(selectedoption);
                  e.preventDefault();
                }}/>
                Lahore
              </label>
              {/* For Semester Selection */}
              <h2>Choose Your Semester</h2>
              <select style={{width:"50vw",padding:"0.5rem"}} value={selectedvalue} onChange={(e)=>{
                selectedvalue = e.target.value
                setselectedvalue(selectedvalue);
                console.log(selectedvalue);
                e.preventDefault();
              }}>
                <option value="Select Option">Select Option</option>
                <option value="Semester#1">Semester#1</option>
                <option value="Semester#2">Semester#2</option>
                <option value="Semester#3">Semester#3</option>
                <option value="Semester#4">Semester#4</option>
                <option value="Semester#5">Semester#5</option>
                <option value="Semester#6">Semester#6</option>
                <option value="Semester#7">Semester#7</option>
                <option value="Semester#8">Semester#8</option>
              </select>

              {/* For Gender Selection */}
              <h2>Choose Your Gender</h2>
              <select style={{width:"50vw",padding:"0.5rem",marginBottom:"2rem"}} value={genderselect} onChange={(e)=>{
                genderselect = e.target.value
                setgenderselect(genderselect);
                console.log(genderselect);
                e.preventDefault();
              }}>
                <option value="Select Option">Select Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>

              {/* Buttons */}
            <div>
              <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white",width:"40vw"}} 
                onClick={(e)=>{
                  submitdata = true;
                  setsubmitdata(submitdata);
                
                  console.log(name,Fname,Uniname);
                  console.log(selectedoption,selectedvalue,genderselect);
                  alert("Your Data is Submitted");
                  e.preventDefault();
                }}
              >Submit</button>
              <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white",width:"40vw"}} onClick={(e)=>{
                viewdata = true;
                setviewdata(viewdata);
                console.log(viewdata);
                e.preventDefault()
              }}>View Data</button>
            </div>
            </form>
          </div>
        </div>

        {/* For Output */}
        {viewdata==true?  <div style={{fontFamily:"sans-serif",padding:"2rem"}}>
          <h1>Details are:</h1>
          <p>Name:{name}</p>
          <p>Father Name:{Fname}</p>
          <p>University Name:{Uniname}</p>
          <p>Semester#{selectedvalue}</p>
          <p>Location is:{selectedoption}</p>
          <p>Gender is:{genderselect}</p>
        </div> : " "}
      
    </>
  )
}

export default App
