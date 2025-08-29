import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { First } from './myComponents/first'
import { About } from './myComponents/about'

function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App