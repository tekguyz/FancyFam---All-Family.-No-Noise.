import React from 'react';
import EmptyState from '../components/EmptyState';
import { useToast } from '../context/ToastContext';

const MediaIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const MediaPage: React.FC = () => {
    const { showToast } = useToast();

    const handleUpload = () => {
        showToast("Photo upload functionality is coming soon!");
    };

    return (
        <EmptyState
            icon={<MediaIcon />}
            title="Your Media Gallery is Empty"
            message="Share your favorite moments with the family. Upload your first photo to get started."
            action={{
                text: 'Upload Photo',
                onClick: handleUpload,
            }}
        />
    );
};

export default MediaPage;
