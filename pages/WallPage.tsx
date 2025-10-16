
import React from 'react';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import AILegacyCard from '../components/AILegacyCard';

const mockPosts: Post[] = [
  {
    id: '1',
    author: { name: 'Javier' },
    timestamp: '2 hours ago',
    content: "Remember this view from our family trip to the mountains back in '05? Found this while going through old photo albums. Good times!",
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
    likes: 12,
    comments: 4,
  },
  {
    id: '2',
    author: { name: 'Susana' },
    timestamp: 'Yesterday at 5:31 PM',
    content: "Grandma Elena's birthday is coming up! Don't forget to check the events page to see what you can bring. I've already claimed the cake! 🎂",
    likes: 25,
    comments: 9,
  },
  {
    id: '3',
    author: { name: 'Ricardo' },
    timestamp: '3 days ago',
    content: "Just taught David how to ride a bike! So proud of the little guy. He fell a few times but never gave up.",
    likes: 31,
    comments: 6,
  }
];

const WallPage: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <CreatePost />
      <AILegacyCard />
      {mockPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default WallPage;