import React from 'react'
import '../App.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const First = () => {
  const navigate = useNavigate();

  const redirect_first = () => {
    localStorage.getItem('access')?
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
