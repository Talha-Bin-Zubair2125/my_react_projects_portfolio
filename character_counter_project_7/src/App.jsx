import { useState } from 'react'


function App() {
  // State for Textarea
  let [charentered, checkcharentered] = useState("")
  // State for Charleft
  let [charleft, setcharleft] = useState(50);
  
  return (
    <>
        {/* Parent Div  */}
        <div style={{fontFamily:"sans-serif",display:"flex",flexDirection:"column",padding:"2rem",alignItems:"center"}}>
            <div>
              {/* Heading for Project */}
              <div style={{textAlign:"center"}}>
                <h1>Character Counter</h1>
              </div>
              {/* Text Area */}
              <div style={{padding:"2rem"}}>
                <textarea name="" id="" placeholder='Enter Your Text Here' style={{width:"50vw"}} cols={30} rows={10} maxLength={50} value={charentered} onChange={(e)=>{
                  let total_length =  e.target.maxLength;
                  console.log(total_length);
                  let length =  e.target.value.length
                  console.log(length);
                  charleft = total_length - length;
                  console.log("Char Left",charleft);
                  checkcharentered(e.target.value)
                  setcharleft(charleft)
                }}></textarea>
              </div>
              {/* Button */}
              <div style={{padding:"2rem",textAlign:"center"}}>
                <p>Charcter Left:{charleft}</p>
                <p>Max Character Allowed:50</p>
              </div>

              {/* Conditional Rendering */}
              {charleft <= 0 ?alert("You Can't go below 0"):" "}
            </div>
        </div>
    </>
  )
}

export default App
