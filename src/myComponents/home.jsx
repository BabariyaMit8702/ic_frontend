import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/home.css'
import { useState } from 'react';
import { Navbar } from './navbar';
import { user_t } from '../store/first_dark_slice';
import { PostCard } from './postcard';

export const Home = () => {
  const dispatch = useDispatch();
  const auth_info = useSelector((state) => state.the_emp.is_user);
  const navigate = useNavigate();
  const [dd, setdd] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    !auth_info && navigate('/');
    async function home_feed() {
      try{
        let response = await fetch('http://127.0.0.1:8000/main/home-page-feed/',{
          method:'GET',
          credentials:'include'
        })
        if(!response.ok){
          throw new Error('the new one!')
        }
        let data = await response.json()  
        console.log(data);
            setPosts(data);

      }catch(e){
        console.log(e);
        
      }
    }
    home_feed();
  }, [auth_info])

  const dt = () => {
    setdd(!dd);
  }

  
const handleLike = async (post_id) => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/main/api/like-management/${post_id}/toggle/`, {
        method: 'POST',
        credentials: 'include'
      })
      if (!response.ok) {
        throw new Error('the new one!');
      }
      let data = await response.json();
      console.log(data);
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.post_id === post_id
            ? {
              ...post,
              like_count: post.like_count + (data.message === "Liked" ? 1 : -1),
              is_liked_by_user: data.message === "Liked"
            }
            : post
        )
      );
      // setSelectedPost(prev =>
      //   prev && prev.post_id === post_id
      //     ? {
      //       ...prev,
      //       like_count: prev.like_count + (data.message === "Liked" ? 1 : -1),
      //       is_liked_by_user: data.message === "Liked"
      //     }
      //     : prev
      // );

    } catch (e) {
      console.log(e);
    }
  };

  
const handleComment = () => {
    // Placeholder for comment logic
    alert('Comment functionality spot!');
  };

  const onlogout = () => {
    async function logout() {
      try{
        let response = await fetch('http://127.0.0.1:8000/main/log-out/',{
          method:'POST',
          credentials:'include'
        })
        if(!response.ok){
          throw new Error('the new one!');
        }
        dispatch(user_t());
        navigate('/')

      }catch(e){
        console.log(e);
      }
    }
    logout();
  }

  return (
    <>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col sm:flex-row">


      <Navbar dd={dd} dt={dt} onlogout={onlogout} />


        {/* ---------- Home Feed ---------- */}
        <main className="flex-1 flex flex-col items-center justify-start p-4 md:p-6 lg:p-8 overflow-y-auto">
          {/* <div className="w-full customquery max-w-3xl space-y-4">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg shadow-md h-64 flex items-center justify-center">
                <span className="text-gray-300 text-xl">Post {item}</span>
              </div>
            ))}
          </div> */}
          <div className="w-full customquery max-w-2xl space-y-6">
    {posts.map((post) => (
      <PostCard
        key={post.post_id}
        post={post}
        onLike={handleLike}
        onComment={handleComment}
      />
    ))}
  </div>
        </main>
      </div>


    </>
  )
}
