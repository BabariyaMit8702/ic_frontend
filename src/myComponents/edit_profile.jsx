import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert_profile } from './alert_for_edit_profile';

export const Edit_profile = () => {
const [bio, setBio] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [website, setWebsite] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
        if (file) {
        setPreview(URL.createObjectURL(file));
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function updates() {
        try{
            let formdata = new FormData();
            bio !== '' && formdata.append('bio',bio);
            hobbies !== '' && formdata.append('hobbie',hobbies);
            website !== '' && formdata.append('website',website);
            profilePic !== null && formdata.append('profile_pic',profilePic);

            let response = await fetch('http://127.0.0.1:8000/main/api/my-profile/1/',{
                method:'PATCH',
                credentials:'include',
                body:formdata             
            })
            if(!response.ok){
                throw new Error('the new one!');
            }
            setShowAlert(true); 
        }catch(e){
            console.log(e);            
        }        
    }
    updates();
  };

  return (
   <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 p-4 relative overflow-hidden">
      {/* Glassmorphism circles background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[10%] w-72 h-72 bg-pink-200 opacity-40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute right-[15%] bottom-[5%] w-64 h-64 bg-blue-200 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute right-[30%] top-[20%] w-40 h-40 bg-purple-200 opacity-30 rounded-full blur-2xl"></div>
      </div>

      {showAlert && (
        <Alert_profile type="success" onClose={() => setShowAlert(false)}>
          Profile updated successfully!
        </Alert_profile>
      )}

      {/* GoBack Button */}
      <button
        onClick={() => navigate('/profile')}
        className="absolute left-4 top-4 flex items-center gap-2 bg-white/60 border border-gray-200 rounded-full px-4 py-2 shadow-lg backdrop-blur-md hover:bg-white/80 transition-all md:left-8 md:top-8 z-10"
      >
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

      {/* Modern Card Form */}
      <form
        className="relative z-10 bg-white/80 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col gap-8 border border-gray-100"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-1 tracking-tight drop-shadow-lg">
          Edit Profile
        </h2>

        {/* Profile Pic Upload */}
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="profile-upload"
            className="cursor-pointer w-28 h-28 flex items-center justify-center border-4 border-dashed border-purple-300 rounded-full bg-white/70 hover:bg-purple-100 transition-all shadow-lg"
            style={{ position: "relative" }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-full border-2 border-purple-300"
              />
            ) : (
              <span className="flex flex-col items-center gap-1 text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-xs">Upload<br />Profile Pic</span>
              </span>
            )}
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </label>
          <span className="text-xs text-gray-500">JPG, PNG, GIF</span>
        </div>

        {/* Bio */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            className="w-full border text-gray-700 border-purple-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none bg-white/60 shadow-sm placeholder:text-gray-400"
            rows={3}
            placeholder="Tell us about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={200}
          />
          <span className="absolute bottom-2 right-4 text-xs text-gray-400">{bio.length}/200</span>
        </div>

        {/* Hobbies */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Hobbies
          </label>
          <div className="flex items-center bg-white/60 rounded-xl border border-purple-200 shadow-sm focus-within:ring-2 focus-within:ring-purple-300">
            <span className="px-3 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9.75 17L14.25 17C15.2165 17 16 16.2165 16 15.25L16 8.75C16 7.7835 15.2165 7 14.25 7L9.75 7C8.7835 7 8 7.7835 8 8.75L8 15.25C8 16.2165 8.7835 17 9.75 17Z" />
              </svg>
            </span>
            <input
              type="text"
              className="w-full text-gray-700 border-none ring-0 px-2 py-2 bg-transparent focus:outline-none"
              placeholder="eg. Football, Reading"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              maxLength={100}
            />
          </div>
        </div>

        {/* Website */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Website
          </label>
          <div className="flex items-center bg-white/60 rounded-xl border border-purple-200 shadow-sm focus-within:ring-2 focus-within:ring-purple-300">
            <span className="px-3 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 4V20M4 12H20" />
              </svg>
            </span>
            <input
              type="url"
              className="w-full text-gray-700 border-none ring-0 px-2 py-2 bg-transparent focus:outline-none"
              placeholder="Your website link"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              maxLength={100}
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-2 rounded-xl shadow-lg hover:scale-[1.04] hover:opacity-95 transition-all duration-200"
        >
          Update Your Profile
        </button>
      </form>
    </div>
   </>
  )
}
