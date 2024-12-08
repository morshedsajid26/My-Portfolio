import React from 'react'
import Navbar from './Component/Navbar'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import Resume from './Component/Pages/Resume'
import Portfolio from './Component/Pages/Portfolio'
import Client from './Component/Pages/Client'
import Contact from './Component/Pages/Contact'
import Footer from './Component/Footer'

import whatsapp from '/whatsapp.png'

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Client/>
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