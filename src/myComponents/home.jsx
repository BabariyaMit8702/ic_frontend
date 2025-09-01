import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/home.css'


export const Home = () => {
  const dispatch = useDispatch();
  const auth_info = useSelector((state) => state.the_emp.is_user);
  const navigate = useNavigate();

  useEffect(() => {
    !auth_info && navigate('/');
  }, [auth_info])
  

  return (
    <>
       
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">

      {/* ---------- Navbar ---------- */}
      <nav className="fixed top-0 left-0 right-0 md:static bg-gray-900 border-b border-gray-700 flex md:flex-col items-center justify-between md:justify-start p-2 md:w-[80px] lg:w-[250px] z-50">
        {/* Desktop Name + Icon */}
        <div className="hidden lg:flex items-center transform scale-150 m-7 space-x-2 p-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="#@"
            className="h-8 invert"
          />
        </div>

        {/* Icons */}
        <div className="flex justify-around md:flex-col md:space-y-4 w-full lg:w-auto mt-2 md:mt-10">
          {/* Home Icon */}
          <svg className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
          </svg>
          {/* Search Icon */}
          <svg className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
          </svg>
          {/* Reels Icon */}
          <svg className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3z"/>
          </svg>
        </div>
      </nav>

      {/* ---------- Home Feed ---------- */}
      <main className="flex-1 flex flex-col items-center justify-start pt-16 md:pt-2 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div className="w-full max-w-3xl space-y-4">
          {/* Feed Items */}
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg shadow-md h-64 flex items-center justify-center">
              <span className="text-gray-300 text-xl">Post {item}</span>
            </div>
          ))}
        </div>
      </main>

      {/* ---------- Mobile Bottom Navbar ---------- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 flex justify-around p-2 md:hidden z-50">
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
        </svg>
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
        </svg>
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3z"/>
        </svg>
      </nav>
    </div>
    </>
  )
}
