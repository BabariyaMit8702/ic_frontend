import React from 'react'
import '../App.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { user_t } from '../store/first_dark_slice';

export const First = () => {
  const navigate = useNavigate();
  const access = useSelector((state) => state.the_emp.access);
  const dispatch = useDispatch();
  const redirect_first = () => {
    access === null ?
    navigate('/auth'):
    (dispatch(user_t()),navigate('/home'));
  }

  useEffect(() => {
    redirect_first();
  }, [access])
  
  return (
   <>
   hello world
   </>
  )
}
