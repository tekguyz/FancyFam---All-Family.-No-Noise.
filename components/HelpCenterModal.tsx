import React, { useState } from 'react';
import Dialog from './Dialog';

type Tab = 'quick-start' | 'changelog';

const HelpCenterModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<Tab>('quick-start');

  const tabButtonClasses = (tabName: Tab) => 
    `px-4 py-2 font-bold text-lg rounded-t-lg transition-colors border-b-4 ${
      activeTab === tabName
        ? 'text-primary border-primary'
        : 'text-text-secondary border-transparent hover:text-text hover:bg-surface-tonal'
    }`;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Help Center">
      <div className="flex flex-col h-full">
        {/* Tab Navigation */}
        <nav className="border-b-2 border-background -mt-6 -mx-6 px-6">
          <div role="tablist" aria-label="Help Center Tabs">
            <button
              role="tab"
              aria-selected={activeTab === 'quick-start'}
              aria-controls="quick-start-panel"
              id="quick-start-tab"
              onClick={() => setActiveTab('quick-start')}
              className={tabButtonClasses('quick-start')}
            >
              Quick Start
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'changelog'}
              aria-controls="changelog-panel"
              id="changelog-tab"
              onClick={() => setActiveTab('changelog')}
              className={tabButtonClasses('changelog')}
            >
              Changelog
            </button>
          </div>
        </nav>

        {/* Tab Content */}
        <div className="py-6 space-y-4 text-text-secondary">
          <div
            id="quick-start-panel"
            role="tabpanel"
            aria-labelledby="quick-start-tab"
            hidden={activeTab !== 'quick-start'}
          >
            <h3 className="text-xl font-bold text-text mb-2">Features Guide</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li><strong className="text-text">Wall/Posts:</strong> Your family's private feed. Share updates, photos, and stories without any ads or algorithms.</li>
              <li><strong className="text-text">Easy Event Planning:</strong> Organize birthdays and reunions with a shared "Bring Your Own" list to avoid duplicate efforts.</li>
              <li><strong className="text-text">Memory Magic (AI):</strong> Our Gemini-powered AI helps summarize long stories and rediscover forgotten photos, making connections effortless.</li>
              <li><strong className="text-text">Visualize Your Roots:</strong> Explore your heritage with an interactive family tree. Add new members and watch your history grow.</li>
              <li><strong className="text-text">Security/Privacy:</strong> Your space is invite-only, protected by a family passcode. Your data is never sold or shared.</li>
            </ul>
          </div>
          <div
            id="changelog-panel"
            role="tabpanel"
            aria-labelledby="changelog-tab"
            hidden={activeTab !== 'changelog'}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-text">Version 1.2.0 - October 2025</h3>
                <ul className="space-y-2 list-disc list-inside mt-2">
                  <li><strong className="text-primary">New:</strong> Interactive Family Tree! You can now add, edit, and delete family members directly from the tree view.</li>
                  <li><strong className="text-primary">New:</strong> Added Settings page and Help Center.</li>
                  <li><strong>Improved:</strong> AI Legacy Card on the main wall now has a subtle pulsing border to draw attention.</li>
                  <li><strong>Fixed:</strong> Cleaned up accent colors to provide a more consistent visual experience.</li>
                </ul>
              </div>
               <div>
                <h3 className="text-xl font-bold text-text">Version 1.0.0 - September 2025</h3>
                <ul className="space-y-2 list-disc list-inside mt-2">
                  <li>Initial release of FancyFam!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default HelpCenterModal;