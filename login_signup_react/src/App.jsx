import Login from "./Pages_for_login_signup/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Pages_for_login_signup/Signup"

function App() {
  
  return (
    <>
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Signup/>}>Login</Route>    
        <Route path="/Login" element={<Login/>}>Login</Route>    
        <Route path="/Signup" element={<Signup/>}>Signup</Route>    
      </Routes>       
    </BrowserRouter>

    </>
  )
}

export default App
