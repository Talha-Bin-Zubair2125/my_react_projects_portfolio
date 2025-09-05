import React, { useState } from 'react'
import "../Styling/add_expense.css"

function Add_expenses({ totalbudget, amount_spent, amount_remaining, funtion_for_budget, funtion_for_amount_spent, funtion_for_amount_remaining }) {

    // States
    let [Additem, setAdditem] = useState("");
    let [items_with_cost, setitemswithcost] = useState([]);
    let [Cost, setCost] = useState("");
    let [edit,setedit_data] = useState(null);
    let [delete_data,setdeletedata] = useState(null);
    let [toast, setToast] = useState(null);

    // Reduce () for calculations
    let totalofitems = items_with_cost.reduce((acc, value) => {
        return acc + value.Cost
    }, 0);

    // toast helper functions
    let showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500); 
    };

    let add_item = () => {
    if (!Additem || !Cost) {
        showToast("Please enter item and cost!", "error");
        return;
    }

    setitemswithcost([...items_with_cost, { "item": Additem, "Cost": Cost }]);
    funtion_for_budget(totalbudget - Cost);
    funtion_for_amount_spent(Cost + totalofitems);
    funtion_for_amount_remaining(totalbudget - Cost);
    showToast("Expense added successfully ", "success");

    setAdditem("");
    setCost("");
    };

    let data_to_del = (index) => {
    setitemswithcost(items_with_cost.filter((_, i) => i !== index));
    funtion_for_budget(totalbudget + Cost);
    funtion_for_amount_spent(totalofitems - Cost);
    funtion_for_amount_remaining(totalbudget + Cost);
    setdeletedata(null);
    showToast("Expense deleted ", "error");
    };

    return (
        <>
            {/* Add Expenses */}
            <div>
                <div>
                    <h1>Add Expense</h1>
                    <h2>Total Budget : {totalbudget}</h2>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder='Enter Item'
                        onChange={(e) => setAdditem(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder='Enter Cost'
                        onChange={(e) => setCost(Number(e.target.value))}
                    />
                </div>

                <div>
                    <button onClick={add_item}>Add</button>
                </div>
            </div>

            {/* Display Expenses */}
            <h1>Expenses</h1>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Cost</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items_with_cost.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.item}</td>
                                <td>{value.Cost}</td>
                                <td>
                                    <button onClick={()=>{
                                        setedit_data(index)
                                    }}>Edit</button>

                                    {
                                        edit === index ? (
                                            <>
                                            {/* I am replacing the whole array element at that index insted of maintaing the prev state 
                                                ...prev → to keep the whole old array
                                                ...obj → to keep the old object fields
                                                
                                                if the condition is false there is no need to change it
                                            */}
                                            <input type="text" defaultValue={value.item} onChange={(e)=>{
                                               setitemswithcost(prev => prev.map((obj,i)=>i===index ? {
                                                ...obj , item : e.target.value
                                               }:obj))
                                            }}/>
                                            <button onClick={(e)=>{
                                                setedit_data(null)
                                            }}>Submit</button>
                                            </>
                                        ) : ("")
                                    }
                                </td>
                                <td>
                                    <button onClick={(e)=>{
                                        setdeletedata(index)
                                    }}>Delete</button>

                                    {
                                        delete_data === index ? (
                                            <>
                                            <input type="text" value={value.Cost} readOnly/>
                                            <button onClick={(e)=>{
                                                data_to_del(index)
                                            }}>Yes</button>
                                            <button onClick={(e)=>{
                                                setdeletedata(null);
                                            }}>No</button>
                                            </>
                                        ) : ("")
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2"><strong>Total</strong></td>
                        <td colSpan="3"><strong>{totalofitems}</strong></td>
                    </tr>
                </tfoot>
            </table>

            {toast && (
            <div className={`toast ${toast.type}`}>
                {toast.message}
            </div>
            )}
        </>
    )
}

export default Add_expenses
