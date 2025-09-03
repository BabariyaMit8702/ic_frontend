import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/home.css'
import { useState } from 'react';
import { Navbar } from './navbar';

export const Home = () => {
  const dispatch = useDispatch();
  const auth_info = useSelector((state) => state.the_emp.is_user);
  const navigate = useNavigate();
  const [dd, setdd] = useState(false);

  useEffect(() => {
    !auth_info && navigate('/');
  }, [auth_info])

  const dt = () => {
    setdd(!dd);
  }

  return (
    <>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col sm:flex-row">


      <Navbar dd={dd} dt={dt}/>


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
