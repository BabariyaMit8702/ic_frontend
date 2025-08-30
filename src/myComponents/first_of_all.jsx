import React from 'react'
import '../App.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const First = () => {
  const navigate = useNavigate();
  const access = useSelector((state) => state.the_emp.access);
  const redirect_first = () => {
    access?
    navigate('/home') :
    navigate('/auth');   
  }

  useEffect(() => {
    redirect_first()
  }, [])
  
  return (
   <>
   hello world
   </>
  )
}
