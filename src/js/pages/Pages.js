import React from 'react'
import Home from './home'
import Cuisine from './Cuisine'
import { Route,Routes} from 'react-router-dom'
import Searched from "./Searched.js"

function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
      </Routes> 
  )
}

export default Pages