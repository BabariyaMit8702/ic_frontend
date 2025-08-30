import React from 'react'
import { Link } from 'react-router-dom';
import { Warn } from './warning';
import { useState } from 'react';

export const Auth = () => {
  const [empty, setempty] = useState(false);
  const [info, setinfo] = useState("");
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");

  const login = (e) => {
    e.preventDefault();
    name === ""  && pass === ""?
    (setinfo('You were forgot to fill login Form !'),
    setempty(true)):
    name === ""?
    (
      setinfo('Your Username is missing !'),
      setempty(true)
    ):
    pass === ""?
  (
    setinfo('Your password is empty!'),
    setempty(true)
  ):null;


  }
  return (
    <>
    <div className="body-bg min-h-screen flex items-center justify-center p-4 relative">
      
      <div className=" absolute inset-0 z-0"></div>

      {empty && <Warn close={setempty}>
        {info}
        </Warn>}

      <div className={`${empty? 'opacity-50 pointer-events-none' : 'opacity-100'} glass-card max-w-md w-full p-8 rounded-2xl shadow-xl relative z-10`}>
        <h1 className="text-3xl sm:text-4xl font-bold italic text-pink-900 text-center mb-6" style={{fontFamily:"'Casyowrite',sans-seif"}}>log in</h1>

        <form  className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="p-3 rounded-lg bg-black text-white placeholder-white focus:placeholder-pink-400 outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            className="p-3 rounded-lg bg-black text-white placeholder-white focus:placeholder-pink-400 outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 transition"
          />
          <button
            type="submit" onClick={login}
            className="bg-pink-400 hover:bg-blue-500 hover:cursor-pointer text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-black/80 text-center mt-6 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to={'/register'} className="text-black font-semibold cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}
