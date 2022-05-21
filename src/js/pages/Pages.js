import React from 'react'
import Home from './home'
import Cuisine from './Cuisine'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function Pages() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cuisine' element={<Cuisine/>}/>
          </Routes> 
        </BrowserRouter>
    </div>
  )
}

export default Pages