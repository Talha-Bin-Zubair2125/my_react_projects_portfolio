import React from 'react'

function Box_Component(props) { 
 
    return (
        <>
            <div style={{border:"2px solid black",padding:"2rem",fontFamily:"sans-serif",fontSize:"large",backgroundColor:props.backgroundColor, color:props.color}} >
                <div style={{padding:"2rem"}}>
                <h1>Batman Most Famous Quote</h1>
                <p>it's not who i am underneath but what i do that defines me!</p>
                
                
                </div>
            </div>
        </>
    )
}

export default Box_Component
