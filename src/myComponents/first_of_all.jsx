import React from 'react'
import '../App.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { user_t } from '../store/first_dark_slice';

export const First = () => {
  const navigate = useNavigate();
  let access = null;
  let refresh = null; 
  const dispatch = useDispatch();
  async function get_refreshed() {
    
  }
  const redirect_first = () => {
    access === null && refresh === null ?
    navigate('/auth'):
    access !== null && refresh !== null?
    (dispatch(user_t()),navigate('/home')):
    access === null && refresh !== null?
    get_refreshed():
    null;
  }

  useEffect(() => {
    redirect_first();
  }, [])
  
  return (
   <>
   hello world
   </>
  )
}
