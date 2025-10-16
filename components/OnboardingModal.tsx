import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';

const initialMessages: ChatMessage[] = [
    { id: 1, sender: 'bot', text: "Welcome to FancyFam's AI Assistant! I can help you get the most out of your family's space. To start, what's your first name?" }
];

const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 p-3">
        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-typing-dot"></div>
        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-typing-dot [animation-delay:0.2s]"></div>
        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-typing-dot [animation-delay:0.4s]"></div>
    </div>
);

const OnboardingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setMessages(initialMessages); // Reset on open
        }
    }, [isOpen]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);


    const handleUserResponse = (text: string) => {
        // This is a mock response flow
        const userMessage: ChatMessage = { id: Date.now(), sender: 'user', text };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
            let botResponseText = "Thanks! It's great to have you here. This is just a demo of the conversational UI. In a real app, I'd ask more questions to personalize your experience.";
            if (messages.length === 1) { // First response
                botResponseText = `Nice to meet you, ${text}! What's your relationship to the family head? (e.g., Son, Daughter, Grandchild)`;
            }

            const botMessage: ChatMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
            setIsTyping(false);
            setMessages(prev => [...prev, botMessage]);

        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-surface rounded-3xl w-full max-w-md shadow-2xl flex flex-col max-h-[80vh] animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <header className="p-6 border-b border-text-secondary/20 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-primary">AI Onboarding</h2>
                    <button onClick={onClose} aria-label="Close dialog" className="text-text-secondary hover:text-text p-1 rounded-full hover:bg-surface-tonal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </header>
                <div className="flex-grow p-6 overflow-y-auto space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`rounded-2xl px-4 py-2 max-w-sm ${msg.sender === 'user' ? 'bg-primary text-black' : 'bg-background'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                             <div className="rounded-2xl bg-background flex items-center">
                                <TypingIndicator />
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <footer className="p-6 border-t border-text-secondary/20">
                    <form onSubmit={e => {
                        e.preventDefault();
                        const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement;
                        if (input.value.trim()) {
                            handleUserResponse(input.value.trim());
                            input.value = '';
                        }
                    }}>
                        <input
                            name="message"
                            className="w-full bg-background rounded-full px-4 py-2 text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Type your answer..."
                            autoComplete="off"
                        />
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default OnboardingModal;