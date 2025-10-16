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
        <div className="grid grid-cols-1 md:grid-cols-[68px_1fr] lg:grid-cols-[68px_1fr_300px] justify-center gap-8">
          
          {/* Left Navigation (Desktop) */}
          <aside className="hidden md:block">
             <div className="sticky top-24">
                <NavigationRail />
             </div>
          </aside>

          {/* Main Content */}
          <main className="w-full max-w-3xl justify-self-center">
            <Outlet />
          </main>
          
          {/* Right Sidebar (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
                <RightSidebar />
            </div>
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