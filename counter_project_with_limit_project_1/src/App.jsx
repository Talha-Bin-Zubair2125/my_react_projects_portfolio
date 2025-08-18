import { useRef, useState } from 'react'

function App() {
  // for add
  let [addcount, setaddCount] = useState(0);
  // for remove
  let [removecount, setremovecount] = useState(addcount);
  
  // for reset
  let [resetcount,setresetcounter] = useState(0);
  return (
    <>
    {/* Parent */}
      <div 
      style={{fontFamily:"monospace",fontSize:"large",display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem"}}>
        <h1>Number Counter</h1>
          {/* div for counter value */}
          <div style={{padding:"2rem"}}>
              <p>{addcount}</p>
          </div>
          <div style={{padding:"2rem"}}> 
              <button style={{backgroundColor:"green",color:"white",padding:"0.5rem",fontFamily:"monospace",fontSize:"large"}}
                onClick={()=>{
                    addcount = addcount + 1;
                    setaddCount(addcount);
                    console.log(addcount);
                    if (addcount >= 10) {
                        alert("Max Value is 10");
                        addcount = resetcount;
                        setaddCount(addcount)
                    }
                }} 
              >Add
              </button> 
              <button style={{backgroundColor:"green",color:"white",padding:"0.5rem",fontFamily:"monospace",fontSize:"large"}}
                onClick={()=>{
                  console.log("Reset Value",resetcount);
                  addcount = resetcount;
                  console.log("Add Value After Reset",resetcount);
                  console.log(addcount);
                  // in this we have to update addcount so that after reset the value get's changed
                  setaddCount(addcount)
              }}
              >Reset</button>
              <button style={{backgroundColor:"green",color:"white",padding:"0.5rem",fontFamily:"monospace",fontSize:"large"}}
               onClick={()=>{
                  console.log("Add",addcount); 
                  removecount = addcount - 1;
                  console.log("Remove",removecount);
                  // Reason is that in removecount i have stored value of addcount so if i don't update setaddcount the value of addcount remains same so we have to update add after each re-render
                  setaddCount(removecount);
                  console.log("Add Count After Update",addcount);             
                  console.log("Remove After Update",removecount);

                  if (removecount <= 0) {
                      alert("Value is Below Zero");
                      addcount = resetcount;
                      setaddCount(addcount);
                  }
                  
                }}
              >Remove</button>                    
          </div>
      </div>
    </>
  )
}

export default App
