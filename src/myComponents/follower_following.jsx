import React from 'react'
import '../styles/follower_following.css'
import { useNavigate } from 'react-router-dom'

export const FF = ({ type, list, onClose }) => {
  const navigate = useNavigate();
  const go_far = (id) => {
      navigate(`/other-profiles/${id}`);
      onClose();
  }
    return (
        <>
          <div className="followers-following-modal-backdrop">
    <div className="followers-following-modal">
      <button className="back-btn" onClick={onClose}>Back</button>
      <h2>{type === 'followers' ? 'Followers' : 'Following'}</h2>
      <ul>
        {list.length === 0 ? (
          <li className='text-black'>No {type} found.</li>
        ) : (
          list.map((user) => (
            <li onClick={() => go_far(user.profile_id)}>
              <img width={'33px'} className='rounded-full h-[33px]' src={user.profile_pic}></img>
              <span className='text-black ml-3'>{user.username}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  </div>
        </>
    )
}
