import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import { First } from './myComponents/first_of_all'
import { Auth } from './myComponents/auth'
import { Home } from './myComponents/home'
import { Register } from './myComponents/register'
import { Profile } from './myComponents/profile'
import { Cp } from './myComponents/create_post'
import { Edit_profile } from './myComponents/edit_profile'
import { Search_page } from './myComponents/searchpage'
import { ProfileNoEdit } from './myComponents/another_profile'
import { SUGGESTIONS } from './myComponents/suggestions'


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
      <Route path='/create-post' element={<Cp/>}/>
      <Route path='/edit-profile' element={<Edit_profile/>}/>
      <Route path='/search-profiles' element={<Search_page/>}/>
      <Route path='/other-profiles/:pr_id' element={<ProfileNoEdit/>}/>
      <Route path='/suggestions' element={<SUGGESTIONS/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App