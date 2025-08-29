import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import { First } from './myComponents/first_of_all'
import { Auth } from './myComponents/auth'
import { Home } from './myComponents/home'


function App () {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App