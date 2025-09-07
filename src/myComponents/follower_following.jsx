import React from 'react'
import '../styles/follower_following.css'

export const FF = ({ type, list, onClose }) => {
    return (
        <>
          <div className="followers-following-modal-backdrop">
    <div className="followers-following-modal">
      <button className="back-btn" onClick={onClose}>Back</button>
      <h2>{type === 'followers' ? 'Followers' : 'Following'}</h2>
      <ul>
        {list.length === 0 ? (
          <li>No {type} found.</li>
        ) : (
          list.map((user) => (
            <li>
              <span className='text-black'>{user}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  </div>
        </>
    )
}
