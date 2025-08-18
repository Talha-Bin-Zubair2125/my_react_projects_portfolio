import { useState } from 'react'
import Box_Component from './Box_Component'

function App() {
  
  // Red
  let [bg_red, setbg_color_red] = useState(false)
  // Black
  let [bg_black, setbg_color_bg_black] = useState(false)
  // Yellow
  let [bg_yellow, setbg_color_bg_yellow] = useState(false)
  // Green
  let [bg_Green, setbg_color_bg_Green] = useState(false)
  // Pink
  let [bg_Pink, setbg_color_bg_Pink] = useState(false)
  //Purple
  let [bg_Purple, setbg_color_bg_Purple] = useState(false)

  return (
    <>
      {/* Buttons */}
      <div>
        <div style={{padding:"0.5rem",display:"flex",justifyContent:"space-around"}}>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"red",color:"white"}} onClick={()=>{
            bg_red = true;
            setbg_color_red(bg_red)
          }}>Red</button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"black",color:"white"}} onClick={()=>{
            bg_black = true;
            setbg_color_bg_black(bg_black)
          }}>Black</button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"yellow",color:"black"}}
          onClick={()=>{
            bg_yellow = true;
            setbg_color_bg_yellow(bg_yellow)
          }}>Yellow</button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"green",color:"white"}}
          onClick={()=>{
            bg_Green = true;
            setbg_color_bg_Green(bg_Green)
          }}>Green</button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"pink",color:"black"}}
          onClick={()=>{
            bg_Pink = true;
            setbg_color_bg_Pink(bg_Pink)
          }}>Pink</button>
          <button style={{padding:"0.5rem",fontFamily:"sans-serif",backgroundColor:"purple",color:"white"}}
          onClick={()=>{
            bg_Purple = true;
            setbg_color_bg_Purple(bg_Purple)
          }}>Purple</button>
        </div>
      </div>
      
      {bg_red==true?<Box_Component backgroundColor="red"/>:""}
      {bg_black==true?<Box_Component backgroundColor="black" color ="white"/>:""}
      {bg_yellow==true?<Box_Component backgroundColor="yellow"/>:""}
      {bg_Green==true?<Box_Component backgroundColor="green"/>:""}
      {bg_Pink==true?<Box_Component backgroundColor="pink"/>:""}
      {bg_Purple==true?<Box_Component backgroundColor="purple"/>:""} 

      
     
    </>
  )
}

export default App
