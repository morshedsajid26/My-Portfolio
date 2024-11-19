import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Resume from '../Pages/Resume'
import Contact from '../Pages/Contact'
import Portfolio from '../Pages/Portfolio'
import Client from '../Pages/Client'


const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        {/* <Outlet/> */}
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Client/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default RootLayout