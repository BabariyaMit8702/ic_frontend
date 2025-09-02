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
     <nav className="
  fixed 
  bottom-0 left-0 right-0 
  lg:top-0 lg:left-0 lg:h-screen 
  bg-gray-950 border-t lg:border-t-0 lg:border-r border-gray-700 
  flex justify-around items-center 
  lg:flex-col lg:items-start lg:justify-start 
  p-2 lg:w-[250px] 
  z-50
">
  {/* Desktop Logo */}
  <div className="hidden lg:flex lg:text-white items-center transform scale-150 ml-10 mt-7 space-x-2 p-2">
  <h3 className='logo_nav'>MyCircle</h3>
  </div>

  {/* Icons */}
  <div className="flex justify-around w-full lg:w-auto lg:flex-col lg:space-y-6 mt-0 lg:mt-10">
    {/* Home Icon */}
    <svg className="h-7 w-7 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
    </svg>
    {/* Search Icon */}
    <svg className="h-7 w-7 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
    </svg>
    {/* Reels Icon */}
    <svg className="h-7 w-7 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
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
      {/* <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 flex justify-around p-2 md:hidden z-50">
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
        </svg>
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
        </svg>
        <svg className="h-6 w-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3z"/>
        </svg>
      </nav> */}
    </div>
    </>
  )
}
