import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import { First } from './myComponents/first_of_all'
import { Auth } from './myComponents/auth'
import { Home } from './myComponents/home'
import { Register } from './myComponents/register'
import { Profile } from './myComponents/profile'


function App () {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App