import React from 'react';

const AILegacyCard: React.FC = () => {
  return (
    <div className="bg-surface-tonal rounded-2xl p-6 shadow-md border-2 border-primary relative overflow-hidden animate-pulse-border">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
            alt="AI generated memory highlight"
            className="rounded-lg object-cover w-full h-48 md:h-full"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-bold text-primary">AI-Powered Legacy</h3>
          </div>
          <p className="text-text font-semibold text-lg mb-2">
            A Throwback to the Mountain Trip of '05
          </p>
          <p className="text-text-secondary">
            <span className="font-bold text-text-secondary/80">[Gemini-Generated Summary]:</span> This photo captures the family's shared sense of adventure during the 2005 mountain trip. Susan's post sparked memories of cool morning hikes and cozy evenings by the fire, a cherished moment of togetherness and appreciation for nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AILegacyCard;