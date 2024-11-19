import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Component/Layer/RootLayout';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Services from './Component/Pages/Services';
import Contact from './Component/Pages/Contact';
import Client from './Component/Pages/Client';
import Portfolio from './Component/Pages/Portfolio';
import Resume from './Component/Pages/Resume';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/client' element={<Client/>} />
      <Route path='/contact' element={<Contact/>} />

    
        
        
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App