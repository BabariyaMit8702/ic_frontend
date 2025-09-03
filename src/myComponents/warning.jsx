import React from 'react'
import '../styles/warning.css'

export const Warn = ({close,children}) => {
  const closeup = () => {
    close(false);
  }
  return (
    <>
        <div id="custom-model"> 
    <div id="inner-wrapper">
      <p id="warn">
        {children}
      </p>
      <button onClick={closeup} id="model-ok" className='ml-3'>
        OK
      </button>
    </div>
  </div>
    </>
  )
}
