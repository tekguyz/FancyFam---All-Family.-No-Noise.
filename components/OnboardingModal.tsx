
import React, { useState } from 'react';
import Dialog from './Dialog';
import Button from './Button';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const onboardingSteps = [
  {
    title: 'Welcome to FancyFam!',
    content: "This quick tutorial will show you how our new AI features can help you connect with your family's history.",
  },
  {
    title: 'Rediscover Memories',
    content: 'Our AI, powered by Google Gemini, analyzes old photos and stories you share, creating beautiful summaries and highlighting forgotten moments.',
  },
  {
    title: 'Tag Photos, Instantly',
    content: 'Soon, you\'ll be able to upload a group photo, and our AI will help identify and tag everyone, making it easier to organize your albums.',
  },
  {
    title: 'Get Started!',
    content: 'That\'s it! Start by posting on the wall or exploring your family tree. We hope you enjoy making new connections.',
  }
];

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose(); // Finish on the last step
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = onboardingSteps[currentStep];

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={step.title}>
      <div className="text-center">
        <p className="text-text-secondary mb-8 min-h-[60px]">{step.content}</p>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep ? 'bg-primary' : 'bg-surface-tonal'
              }`}
            />
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          {currentStep > 0 ? (
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div /> // Placeholder for alignment
          )}
          <Button variant="filled" onClick={handleNext}>
            {currentStep === onboardingSteps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default OnboardingModal;
