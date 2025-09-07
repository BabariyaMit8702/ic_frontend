import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Search_page = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
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
            <div
        className="w-full max-w-md mt-8 bg-white rounded-lg shadow border border-dashed border-gray-300 flex flex-col items-center justify-center"
        style={{
          minHeight: "240px",
        }}
      >
        
        {/* (This space will be used to show account list after search) */}
        {/* You can render account cards here after implementing search logic */}
        <span className="text-gray-400 text-lg">
          Account list will appear here after searching.
        </span>
      </div>
      </>}
      
    </div>
    </>
  )
}
