import React, { useEffect, useState } from 'react';
import { ToastMessage } from '../types';

const icons = {
    success: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    info: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    error: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const colors = {
    success: 'text-green-500',
    info: 'text-primary',
    error: 'text-red-500',
};

const Toast: React.FC<{ message: ToastMessage; onDismiss: () => void }> = ({ message, onDismiss }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onDismiss, 500); // Wait for animation to finish
        }, 5000);

        return () => clearTimeout(timer);
    }, [onDismiss]);
    
    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(onDismiss, 500);
    };

    const animationClass = isExiting ? 'animate-toast-out' : 'animate-toast-in';
    const role = message.type === 'error' ? 'alert' : 'status';

    return (
        <div className={`flex items-start p-4 rounded-2xl shadow-2xl bg-surface/80 backdrop-blur-md ${animationClass}`} role={role}>
            <div className={`flex-shrink-0 ${colors[message.type]}`}>
                {icons[message.type]}
            </div>
            <div className="ml-3 flex-grow">
                <p className="text-md font-semibold text-text">{message.message}</p>
            </div>
            <button onClick={handleDismiss} aria-label="Dismiss notification" className="ml-4 text-text-secondary hover:text-text focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
};

export default Toast;