import { useState } from 'react'

import "./App.css";

function App() {
  // usestate used for toggle
  let [toggle, settoggle] = useState(false);
  // usestate used for textfield
  let [password,setpassword] = useState("");
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"sans-serif",fontSize:"large",padding:"2rem",gap:"2rem"}}>
      <h1>Password Toggle</h1>
      {/* Div for text field */}
      <div style={{padding:"2rem"}}>
        {/* 
        autoComplete in HTML is actually an instruction to the browser about whether it should remember and automatically fill the input with previously stored values (like usernames, passwords, addresses, etc.).

        It has nothing to do with the password strength indicator you sometimes see (that’s usually custom JavaScript, not autoComplete).

        What autoComplete really does

        autoComplete="on" → Browser can remember what the user typed and suggest/fill it automatically in the future.

        autoComplete="off" → Browser should not remember or suggest values (although some browsers ignore this for login forms).

        autoComplete="new-password" → Tells the browser:

        “Don’t fill with an existing saved password.”

        “Treat this like a brand-new password field — maybe offer to generate one.”

        Often used when signing up so the browser doesn't insert an old saved password. 
        
        */}
        <form action="">
         <input type="password" name="" id="" autoComplete='new-password' placeholder='Enter Password' style={{
          width:"50vw",padding:"0.5rem"
         }} onChange={(e)=>{
              password =   e.target.value;
         }}/>
         </form>
      </div>
      {/* Div for Buttons */}
      <div style={{padding:"2rem",display:"flex",gap:"1rem"}}>
        <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white"}}
          onClick={()=>{
                setpassword(password);
                toggle = true;
                settoggle(toggle);
          }}
        >View</button>
        <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white"}}
         onClick={()=>{
                setpassword(password);
                toggle = false;
                settoggle(toggle);
          }}
        >Hide</button>
      </div>
      <p>Password is:{toggle==true?password:" "}</p>
    </div>
    </>
  )
}

export default App
