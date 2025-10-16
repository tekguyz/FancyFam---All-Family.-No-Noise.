import React, { useState } from 'react';
import InfoCard from './InfoCard';
import OnboardingModal from './OnboardingModal';

const RightSidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full space-y-6">
        <InfoCard title="Upcoming Events">
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              <div>
                  <p className="font-semibold text-text">Grandma Elena's Big 80</p>
                  <p className="text-text-secondary">October 25th</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              <div>
                  <p className="font-semibold text-text">Annual Park Potluck</p>
                  <p className="text-text-secondary">November 12th</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              <div>
                  <p className="font-semibold text-text">Jen & Will's Wedding</p>
                  <p className="text-text-secondary">December 3rd</p>
              </div>
            </li>
          </ul>
        </InfoCard>
        <InfoCard title="AI Onboarding">
          <p className="text-sm text-text-secondary mb-4">
            Discover how our new AI can help you tag photos, summarize stories, and connect with relatives.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-primary/80 text-black font-bold py-2 px-4 rounded-lg hover:bg-primary transition-colors"
          >
              Start Tutorial
          </button>
        </InfoCard>
      </div>
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default RightSidebar;