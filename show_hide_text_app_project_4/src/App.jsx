import { useState } from 'react'
import Batman from "./Images/Batman.jpg"

function App() {
  // Btn for View and Hide
  let [showtextandhideapp, controlshowandhide] = useState(false)

  return (
    <>
    {/* Buttons */}
    <h1 style={{textAlign:"center",fontFamily:"sans-serif"}}>Show Hide Text App</h1>
      <div style={{padding:"2rem"}}>
        <div style={{padding:"0.5rem",display:"flex",justifyContent:"center",gap:"2rem"}}>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white",width:"40vw"}} onClick={()=>{
              showtextandhideapp = true;
              controlshowandhide(showtextandhideapp);
              console.log(showtextandhideapp);
          }}>
            View 
          </button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white",width:"40vw"}}
            onClick={()=>{
              showtextandhideapp = false;
              controlshowandhide(showtextandhideapp);
              console.log(showtextandhideapp);
            }}
          >
            Hide
          </button>
        </div>
      </div>
      {showtextandhideapp == true?
     <div style={{border:"2px solid black",padding:"2rem",fontFamily:"sans-serif",fontSize:"large"}} >
        <div style={{padding:"2rem"}}>
            <img src={Batman} alt="" style={{width:"50vw"}}/>
        </div>
     
        <div style={{padding:"2rem"}}>
          <h1>Batman Most Famous Quote</h1>
          <p>it's not who i am underneath but what i do that defines me!</p>
        </div>
     </div>:<p style={{textAlign:"center",fontFamily:"sans-serif",fontSize:"large"}}>Nothing to Display</p>}
    </>
  )
}

export default App
