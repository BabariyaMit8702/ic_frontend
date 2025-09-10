import React, { useState,useEffect } from 'react';
import '../styles/postmodel.css'
import { CommentModal } from './comment_box';
import { useSelector } from 'react-redux';


export const PostDetailsModal = ({ post, onClose, onLike, onDelete }) => {
  if (!post) return null;
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
  const onComment = (postId) => {
    setActivePostId(postId);
    setCommentModalOpen(true);
  };
  const whenChange = useSelector((state) => state.the_emp.whenChange);
  const [cc, setcc] = useState(post.comment_count)
  useEffect(() => {
    // document.body.classList.add("modal-open");
    // return () => {
    //   document.body.classList.remove("modal-open");
    // };
       const fetchPost = async () => {
      try {
        let response = await fetch(`http://127.0.0.1:8000/main/api/posts/${post.post_id}/`, {
          method: "GET",
          credentials: "include"
        });
        if (!response.ok) return;
        let data = await response.json();
        setcc(data.comment_count);  
      } catch (err) {
        console.log(err);
      }
    };

      fetchPost();
  }, [whenChange]);


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
            <button className="comment-btn" onClick={() => onComment(post.post_id)}>💬 Comments {cc}</button>
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