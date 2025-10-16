import React from 'react';

const CreatePost: React.FC = () => {
  return (
    <div className="bg-surface rounded-2xl p-4 shadow-md">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </div>
        <div className="flex-grow">
          <textarea
            className="w-full bg-transparent p-2 text-lg placeholder-text-secondary focus:outline-none resize-none"
            rows={2}
            placeholder="What's on your mind, fam?"
          />
          <div className="flex justify-end items-center mt-2">
            <button className="bg-primary text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-opacity">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
