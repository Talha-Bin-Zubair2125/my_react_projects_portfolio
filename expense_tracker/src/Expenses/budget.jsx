import React from 'react'
import { useState } from 'react';
import "../Styling/Budget.css";
import Add_expenses from './add_expenses';


function Budget() {
  // Budget
  let [budget,setbudget] = useState(5000);
  // Edit Budget
  let [edit,seteditedbudget] = useState(false);
   // Spent so far
  let [spent,setspent] = useState(0);
    //  Remaining
  let [remaining,setremaining] = useState(0);
  return (
    <>
       
            <div className="container">
                {/* Budget */}
                <div className="card budget">
                <p className="title">Budget : {budget} PKR</p>
                <button className="edit-btn"
                    onClick={()=>{
                        seteditedbudget(true);
                    }}
                >Edit</button>
                </div>

                {/* Edit Budget */}
                {
                edit === true? (
                    <div>
                    <input type="text" value={budget} onChange={(e)=>{
                        setbudget(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        seteditedbudget(false);
                    }}>Submit</button>
                    </div>
                ):("")
                }
                {/* Remaining */}
                <div className="card remaining">
                    <p className="title">Remaining</p>
                    <p className="amount">{remaining}</p>
                </div>
                {/* Spent so far */}
                <div className="card spent">
                    <p className="title">Spent so far</p>
                    <p className="amount">{spent}</p>
                </div>
            </div>
            <Add_expenses totalbudget={budget} amount_spent= {spent} 
                amount_remaining= {remaining} 
                funtion_for_budget = {setbudget} 
                funtion_for_amount_spent = {setspent} 
                funtion_for_amount_remaining = {setremaining}
            />
    </>
  );
}

export default Budget
