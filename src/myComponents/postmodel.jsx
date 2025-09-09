import React, { useState } from 'react';
import '../styles/postmodel.css'
import { CommentModal } from './comment_box';


export const PostDetailsModal = ({ post, onClose, onLike, onDelete }) => {
  if (!post) return null;
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
const onComment = (postId) => {
      setActivePostId(postId);
  setCommentModalOpen(true);
  };
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          {/* <div className="modal-user">{post.user}</div> */}
          <div className="modal-user-row">
            <img
              src={post.user_profile_pic}
              alt={'finding'}
              className="modal-user-pic"
            />
            <span className="modal-user">{post.user}</span>
          </div>
          <img src={post.post_url} alt={post.title} className="modal-img" />
          <div className="modal-title">{post.title}</div>
          <div className="modal-location">{post.location}</div>
          <div className="modal-actions">
            <button className="like-btn" onClick={() => onLike(post.post_id)}>❤️ {post.like_count}</button>
            <button className="comment-btn" onClick={() => onComment(post.post_id)}>💬 Comment</button>
          </div>
          <button className="delete-btn" onClick={() => onDelete(post.post_id)}>Delete Post</button>
        </div>
      </div>
      {commentModalOpen && (
        <CommentModal
          postId={activePostId}
          onClose={() => setCommentModalOpen(false)}
        />
      )}
    </>
  );
};