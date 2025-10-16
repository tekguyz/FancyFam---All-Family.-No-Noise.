
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button';
import Switch from '../components/Switch';

const SettingsPage: React.FC = () => {
  const { toggleTheme } = useTheme();
  const [eventReminders, setEventReminders] = useState(true);
  const [newPostAlerts, setNewPostAlerts] = useState(true);
  const [typographySize, setTypographySize] = useState('Medium');

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      alert('Account deletion functionality is not implemented yet.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-text">Settings</h1>

      {/* Theme & Display Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Theme & Display</h2>
        <div className="bg-surface rounded-2xl p-6 shadow-md space-y-6">
          {/* Theme Toggle */}
          <div className="flex justify-between items-center">
            <p className="text-lg text-text">Toggle App Theme</p>
            <Button onClick={toggleTheme} variant="outlined">Change Theme</Button>
          </div>
          {/* Typography Size */}
          <div className="flex justify-between items-center">
            <p className="text-lg text-text">Typography Size</p>
            <div className="flex items-center gap-2">
              {['Small', 'Medium', 'Large'].map(size => (
                <button
                  key={size}
                  onClick={() => setTypographySize(size)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${typographySize === size ? 'bg-primary text-black' : 'bg-surface-tonal hover:bg-background'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Notifications</h2>
        <div className="bg-surface rounded-2xl p-6 shadow-md divide-y divide-background">
          <div className="flex justify-between items-center py-3">
            <label htmlFor="event-reminders" className="text-lg text-text cursor-pointer">Event Reminders</label>
            <Switch id="event-reminders" checked={eventReminders} onChange={() => setEventReminders(prev => !prev)} />
          </div>
          <div className="flex justify-between items-center py-3">
            <label htmlFor="new-post-alerts" className="text-lg text-text cursor-pointer">New Post Alerts</label>
            <Switch id="new-post-alerts" checked={newPostAlerts} onChange={() => setNewPostAlerts(prev => !prev)} />
          </div>
        </div>
      </section>
      
      {/* Account Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Account</h2>
        <div className="bg-surface rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg text-text font-semibold">Delete Account</p>
                    <p className="text-text-secondary">Permanently remove all your data.</p>
                </div>
                <button 
                    onClick={handleDeleteAccount}
                    className="px-6 py-2 font-bold text-lg rounded-full border-2 border-red-500/50 text-red-500/80 hover:bg-red-500/10 hover:text-red-500 transition-colors focus:outline-none focus:ring-4 focus:ring-red-500/30"
                >
                    Delete
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
