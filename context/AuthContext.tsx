import React, { createContext, useState, useContext } from 'react';
import SignInModal from '../components/SignInModal';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  openSignInModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, openSignInModal }}>
      {children}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={closeSignInModal}
      />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
