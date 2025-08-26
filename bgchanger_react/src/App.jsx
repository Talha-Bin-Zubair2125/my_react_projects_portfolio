import { useState } from 'react'

function App() {
  const [color, setColor] = useState(["Red","Green","Yellow","Pink","Black","Brown"])
  function colorchange(e){
        // // document.body.style.backgroundColor=color[index];
      if (e.target.id=="Red") {
          document.body.style.backgroundColor=color[0]
          setColor(color)
      }
      else if(e.target.id=="Green"){
          document.body.style.backgroundColor=color[1]
          setColor(color)
      }
      else if(e.target.id=="Yellow"){
          document.body.style.backgroundColor=color[2]
          setColor(color)
      }
      else if(e.target.id=="Pink"){
          document.body.style.backgroundColor=color[3]
          setColor(color)
      }
      else if(e.target.id=="Black"){
          document.body.style.backgroundColor=color[4]
          document.getElementById("h1").style.color="white"
          setColor(color)
      }
      else if(e.target.id=="Brown"){
          document.body.style.backgroundColor=color[5]
          setColor(color)
      }
      
  }
  return (
    <>
    <h1 style={{textAlign:"center",fontFamily:"monospace"}} id='h1'>Background Changer</h1>
    <div style={{border:"2px solid",padding:"20px",display:"flex", justifyContent:"space-around"}}>
      <button onClick={colorchange} style={{backgroundColor:"red"}} id='Red'>Red</button>
      <button onClick={colorchange} style={{backgroundColor:"green"}} id='Green'>Green</button>
      <button onClick={colorchange} style={{backgroundColor:"yellow"}} id='Yellow'>Yellow</button>
      <button onClick={colorchange} style={{backgroundColor:"pink"}} id='Pink'>Pink</button>
      <button onClick={colorchange} style={{backgroundColor:"black",color:"white"}} id='Black'>Black</button>
      <button onClick={colorchange} style={{backgroundColor:"brown"}} id='Brown'>Brown</button>
    </div>
    </>
  )
}

export default App
