import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Search_page = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [allacc, setallacc] = useState([])

    useEffect(() => {
      async function fetchusers(para) {
        try{
          let response = await fetch(`http://127.0.0.1:8000/main/api/ohters-profile/?search=${para}`,
            {
              method:'GET',
              credentials:'include'
            }
          )
          if(!response.ok){
            throw new Error('the new one!');
          }
          let data = await response.json();
          console.log(data);
          if(data.length !== 0){
              setallacc(data);
          }else{
            setallacc([])
          }
                    
        }catch(e){
          console.log(e);
        }
      }
      if(search !== ""){
        fetchusers(search);        
      }
      
    }, [search])
    
  return (
    <>

         <div className="min-h-screen flex flex-col items-center justify-start bg-black p-4">
            
            {/* go back to home  */}
      <button
                    onClick={() => navigate('/home')}
                    className="flex items-center gap-2 bg-white/80 border border-gray-300 rounded-full px-4 py-2 shadow-md backdrop-blur-sm hover:bg-blue-400 transition-all
        md:left-8 md:top-8"
                    style={{ zIndex: 10 }}
                >
                    {/* Arrow Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium text-gray-700">Go Back</span>
                </button>
      {/* Search Input Field */}
      <div className="w-full max-w-md mt-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search account..."
          className="w-full px-4 py-2 border bg-white text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          style={{
            fontFamily: "inherit",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Space for Account List */}
      {search !== "" && 
      <>
            <span
        className="mt-8 p-7 w-full max-w-md bg-white rounded-lg border-gray-300 flex flex-col"
        
      >
       {allacc.length === 0 ?
       (
        <span className="text-black text-lg">
          Account is not found!
        </span>
       ):
        <span className="text-black text-lg">
          {allacc.map((acc) => 
          <>
            <div className='mb-3 p-1.5 border-blue-400 border-3 rounded-2xl'>
              <img className='inline-block' src={acc.profile_pic_url} width={'33px'}/>
              <span onClick={() => navigate(`/other-profiles/${acc.profile_int_id}`)}>{acc.user_name}</span>
            </div>
             
          </>
          )}
        </span>
       }
      </span>
      </>}
      
    </div>
    </>
  )
}
