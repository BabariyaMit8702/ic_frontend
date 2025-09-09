import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SUGGESTIONS = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   async function unfollowed() {
     try{
        let response = await fetch('http://127.0.0.1:8000/main/unfollowed/',{
            method:'GET',
            credentials:'include'
        })
        if(!response.ok){
            throw new Error('the new one!');
        }
        let data = await response.json();
        setUsers(data);
    }catch(e){
        console.log(e);
    }
   }
   unfollowed();
    
  }, []);
  return (
   <>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">People you may know</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.profile_id}
            onClick={() => navigate(`/other-profiles/${user.profile_id}`)}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4"
          >
            <img
              src={user.profile_pic}
              alt={user.username}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <span className="font-medium text-black">{user.username}</span>
          </div>
        ))}
      </div>
    </div>

   </>
  )
}
