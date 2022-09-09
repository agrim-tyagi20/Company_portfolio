import React from 'react'
import "../components/CSS/style.css"
import tl from "../components/img/tl.jfif";
import Navbar from "./Navbar"
import Middle from "./Middle"
import About from "./About"
import Services from "./Services"

const Layout = () => {
    return (
        <>
            <div className="hero">
                <Navbar/>
             
               <Middle/>
            </div>

           <About tl={tl}/>

            <Services/>

        </>
    )
}

export default Layout
