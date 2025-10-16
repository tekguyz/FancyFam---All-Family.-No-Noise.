import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import MiniFamilyTree from '../components/visualizations/MiniFamilyTree';
import MiniEvents from '../components/visualizations/MiniEvents';
import MiniMemories from '../components/visualizations/MiniMemories';
import MiniAI from '../components/visualizations/MiniAI';
import MiniIntegrations from '../components/visualizations/MiniIntegrations';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

// FIX: Implemented component to resolve module not found errors.
const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { login, openSignInModal } = useAuth();

    const handleViewDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        login(); // Set authenticated state
        if (!document.startViewTransition) {
            navigate('/wall');
            return;
        }
        document.startViewTransition(() => {
            navigate('/wall');
        });
    };
    
    const handleEarlyAccess = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openSignInModal();
    };
    
    const handleScrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container mx-auto px-6 text-center">
            
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16">
                <div className="w-full max-w-4xl flex flex-col items-center">
                    <div className="w-48 h-auto mb-8 animate-fade-in-down">
                        <Logo />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-primary mb-8 leading-tight animate-fade-in-down">
                        All Family. No Noise.
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 animate-fade-in-up">
                        Your private, secure social network designed exclusively for your family. Share memories, plan events, and stay connected.
                    </p>
                    <div className="w-full max-w-xs sm:max-w-none flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up">
                        <Button onClick={handleEarlyAccess} variant="filled" className="w-full sm:w-auto">Early Access</Button>
                        <Button onClick={handleViewDemo} variant="outlined" className="w-full sm:w-auto">View Demo</Button>
                    </div>
                </div>
                <a 
                  href="#features" 
                  onClick={handleScrollToFeatures}
                  className="absolute bottom-10 animate-bounce-slow text-primary/70 hover:text-primary transition-colors"
                  aria-label="Scroll to features"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24">
                 <h2 className="text-4xl font-bold text-text mb-16">Everything You Need to Stay Connected</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>}
                        headline="Private Family Wall"
                        visualization={<MiniMemories />}
                        description="Share photos, stories, and updates in a secure, ad-free feed just for your family."
                    />
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 14.25h.008v.008H12v-.008z" /></svg>}
                        headline="Collaborative Events"
                        visualization={<MiniEvents />}
                        description="Plan birthdays and potlucks with shared 'Bring Your Own' lists so nothing is forgotten."
                    />
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.17 48.17 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>}
                        headline="Interactive Family Tree"
                        visualization={<MiniFamilyTree />}
                        description="Build and explore your family's history. Add new members and watch your legacy grow."
                    />
                     <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        headline="AI-Powered Memories"
                        visualization={<MiniAI />}
                        description="Gemini AI helps you rediscover and summarize cherished memories from photos and posts."
                    />
                     <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a3.375 3.375 0 00-3.375-3.375S6.75 3.375 6.75 6.75v3.75m.75 4.5a3.375 3.375 0 006 0M6.75 10.5h.75m5.25 0h.75M10.5 10.5V15m0 0a3 3 0 003 3m-3-3a3 3 0 013-3m-3 3H9m3 0H9" /></svg>}
                        headline="Private & Secure"
                        visualization={<div className="text-6xl">🔐</div>}
                        description="Your family's space is invite-only, protected by a family passcode. We never sell or share your data."
                    />
                     <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0h9.75m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>}
                        headline="Seamless Integrations"
                        visualization={<MiniIntegrations />}
                        description="Connect Google Photos or Facebook to easily import your existing memories and build your story."
                    />
                </div>
            </section>

        </div>
    );
};

export default LandingPage;