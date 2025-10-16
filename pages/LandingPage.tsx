import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import TransitionLink from '../components/TransitionLink';
import MiniMemories from '../components/visualizations/MiniMemories';
import MiniEvents from '../components/visualizations/MiniEvents';
import MiniAI from '../components/visualizations/MiniAI';
import MiniFamilyTree from '../components/visualizations/MiniFamilyTree';
import MiniIntegrations from '../components/visualizations/MiniIntegrations';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

const icons = {
  MemoryIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  EventIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  AIIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  TreeIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-3 3m0 0l-3-3m3 3v6m0-12a3 3 0 100-6 3 3 0 000 6zM6 18a3 3 0 100-6 3 3 0 000 6zm12 0a3 3 0 100-6 3 3 0 000 6z" /></svg>,
  IntegrationIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
};

const LandingPage: React.FC = () => {
  const { login, openSignInModal } = useAuth();
  const navigate = useNavigate();

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleViewDemo = () => {
    login();
    if (!document.startViewTransition) {
      navigate('/wall');
      return;
    }
    document.startViewTransition(() => {
      navigate('/wall');
    });
  };

  return (
    <div className="container mx-auto px-6 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-20">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
            <Logo className="w-[600px] h-auto opacity-5" />
        </div>
        <div className="w-32 h-auto md:w-40 mb-6 animate-fade-in-down">
            <Logo />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 animate-fade-in-down [animation-delay:0.1s]">
          All Family. No Noise.
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl text-text-secondary mb-10 animate-fade-in-up">
          Reclaim your digital space. Secure, invite-only, and built from the ground up to cut the noise and keep the connection.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="filled" onClick={openSignInModal}>Early Access</Button>
            <Button variant="outlined" onClick={handleViewDemo}>View Demo</Button>
            <Button variant="outlined" onClick={handleScrollToFeatures}>Our Features</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           <FeatureCard 
            icon={icons.AIIcon}
            headline="AI-Powered Connections"
            description="Our Gemini-powered AI helps summarize long stories, rediscover old photos, and makes family connections effortless."
            visualization={<MiniAI />}
          />
          <FeatureCard 
            icon={icons.MemoryIcon}
            headline="Relive Your Memories"
            description="Instantly find and share forgotten photos and stories. We bring your best family moments back to life when you need them."
            visualization={<MiniMemories />}
          />
          <FeatureCard 
            icon={icons.IntegrationIcon}
            headline="Seamless Integrations"
            description="Easily import memories from Google Photos or connect family from Facebook to build your private space without starting from scratch."
            visualization={<MiniIntegrations />}
          />
          <FeatureCard 
            icon={icons.EventIcon}
            headline="Plan Events Simply"
            description="Skip the endless group texts! Organize birthdays and holidays in one calm, simple, and organized family space."
            visualization={<MiniEvents />}
          />
          <FeatureCard 
            icon={icons.TreeIcon}
            headline="Visualize Your Roots"
            description="Explore your heritage with an interactive family tree. See how generations connect and discover your family's story."
            visualization={<MiniFamilyTree />}
            to="/roots"
          />
        </div>
      </section>

    </div>
  );
};

export default LandingPage;