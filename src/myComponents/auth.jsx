import React from 'react'

export const Auth = () => {
  return (
    <>
    <div className="body-bg min-h-screen flex items-center justify-center p-4 relative">
      
      <div className=" absolute inset-0 z-0"></div>

      <div className="glass-card max-w-md w-full p-8 rounded-2xl shadow-xl relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold italic text-pink-900 text-center mb-6" style={{fontFamily:"'Casyowrite',sans-seif"}}>MyApp</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg bg-black text-white placeholder-white focus:placeholder-pink-400 outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-black text-white placeholder-white focus:placeholder-pink-400 outline-none focus:ring-2 focus:ring-pink-400 focus:text-pink-400 transition"
          />
          <button
            type="submit"
            className="bg-pink-400 hover:bg-blue-500 hover:cursor-pointer text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-black/80 text-center mt-6 text-sm sm:text-base">
          Don't have an account?{" "}
          <span className="text-black font-semibold hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
    </>
  )
}
