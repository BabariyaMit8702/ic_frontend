import React, { useEffect } from 'react';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';

const posts = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
];

export const Profile = () => {
  const navigate = useNavigate();
  const now_name = useSelector((state) => state.the_emp.username);
  const [bio, setbio] = useState('loading...');
  const [hobbie, sethobbie] = useState('loading...');
  const [website, setwebsite] = useState('loading...');
  const [pic, setpic] = useState('lg.png');
  const [myallposts, setmyallposts] = useState([])
  const [post_total, setpost_total] = useState(0)
  const [increments, setincrements] = useState(0);
  
  
  useEffect(() => {
    async function bio_data() {
      try{
        let response = await fetch('http://127.0.0.1:8000/main/api/my-profile/1/',{
          method:'GET',
          credentials: 'include'
        })
        if(!response.ok){
         navigate('/');
         return;
        }
        let data = await response.json();
        setbio(data.bio);
        sethobbie(data.hobbie);
        setwebsite(data.website);
        setpic(data.profile_pic_url);
        
      }catch(e){
        console.log(e);
      }
    }

    async function get_all_my_post() {
      try{
        let response = await fetch('http://127.0.0.1:8000/main/api/posts/',{
          method:'GET',
          credentials:'include',
        })
        if(!response.ok){
          throw new Error('the new one!');
        }
        let data = await response.json(); 
        if(data.length === 0){
          return;  
        }
        let mydata = data.filter(dt => dt.user === now_name)   
        
        setmyallposts(mydata);        
        setpost_total(mydata.length); 
        setincrements(1);      
         
        
      }catch(e){
        console.log(e);        
      }
    }

    async function all_func() {
      await bio_data();
      await get_all_my_post();
      console.log(myallposts);
    }
    all_func();
   

  }, [increments])
  
  
  return (
   <>
       <div className="container">
      {/* Profile header */}
      <header className="profile-header">
        <div className="profile-pic">
          <img src={`${pic}`} alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-username">
            <h2>Profile</h2>
            <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
            <button onClick={() => navigate('/home')} className="home-btn">Home</button>
          </div>
          <div className="profile-stats">
            <span><strong>54</strong> posts</span>
            <span><strong>2.1k</strong> followers</span>
            <span><strong>320</strong> following</span>
          </div>
          <div className="profile-bio">
            <p>
              <strong>{now_name}</strong><br />
              {bio}<br />
             {hobbie}<br />
              <a>{website}</a>
            </p>
          </div>
        </div>
      </header>     

      {/* Posts Grid */}
      <section>
        <h3 className="section-heading">Posts</h3>
        <div className="posts-grid">
          {increments === 0 ? 'No Post Yet!' :
          <>
           { myallposts.map((post) => (
            <div className="post" key={post.post_id}>
                <img src={post.post_url} alt='finding'>
                </img>
            </div>
          ))}
          </>
          }
        </div>
      </section>
    </div>
   </>
  );
};
