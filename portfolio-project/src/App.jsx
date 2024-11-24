import React from 'react'
import Navbar from './Component/Navbar'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import Resume from './Component/Pages/Resume'
import Portfolio from './Component/Pages/Portfolio'
import Client from './Component/Pages/Client'
import Contact from './Component/Pages/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
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

export default App