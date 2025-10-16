
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavigationRail from './NavigationRail';
import RightSidebar from './RightSidebar';
import MobileNavBar from './MobileNavBar';
import FeedbackFAB from './FeedbackFAB';

const AuthenticatedLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-text">
      <Header showAuthControls={true} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_320px] gap-8 px-4 pt-24 pb-24 md:pb-8">
        
        {/* Navigation Rail (Desktop) */}
        <aside className="hidden md:block">
          <NavigationRail />
        </aside>

        {/* Main Content */}
        <main className="min-w-0">
          <Outlet />
        </main>
        
        {/* Right Sidebar (Desktop) */}
        <aside className="hidden lg:block">
          <RightSidebar />
        </aside>
      </div>

      {/* Mobile Navigation */}
      <MobileNavBar />

      {/* Feedback Button */}
      <FeedbackFAB />
    </div>
  );
};

export default AuthenticatedLayout;