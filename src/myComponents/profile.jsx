import React from 'react';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';

const highlights = [
  { img: "https://randomuser.me/api/portraits/women/65.jpg", label: "Travel" },
  { img: "https://randomuser.me/api/portraits/men/45.jpg", label: "Food" },
  { img: "https://randomuser.me/api/portraits/women/32.jpg", label: "Family" },
  { img: "https://randomuser.me/api/portraits/men/88.jpg", label: "Pets" },
  { img: "https://randomuser.me/api/portraits/women/65.jpg", label: "Travel" },
  { img: "https://randomuser.me/api/portraits/men/45.jpg", label: "Food" },
  { img: "https://randomuser.me/api/portraits/women/32.jpg", label: "Family" },
  { img: "https://randomuser.me/api/portraits/men/88.jpg", label: "Pets" },
];


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
  return (
   <>
       <div className="container">
      {/* Profile header */}
      <header className="profile-header">
        <div className="profile-pic">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-username">
            <h2>Profile</h2>
            <button>Edit Profile</button>
            <button onClick={() => navigate(-1)} className="home-btn">Home</button>
          </div>
          <div className="profile-stats">
            <span><strong>54</strong> posts</span>
            <span><strong>2.1k</strong> followers</span>
            <span><strong>320</strong> following</span>
          </div>
          <div className="profile-bio">
            <p>
              <strong>Full Name</strong><br />
              Web Developer 🚀<br />
              Love to code and travel 🌍<br />
              <a href="#">www.mywebsite.com</a>
            </p>
          </div>
        </div>
      </header>

      {/* Highlights */}
      

      {/* Posts Grid */}
      <section>
        <h3 className="section-heading">Posts</h3>
        <div className="posts-grid">
          {posts.map((url, idx) => (
            <div className="post" key={idx}>
              <img src={url + "?w=300"} alt={`Post ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
   </>
  );
};
