import React from 'react';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import AILegacyCard from '../components/AILegacyCard';

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
        name: 'Elena',
    },
    timestamp: '2 hours ago',
    content: 'Just pulled a huge batch of chocolate chip magic out of the oven! Who needs a fix? Send me a text! 😋',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800',
    likes: 12,
    comments: 3,
  },
  {
    id: '2',
    author: {
        name: 'Javier',
    },
    timestamp: '1 day ago',
    content: "Park day success! Roberto is seriously becoming a little soccer star. Caught this shot right after his epic goal!",
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800',
    likes: 25,
    comments: 8,
  },
    {
    id: '3',
    author: {
        name: 'Susana',
    },
    timestamp: '3 days ago',
    content: "OMG, found this old pic going through albums! Remember that crazy mountain trip back in '05? The view was insane! Good times, missing you all!",
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