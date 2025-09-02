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

      <div className="min-h-screen bg-gray-900 text-white flex flex-col sm:flex-row">

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
          <div className="hidden lg:flex lg:text-white items-center transform scale-150 ml-10 mt-3 space-x-2 p-2">
            <h3 className='logo_nav'>MyCircle</h3>
          </div>

          {/* Icons */}

          <div className="flex lg:relative lg:bottom-16 justify-around w-full lg:w-full lg:flex-col lg:space-y-3 mt-1 custom_scale">

            {/* Home Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:mt-3 lg:ml-7 lg:mb-2'
                src='https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png'
                width={'50px'} />
              <p className='hidden lg:inline-block pl-7 relative top-2 text-2xl'>Home</p>
            </div>

            {/* Search Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:mt-3 lg:ml-7 lg:mb-2'
                src='https://icons.veryicon.com/png/o/education-technology/education-app/search-137.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Search</p>
            </div>

               {/* Post Icon */}
            <div className='nav_ic'>

              <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-13 size-13 border-2 border-amber-50 rounded-2xl lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2" fill="white" viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Post</p>
            </div>

            

            {/* Reels Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2'
                src='https://cdn-icons-png.freepik.com/256/18728/18728454.png?semt=ais_white_label'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Reels</p>
            </div>
{/* Notification Icon */}
            <div className='nav_ic'>
              <img
                className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/3602/3602145.png'
                width={'50px'}
                alt="Notification"
              />
              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Notifications</p>
            </div>

            {/* Messages Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/646/646135.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Messages</p>
            </div>

            {/* Profile Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 scale-175 lg:relative lg:top-3 lg:mt-3 lg:mb-2'
                src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 relative top-5 text-2xl'>Profile</p>
            </div>

           {/* Settings Icon */}
            <div className='nav_ic'>
              <img className='lg:inline-block lg:ml-7 lg:mt-3 lg:mb-2 white_icon'
                src='https://cdn-icons-png.flaticon.com/512/3524/3524659.png'
                width={'50px'} />
              <p className='hidden lg:inline-block lg:ml-7 relative top-2 text-2xl'>Settings</p>
            </div>

          </div>

        </nav>


        {/* ---------- Home Feed ---------- */}
        <main className="flex-1 flex flex-col items-center justify-start pt-16 md:pt-2 p-4 md:p-6 lg:p-8 overflow-y-auto">
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
