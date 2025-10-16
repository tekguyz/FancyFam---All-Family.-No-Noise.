import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavigationRail from './NavigationRail';
import MobileNavBar from './MobileNavBar';
import RightSidebar from './RightSidebar';
import FeedbackFAB from './FeedbackFAB';

// FIX: Implemented component to resolve module not found errors.
const AuthenticatedLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-text">
      <Header showAuthControls={true} />
      
      <div className="container mx-auto px-6 pt-24 pb-24 md:pb-12">
        <div className="flex justify-center gap-8">
          
          {/* Left Navigation (Desktop) */}
          <aside className="hidden md:block sticky top-24 h-full">
             <NavigationRail />
          </aside>

          {/* Main Content */}
          <main className="flex-grow max-w-3xl">
            <Outlet />
          </main>
          
          {/* Right Sidebar (Desktop) */}
          <aside className="hidden lg:block sticky top-24 h-full w-[300px]">
            <RightSidebar />
          </aside>

        </div>
      </div>
      
      {/* Floating Action Button for Feedback */}
      <FeedbackFAB />

      {/* Bottom Navigation (Mobile) */}
      <MobileNavBar />
    </div>
  );
};

export default AuthenticatedLayout;
