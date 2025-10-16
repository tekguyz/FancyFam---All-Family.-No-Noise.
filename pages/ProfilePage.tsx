import React, { useState } from 'react';
import Dialog from '../components/Dialog';
import ElevatedButton from '../components/ElevatedButton';
import Button from '../components/Button';
import { FacebookIcon, GooglePhotosIcon } from '../components/SocialIcons';
import InfoCard from '../components/InfoCard';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const ProfilePage: React.FC = () => {
  const [isIntegrationsModalOpen, setIsIntegrationsModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { logout } = useAuth();
  const { showToast } = useToast();


  const handleFacebookConnect = () => {
    console.log("Attempting to connect with Facebook...");
    showToast("Facebook integration is coming soon!");
  };

  const handleGooglePhotosConnect = () => {
    console.log("Attempting to connect with Google Photos...");
    showToast("Google Photos integration is coming soon!");
  };

  return (
    <>
      <div className="w-full space-y-8">
        <h1 className="text-4xl font-bold text-text">Your Profile</h1>
        
        {/* Personal Info Card */}
        <InfoCard title="Personal Info">
            <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-text">Your Name</h2>
                    <p className="text-text-secondary">your.email@fancyfam.com</p>
                </div>
                <Button onClick={() => setIsEditProfileModalOpen(true)} variant="outlined">Edit</Button>
            </div>
        </InfoCard>

        {/* Family Legacy Card */}
        <InfoCard title="Family Legacy">
            <div className="space-y-4 text-text">
                <div>
                    <h4 className="font-semibold text-text-secondary">Favorite Family Memory</h4>
                    <p>"Baking cookies with Grandma Elena every Christmas. The smell of gingerbread just takes me right back home."</p>
                </div>
                <div>
                    <h4 className="font-semibold text-text-secondary">Go-To Event Dish</h4>
                    <p>"Javier's Famous Lasagna. Seriously, it disappears the moment it hits the table!"</p>
                </div>
            </div>
        </InfoCard>

        {/* Integrations Card */}
        <InfoCard title="Integrations">
            <p className="text-text-secondary mb-6">
                Connect your other accounts to seamlessly import memories, photos, and family contacts. Your data is always private and secure.
            </p>
            <Button onClick={() => setIsIntegrationsModalOpen(true)} variant="outlined">
                Connect Your Data
            </Button>
        </InfoCard>

        {/* Log Out Button */}
        <div className="pt-4">
            <Button onClick={logout} variant="filled" className="w-full">
                Log Out
            </Button>
        </div>
      </div>

      {/* Integrations Modal */}
      <Dialog
        isOpen={isIntegrationsModalOpen}
        onClose={() => setIsIntegrationsModalOpen(false)}
        title="Connect Your Data"
      >
        <div className="space-y-4">
            <p className="text-text-secondary text-center mb-4">
                Choose a service to connect. This allows FancyFam to import your data and build a richer family history.
            </p>
            <ElevatedButton onClick={handleFacebookConnect} icon={<FacebookIcon />}>
                Connect with Facebook
            </ElevatedButton>
            <ElevatedButton onClick={handleGooglePhotosConnect} icon={<GooglePhotosIcon />}>
                Connect Google Photos
            </ElevatedButton>
        </div>
      </Dialog>
      
      {/* Edit Profile Modal Placeholder */}
       <Dialog
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        title="Edit Profile"
      >
        <p className="text-text-secondary text-center">
            This is where you would edit your profile information. This functionality is not yet implemented.
        </p>
      </Dialog>
    </>
  );
};

export default ProfilePage;