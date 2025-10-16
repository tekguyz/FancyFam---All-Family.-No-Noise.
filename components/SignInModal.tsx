import React, { useState } from 'react';
import Dialog from './Dialog';
import TextField from './TextField';
import Button from './Button';
import TransitionLink from './TransitionLink';
import { useNavigate } from 'react-router-dom';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Supabase sign-in
    console.log('Signing in with:', { email, password });
    onLoginSuccess(); // Set authenticated state
    onClose(); // Close the modal
    if (!document.startViewTransition) {
        navigate('/wall');
        return;
      }
      document.startViewTransition(() => {
        navigate('/wall');
      });
  };

  const handleSignUpClick = () => {
    onClose(); // Close the sign-in modal before navigating
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="filled" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="text-center mt-6 text-text-secondary">
        Don't have an account?{' '}
        <TransitionLink to="/signup" className="font-bold text-primary hover:underline">
            <span onClick={handleSignUpClick}>Sign Up</span>
        </TransitionLink>
      </p>
    </Dialog>
  );
};

export default SignInModal;