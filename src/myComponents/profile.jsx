import React, { useEffect } from 'react';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { PostDetailsModal } from './postmodel';
import { storeppic } from '../store/first_dark_slice';
import { FF } from './follower_following';


export const Profile = () => {
  const navigate = useNavigate();
  const [now_name, setnow_name] = useState(null);
  const [bio, setbio] = useState('loading...');
  const [hobbie, sethobbie] = useState('loading...');
  const [website, setwebsite] = useState('loading...');
  const [pic, setpic] = useState('lg.png');
  const [myallposts, setmyallposts] = useState([])
  const [post_total, setpost_total] = useState(0)
  const [increments, setincrements] = useState(0);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [follower_count, setfollower_count] = useState(0)
  const [following_count, setfollowing_count] = useState(0)
  const [followers, setfollowers] = useState([]);
  const [following, setfollowing] = useState([]);
  const [showFollowModal, setShowFollowModal] = useState(false);
  const [followModalType, setFollowModalType] = useState('followers');
  const [followModalList, setFollowModalList] = useState([]);


  useEffect(() => {
    async function bio_data() {
      try {
        let response = await fetch('http://127.0.0.1:8000/main/api/my-profile/1/', {
          method: 'GET',
          credentials: 'include'
        })
        if (!response.ok) {
          navigate('/');
          return;
        }
        let data = await response.json();
        console.log(data);
        setfollower_count(data.followers_count);
        setfollowing_count(data.following_count);
        setbio(data.bio);
        setfollowers(data.followers);
        setfollowing(data.following);
        setnow_name(data.user_name);
        sethobbie(data.hobbie);
        setwebsite(data.website);
        setpic(data.profile_pic_url);
        dispatch(storeppic(data.profile_pic_url));

      } catch (e) {
        console.log(e);
      }
    }

    async function get_all_my_post() {
      try {
        let response = await fetch('http://127.0.0.1:8000/main/api/posts/', {
          method: 'GET',
          credentials: 'include',
        })
        if (!response.ok) {
          throw new Error('the new one!');
        }
        let data = await response.json();
        if (data.length === 0) {
          return;
        }
        let mydata = data.filter(dt => dt.user === now_name)

        setmyallposts(mydata);
        setpost_total(mydata.length);
        setincrements(1);


      } catch (e) {
        console.log(e);
      }
    }

    async function all_func() {
      await bio_data();
      await get_all_my_post();
      console.log(myallposts);
    }
    all_func();


  }, [increments, navigate])


  // Handle Post Click
  const handlePostClick = async (postId) => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/main/api/posts/${postId}/`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) return;
      let data = await response.json();
      setSelectedPost(data);
      setModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

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
      setmyallposts(prevPosts =>
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

      // 🔹 Agar modal open hai toh uska bhi count update karo
      setSelectedPost(prev =>
        prev && prev.post_id === post_id
          ? {
            ...prev,
            like_count: prev.like_count + (data.message === "Liked" ? 1 : -1),
            is_liked_by_user: data.message === "Liked"
          }
          : prev
      );

    } catch (e) {
      console.log(e);
    }
  };

  const handleComment = () => {
    // Placeholder for comment logic
    alert('Comment functionality spot!');
  };

  const handleDelete = async (post_id) => {
     try {
    let response = await fetch(`http://127.0.0.1:8000/main/api/posts/${post_id}/`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (response.ok) {
      // 🔹 myallposts se delete karo
      setmyallposts(prevPosts => prevPosts.filter(post => post.post_id !== post_id));
      setpost_total(prev => prev - 1);

      // 🔹 modal close kar do
      handleCloseModal();
    } else {
      alert("Failed to delete post");
    }
  } catch (e) {
    console.log(e);
    alert("Error deleting post");
  }
};

  const openFollowersModal = () => {
    setFollowModalType('followers');
    setFollowModalList(followers);
    setShowFollowModal(true);
  };
  const openFollowingModal = () => {
    setFollowModalType('following');
    setFollowModalList(following);
    setShowFollowModal(true);
  };
  const closeFollowModal = () => setShowFollowModal(false);

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
              <span><strong>{post_total}</strong> posts</span>
              <span onClick={openFollowersModal}><strong>{follower_count}</strong> followers</span>
              <span onClick={openFollowingModal}><strong>{following_count}</strong> following</span>
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
                {myallposts.map((post) => (
                  <div className="post" key={post.post_id} style={{ cursor: 'pointer' }} onClick={() => handlePostClick(post.post_id)}>
                    <img src={post.post_url} alt='finding'>
                    </img>
                  </div>
                ))}
              </>
            }
          </div>
        </section>
      </div>
      {modalOpen &&
        <PostDetailsModal
          post={selectedPost}
          onClose={handleCloseModal}
          onLike={handleLike}
          onComment={handleComment}
          onDelete={handleDelete}
        />
      }
      {showFollowModal && (
        <FF
          type={followModalType}
          list={followModalList}
          onClose={closeFollowModal}
        />
      )}
    </>
  );
};
