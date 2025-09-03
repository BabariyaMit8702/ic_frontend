import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/first_of_all.css'
import { useSelector, useDispatch } from 'react-redux'
import { user_t } from '../store/first_dark_slice';
import { useState } from 'react'

export const First = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [finding, setfinding] = useState(false);

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async function redirect_first() {
    try {
      setfinding(true);
      await wait(3000);
      let response = await fetch('http://127.0.0.1:8000/main/api/user-api/', {
        method: 'GET',
        credentials: 'include'
      })

      if(response.status === 400){
            setfinding(false);
            navigate('/auth');
            return;
      }

      if (response.status === 401) {
        try {
          let refresh = await fetch('http://127.0.0.1:8000/main/refresh/', {
            method: 'POST',
            credentials: 'include'
          })
          if (refresh.status === 401 || refresh.status === 400) {
            setfinding(false);
            navigate('/auth');
            return;
          }
          if (!refresh.ok) {
            navigate('/auth');
            return;
          }
          return redirect_first();


        } catch (e) {
          console.log(e);
          navigate('/auth');
          return;
        }
      }
      if (!response.ok) {
        navigate('/auth');
        return;
      }
      dispatch(user_t());
      setfinding(false);
      navigate('/home');
      return;
    } catch (e) {
      console.log(e);
    } finally {
      setfinding(false);
    }

  }

  useEffect(() => {
    redirect_first();
  }, [])

  return (
    <>
      {finding &&
        <div className='h-screen bg-black' id='perent_firstofall'>
          <div className='the_wrap'>
            <div className='mycustom_fisrtofall'>
            </div>
            <div className="bounce-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>}
    </>
  )
}
