import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Warn } from './warning';

export const Register = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass1, setpass1] = useState("");
    const [pass2, setpass2] = useState("");
    const [warning, setwarning] = useState(false);
    const [info, setinfo] = useState("")

    const signup = (e) => {
        e.preventDefault();
        pass1 === "" && pass2 === "" && name ===""?
        (setinfo('You were forgot to Fill Sign Up Form!'),setwarning(true))
        :
        pass1 === "" || pass2 === ""
  ? (setinfo("You were forget to Enter Password!"), setwarning(true))
  : pass1 !== pass2
    ? (setinfo("Passwords do not match!"), setwarning(true))
    : name === ""
      ? (setinfo("Name is missing!"), setwarning(true))
      : null;

    }

  return (
   <>
  <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute h-full inset-0 bg-cover bg-center custom-image ">

        </div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 "></div>
        {/* warning */}
         {warning && <Warn close={setwarning}> 
            {info}
            </Warn>
            }

      {/* Form Container */}
      <div className={`${warning? 'opacity-50 pointer-events-none' : 'opacity-100'} mx-5 relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row md:mx-7 sm:mx-5 `}>
        
        {/* Left Side - Info */}
        <div className="hidden sm:flex sm:w-1/3 md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Join Us!</h2>
          <p className="mb-6">Sign up to get started and access all features.</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full sm:w-3/4 md:w-1/2 p-7 sm:p-12 custom-design">
          <h2 className="text-3xl font-bold text-center mb-8 italic" style={{fontFamily:"'Casyowrite',sans-seif"}}>Sign Up</h2>
          
          <form className="space-y-6">
            <input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
            required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input required
              type="password"
              placeholder="Password"
              value={pass1}
              onChange={(e) => setpass1(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input required
              type="password"
              value={pass2}
              onChange={(e) => setpass2(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit" onClick={signup}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-pink-700 hover:cursor-pointer transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-gray-800 custom-design">
            Already have an account?{" "}
            <Link to={'/auth'} className="text-indigo-600 font-semibold hover:cursor-pointer">
              Login
            </Link>
          </p>
        </div>
        </div>
    </div>
   </>
  )
}
