import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function Main_Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </>
    )
}

export default Main_Layout
