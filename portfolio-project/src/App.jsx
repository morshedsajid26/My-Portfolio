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
import CustomCursor from './Component/CustomCursor'

const App = () => {
  return (
    <div className='relative overflow-hidden   scrollbar-thin scrollbar-thumb-[#20c997] scrollbar-track-[#20c997]'>
      <CustomCursor />
      <Navbar/>
      <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        {/* <Client/> */}
        <Contact/>
        <Footer/>
        <div className='fixed bottom-5 right-5 h-12 w-12  animate-bounce z-30  '>
        <a href="https://wa.me/+8801756899699" target="_blank">
  <img  src={whatsapp} alt="WhatsApp" />
</a>

   
        </div>
    </div>
  )
}

export default App