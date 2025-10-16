import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const HARDCODED_PASSCODE = 'FancyFam2025!';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [familyPasscode, setFamilyPasscode] = useState('');
  const [error, setError] = useState('');
  const { openSignInModal } = useAuth();
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (familyPasscode !== HARDCODED_PASSCODE) {
      setError('Invalid Family Passcode. Please check and try again.');
      return;
    }

    // Mock Supabase sign-up
    console.log('Signing up with:', { email, password });
    showToast('Sign-up successful! Welcome to the family.', 'success');
  };
  
  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openSignInModal();
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="w-full max-w-md mx-auto p-8 bg-surface rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Join the Family</h2>
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
          <TextField
            id="family-passcode"
            label="Family Passcode"
            type="password"
            value={familyPasscode}
            onChange={(e) => setFamilyPasscode(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <Button type="submit" variant="filled" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="text-center mt-6 text-text-secondary">
          Already have an account?{' '}
          <a href="#" onClick={handleSignInClick} className="font-bold text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;