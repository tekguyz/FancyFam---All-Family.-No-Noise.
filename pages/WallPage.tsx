import React from 'react';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import AILegacyCard from '../components/AILegacyCard';

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
        name: 'Eleanor',
    },
    timestamp: '2 hours ago',
    content: 'Just baked a fresh batch of chocolate chip cookies! The house smells amazing. 🍪',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800',
    likes: 12,
    comments: 3,
  },
  {
    id: '2',
    author: {
        name: 'James',
    },
    timestamp: '1 day ago',
    content: "Had a great time at the park with the kids today. Robert is getting so good at soccer! Here's a shot of his winning goal.",
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800',
    likes: 25,
    comments: 8,
  },
    {
    id: '3',
    author: {
        name: 'Susan',
    },
    timestamp: '3 days ago',
    content: "Remember this view from our family trip to the mountains back in '05? Found this while going through old photo albums. Good times!",
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
    likes: 42,
    comments: 11,
  },
];


const WallPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <AILegacyCard />
        <CreatePost />
        {mockPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default WallPage;