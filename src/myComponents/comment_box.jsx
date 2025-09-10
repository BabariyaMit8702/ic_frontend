import React, { useEffect, useState } from "react";
import "../styles/comment_box.css";

export const CommentModal = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(3);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    document.body.classList.add("post-modal-open");
    return () => {
      document.body.classList.remove("post-modal-open");
    };
  }, []);


  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(
          `http://127.0.0.1:8000/main/api/comments/?post=${postId}`,
          { credentials: "include" }
        );
        if (!response.ok) return;
        let data = await response.json();
        setComments(data.reverse()); // latest last
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [postId]);

  // Post new comment
  const handleSend = async () => {
    if (!newComment.trim()) return;
    try {
      let response = await fetch("http://127.0.0.1:8000/main/api/comments/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: newComment, post: postId }),
      });

      if (!response.ok) {
        throw new Error('the new one!');
      }

      let data = await response.json();
      setComments((prev) => [data, ...prev]);
      setNewComment("");


    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setVisibleComments((prev) => prev + 3);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="comment-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="comment-header">
          <input
            className="text-black"
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleSend}>📨</button>
        </div>

        {/* Body */}
        <div className="comment-body" onScroll={handleScroll}>
          {comments.slice(0, visibleComments).map((cmt) => (
            <div key={cmt.comment_id} className="comment-item">
              <img
                src={cmt.user_profile_pic}
                alt={cmt.user_name}
                className="comment-user-pic"
              />
              <div>
                <strong className="text-black">{cmt.user_name}</strong>
                <p className="text-black">{cmt.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
