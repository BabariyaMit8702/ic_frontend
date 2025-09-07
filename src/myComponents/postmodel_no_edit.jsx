import React from 'react';
import '../styles/postmodel.css'
import { useSelector } from 'react-redux';

export const PostModelNoDelete = ({ post, onClose, onLike, onComment }) => {
  if (!post) return null;
  const my_ppic = useSelector((state) => state.the_emp.profile_pic);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-user-row">
          <img
            src={my_ppic}
            alt={'finding'}
            className="modal-user-pic"
          />
          <span className="modal-user">{post.user}</span>
        </div>
        <img src={post.post_url} alt={post.title} className="modal-img" />
        <div className="modal-title">{post.title}</div>
        <div className="modal-location">{post.location}</div>
        <div className="modal-actions">
          <button className="like-btn" onClick={onLike}>❤️ Like</button>
          <button className="comment-btn" onClick={onComment}>💬 Comment</button>
        </div>
        {/* Delete button hata diya */}
      </div>
    </div>
  );
};