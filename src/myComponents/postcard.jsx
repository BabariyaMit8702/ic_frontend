  import { useSelector } from "react-redux";
  import '../styles/postcard.css'

  export const PostCard = ({ post, onLike, go_pr, onComment }) => {

    return (
      <div className="bg-gray-800 rounded-2xl shadow-md p-4 w-full">
        {/* Header */}
        <div className="flex items-center mb-3">
          <img
            onClick={() => go_pr(post.user_profile_id)}
            src={post.user_profile_pic}
            alt="pp"
            className="w-10 h-10 rounded-full object-cover mr-3 hover:cursor-pointer"
          />
          <span onClick={() => go_pr(post.user_profile_id)} className="font-semibold text-white hover:cursor-pointer">{post.user}</span>
        </div>

        {/* Post Image */}
        {post.post_url && (
          <img
            src={post.post_url}
            alt={post.title}
            className="w-full rounded-lg object-cover mb-3"
          />
        )}

        {/* Title + Location */}
        <div className="text-sm text-gray-300 mb-2">
          <span className="font-medium">{post.title}</span> ·{" "}
          <span className="italic">{post.location}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 mt-2">
          <button
            className="flex items-center space-x-1 text-red-400 hover:text-red-500"
            onClick={() => onLike(post.post_id)}
          >
            <span>❤️</span>
            <span>{post.like_count}</span>
          </button>
          <button
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-500"
            onClick={() => onComment(post.post_id)}
          >
            <span>💬</span>
            <span>Comment</span>
          </button>
        </div>
      </div>
    );
  };
