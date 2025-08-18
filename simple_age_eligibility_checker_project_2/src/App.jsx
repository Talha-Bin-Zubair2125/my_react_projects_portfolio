import { useState } from 'react'

function App() {
  // For Age
  let [age, controlage] = useState(0)
  let [submit, controlsubmit] = useState(false)
  return (
    <>
    <div style={{padding:"2rem",fontFamily:"sans-serif",fontSize:"larger",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Age Eligibility Checker</h1>
      <p>For Vote and other Stuff</p>
      {/* Div for Heading (Textfield and Button) */}
      <div style={{padding:"2rem"}}>
        <input type="text" style={{width:"50vw",padding:"0.5rem",fontFamily:"sans-serif"}} placeholder='Enter Your Age' onChange={(e)=>{
            age = parseInt(e.target.value);
        }}/>
        <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white"}}
          onClick={()=>{  
              submit = true;
              controlsubmit(submit);
              controlage(age);
              console.log(age);
          }}
        
        >Submit</button>
      </div>
      {/* Paragraph for displaying Eligibility */}
      <p>{age>=18?"Eligible":"Not Eligible"} and age is:{age}</p>
    </div>
    </>
  )
}

export default App
