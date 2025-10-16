import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layouts & Components
import AuthenticatedLayout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import WallPage from './pages/WallPage';
import FamilyTreePage from './pages/FamilyTreePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import MediaPage from './pages/MediaPage';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';

// Layout for public pages that still need the header/footer
const PublicLayout = () => (
  <div className="min-h-screen bg-background font-sans text-text flex flex-col">
    <Header showAuthControls={false} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// This component checks auth and protects routes
const PrivateRouteWrapper = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AuthenticatedLayout /> : <Navigate to="/landing" replace />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {/* Public routes like landing, sign-in, and sign-up */}
      <Route element={<PublicLayout />}>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      {/* Protected routes for authenticated users */}
      <Route element={<PrivateRouteWrapper />}>
        <Route path="/" element={<Navigate to="/wall" replace />} />
        <Route path="/wall" element={<WallPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/roots" element={<FamilyTreePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      
      {/* Fallback redirect: send to landing if not logged in, otherwise default to wall */}
      <Route path="*" element={<Navigate to={isAuthenticated ? "/wall" : "/landing"} replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
