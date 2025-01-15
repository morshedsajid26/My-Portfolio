import React from 'react'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Services from './Component/Services'
import Resume from './Component/Resume'
import Portfolio from './Component/Portfolio'
import Client from './Component/Client'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

import whatsapp from '/whatsapp.png'
import Home from './Component/Home'

const App = () => {
  return (
    <div className='relative overflow-hidden'>
      <Navbar/>
      <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        {/* <Client/> */}
        <Contact/>
        <Footer/>
        <div className='fixed bottom-5 right-5 h-12 w-12  animate-bounce   '>
        <a href="https://wa.me/+8801756899699" target="_blank">
  <img  src={whatsapp} alt="WhatsApp" />
</a>

   
        </div>
    </div>
  )
}

export default App