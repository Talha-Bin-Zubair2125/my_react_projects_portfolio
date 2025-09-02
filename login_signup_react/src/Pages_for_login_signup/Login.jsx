import React, { useEffect, useState } from 'react'
import  '../Styling/Style_for_Login.css'
import { data, Link } from "react-router-dom";
function Login() { 
    // State for Email 
    let [datainemailfield,setdatainemailfield] = useState("");
    // State for Password
    let [Password,setPassword] = useState("");
    // State for Login
    let [Login,SetLogin] = useState(false);

    let data_of_users =  JSON.parse(localStorage.getItem('Users_Data'));
    JSON.stringify(data_of_users);
    
    
    useEffect(()=>{
        if (data == null) {
            console.log("Data Not Present"); 
        }
        else{
            console.log("Data is Present");
        }
    },[])
  

    
    // for login we use two methods .filter() and .find()

    // .find() -- Syntax
    /*
        array.find(callback(element, index, array), thisArg);

        difference b/w filter() and find()
        .find() -- returns the first match
        .filter() -- filter all records that pass the condition
    */


    return (
        <>  
            <div className="login-container">
                <div className="login-box">
                    <h1 className="login-heading">Login</h1>
                    <form action="">
                        {/* Email */}
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email" autoComplete='new-email' value={datainemailfield} required onChange={(e)=>{
                                setdatainemailfield(e.target.value);
                            }}/>     
                        </div>
                        
                        {/* Password */}
                        <div className="input-group">
                            <input type="password" placeholder="Enter your password" autoComplete='new-password' value={Password} required onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                        
                        {/* Button */}
                        <div className="btn-group">
                            <button className="btn-login" 
                            onClick={(e)=>{         
                              SetLogin(true);
                              e.preventDefault();
                            }}>Login</button>
                        </div>
                       {
                        Login === true ? (
                            (() => {
                            let matchedUser = data_of_users.find(
                                (value) =>
                                value.Email === datainemailfield && value.Password === Password
                            );

                            if (matchedUser) {
                                return (
                                <div className="login-message success">
                                    ✅ Login Successful! Welcome back {matchedUser.FirstName}.
                                </div>
                                );
                            } else {
                                return (
                                <div className="login-message error">
                                    ❌ Invalid Email or Password. Try again.
                                </div>
                                );
                            }
                            })()
                        ) : (
                            <div>
                                <Link to="/Signup"><button className="btn-signup">Create Account</button></Link>
                            </div>
                        )
                        }

                        {/* Don't Have Account */}
                        <div className="signup-section">
                            <Link to="/Signup">Don't have an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
