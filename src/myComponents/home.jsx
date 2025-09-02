import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/home.css'
import { useState } from 'react';

export const Home = () => {
  const dispatch = useDispatch();
  const auth_info = useSelector((state) => state.the_emp.is_user);
  const navigate = useNavigate();
  const [dd, setdd] = useState(false);

  useEffect(() => {
    !auth_info && navigate('/');
  }, [auth_info])

  const dt = () => {
    dd = !dd;
  }

  return (
    <>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col sm:flex-row">

        {/* ---------- Navbar ---------- */}
        <nav className="
  fixed 
  bottom-0 left-0 right-0 
  lg:top-0 lg:left-0 lg:h-screen 
  bg-gray-950 border-t lg:border-t-0 lg:border-r border-gray-700 
  lg:flex
  lg:flex-col lg:items-start lg:justify-start 
  lg:p-2 lg:w-[250px] 
  z-50
">
          {/* Desktop Logo */}
          <div className="hidden lg:flex lg:text-white items-center transform scale-150 ml-10 mt-3 space-x-2 p-2">
            <h3 className='logo_nav'>MyCircle</h3>
          </div>



          {/* Icons */}

          <div className="lg:flex lg:relative lg:bottom-16 lg:justify-around lg:w-full lg:flex-col custom_sm lg:space-y-3 lg:mt-1 custom_scale">

            {/* Home Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:mt-3 lg:ml-7 lg:mb-2'
                src='https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:pl-7 lg:relative lg:top-2 lg:text-2xl'>Home</p>
            </div>

            {/* Search Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:mt-3 lg:ml-7 lg:mb-2'
                src='https://icons.veryicon.com/png/o/education-technology/education-app/search-137.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:lg:ml-7 lg:relative lg:top-2 lg:text-2xl'>Search</p>
            </div>

            {/* Post Icon */}
            <div className='for_dd'>

              <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-13 sm:size-8 size-7  border-2 border-amber-50 rounded-2xl lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2" fill="white" viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p className='hidden lg:inline-block lg:ml-7 lg:relative lg:top-2 lg:text-2xl'>Post</p>
            </div>



            {/* Reels Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2'
                src='https://cdn-icons-png.freepik.com/256/18728/18728454.png?semt=ais_white_label'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 lg:relative lg:top-2 lg:text-2xl'>Reels</p>
            </div>
            {/* Notification Icon */}
            <div className=' for_dd'>
              <img
                className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/3602/3602145.png'
                width={'50px'}
                alt="Notification"
              />
              <p className='hidden lg:inline-block lg:ml-5 lg:relative lg:top-2 lg:text-2xl'>Notifications</p>
            </div>

            {/* Messages Icon */}
            <div className='for_dd'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/646/646135.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 lg:relative lg:top-2 lg:text-2xl'>Messages</p>
            </div>

            {/* Profile Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 scale-175 lg:relative lg:top-3 lg:mt-3 lg:mb-2'
                src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 lg:relative lg:top-5 lg:text-2xl'>Profile</p>
            </div>

            {/* Settings Icon */}
            <div className='for_dd'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/3524/3524659.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 lg:relative lg:top-2 lg:text-2xl'>Settings</p>
            </div>

            {/* drop down  */}
      <div 
  id='mydd' 
  className={`lg:hidden flex flex-col ${dd ? 'flex' : 'hidden'}`}
>
  {/* Hidden icons */}
  <div className='nav_ic'> 
    <img src='https://cdn-icons-png.flaticon.com/512/3602/3602145.png' width={'50px'} />
    <p>Notifications</p>
  </div>
  <div className='nav_ic'>
    <img src='https://cdn-icons-png.flaticon.com/512/646/646135.png' width={'50px'} />
    <p>Messages</p>
  </div>
  <div className='nav_ic'>
    <img src='https://cdn-icons-png.flaticon.com/512/3524/3524659.png' width={'50px'} />
    <p>Settings</p>
  </div>
</div>

        
            <button className='hidden' id='mydrop' onClick={dt}>
              <svg className="size-10 text-gray-100 border-2 border-amber-50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6h18v2H3V6zM3 11h18v2H3v-2zM3 16h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </nav>


        {/* ---------- Home Feed ---------- */}
        <main className="flex-1 flex flex-col items-center justify-start p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="w-full customquery max-w-3xl space-y-4">
            {/* Feed Items */}
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg shadow-md h-64 flex items-center justify-center">
                <span className="text-gray-300 text-xl">Post {item}</span>
              </div>
            ))}
          </div>
        </main>
      </div>


    </>
  )
}
