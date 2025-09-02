import React, { useState } from 'react'
import '../Styling/Style_for_SignUp.css'
import { Link } from 'react-router-dom';

function Signup() {
    // States 
    let [firstname,setfirstname] = useState("");
    let [surname,setsurname] = useState("");
    let [dob,setdob] = useState("");
    let [gender,setgender] = useState("");
    let [email,setemail] = useState("");
    let [password,setPassword] = useState("");
    let [signup,setsignup] = useState(false);

    // Local Storage
    let [data,setdata] = useState({
        "FirstName" : "",
        "SurName": "",
        "DOB" :"",
        "Gender":"",
        "Email" :"",
        "Password" : "",
    });

    let [user,setuser] = useState([]);
    // Store Multiple Users
    let new_user = (users) =>{
        setuser([...user,users]);
        user.push(users);
        localStorage.setItem('Users_Data',JSON.stringify(user));
    } 
    
    return (
        <>
            <div className="signup-container">
                <form className="signup-form">
                    
                    {/* Heading */}
                    <h1 className="signup-heading">Create Your Account</h1>
                    
                    {/* Textfields */}
                    <div className="input-row">
                        <input type="text" placeholder='Enter Your First Name' value={firstname} onChange={(e)=>{setfirstname(e.target.value); setdata({...data,FirstName : e.target.value});}} />
                        <input type="text" placeholder='Enter Your SurName' value={surname} onChange={(e)=>{setsurname(e.target.value); setdata({...data,SurName : e.target.value});}} />
                    </div>
                    
                    {/* DOB */}
                    <div className="input-group">
                        <input type="date" value={dob} onChange={(e)=>{setdob(e.target.value); setdata({...data,DOB : e.target.value});}}/>
                    </div>
                    
                    {/* Gender */}
                    <div className="gender-group">
                        <label>
                          <input type="radio" name="Gender_Select" value="Male" checked={gender === "Male"} onChange={(e)=>{setgender(e.target.value); setdata({...data,Gender : e.target.value});}} />
                          Male
                        </label>
                        <label>
                          <input type="radio" name="Gender_Select" value="Female" checked={gender === "Female"} onChange={(e)=>{setgender(e.target.value); setdata({...data,Gender : e.target.value});}} />
                          Female
                        </label>
                        <label>
                          <input type="radio" name="Gender_Select" value="Other" checked={gender === "Other"} onChange={(e)=>{setgender(e.target.value); setdata({...data,Gender : e.target.value});}} />
                          Other
                        </label>
                    </div>
                    
                    {/* Email */}
                    <div className="input-group">
                        <input type="email" autoComplete='new-email' placeholder='Enter Your Email' value={email} onChange={(e)=>{setemail(e.target.value); setdata({...data,Email : e.target.value}); }} />
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <input type="password" placeholder='Enter Your Password' autoComplete='new-password' value={password} onChange={(e)=>{setPassword(e.target.value); setdata({...data,Password : e.target.value});}} />
                    </div>

                    {/* SignUp Button */}
                    <div>
                        <button onClick={(e)=>{
                                setsignup(true); 
                                e.preventDefault();
                                localStorage.setItem("Users", JSON.stringify(data));
                                console.log("Saved:", data);
                                let users = JSON.parse(localStorage.getItem("Users")) || [];
                                new_user(users);
                            }}>Sign Up
                        </button>
                    </div>

                    {/* Already Have An Account */}
                    <div className="login-link">
                        <Link to="/Login">Already Have An Account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup
