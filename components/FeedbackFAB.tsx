import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const FeedbackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const FeedbackFAB: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-primary text-black h-16 w-16 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out z-40"
                aria-label="Open feedback form"
            >
                <FeedbackIcon />
            </button>
            <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FeedbackFAB;