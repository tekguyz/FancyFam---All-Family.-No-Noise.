import React from 'react';
import { Post } from '../types';

const LikeIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const CommentIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.158 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.206 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
);


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    // Simple hash function to get a color for the avatar background
  const getAvatarColor = (name: string) => {
    // Use different opacities of the primary color for variation
    const colors = ['bg-primary/50', 'bg-primary/40', 'bg-primary/60', 'bg-primary/30'];
    const charCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  };

  return (
    <article className="bg-surface rounded-2xl p-6 shadow-md" aria-labelledby={`post-author-${post.id}`}>
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${getAvatarColor(post.author.name)} flex-shrink-0 mr-4 flex items-center justify-center text-text font-bold text-xl`}>
            {post.author.name.charAt(0)}
        </div>
        <div>
          <p id={`post-author-${post.id}`} className="font-bold text-text">{post.author.name}</p>
          <p className="text-sm text-text-secondary">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-text mb-4 whitespace-pre-wrap">{post.content}</p>
      {post.imageUrl && (
        <div className="mb-4">
            <img src={post.imageUrl} alt="User upload" className="rounded-lg w-full max-h-96 object-cover" />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center text-text-secondary border-t border-text-secondary/20 pt-3 space-x-6">
        <button className="flex items-center space-x-2 hover:text-primary transition-colors">
            <LikeIcon className="h-6 w-6" />
            <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-primary transition-colors">
            <CommentIcon className="h-6 w-6" />
            <span>{post.comments}</span>
        </button>
      </div>
    </article>
  );
};

export default PostCard;