import React, { useState, useEffect } from 'react';

const AILegacyCard: React.FC = () => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      // FIX: Safely access the API key to prevent a ReferenceError in the browser.
      const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

      if (!apiKey) {
        setError('API Key is missing. Please configure it in your environment variables.');
        setIsLoading(false);
        // Fallback to a default message on error so the app doesn't feel broken
        setSummary("A treasured memory of adventure and togetherness, rediscovered from a time of cool mountain air and warm family bonds.");
        return;
      }

      try {
        // FIX: Dynamically import the library to prevent top-level errors from breaking the app load.
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey });
        
        const memoryPrompt = `
          You are a warm, sentimental AI family historian for an app called FancyFam.
          Your task is to look at a user's post and write a short, nostalgic summary about the memory it represents.
          Keep it under 50 words. Be evocative and focus on the feeling.

          Here is the post content:
          "Remember this view from our family trip to the mountains back in '05? Found this while going through old photo albums. Good times!"
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: memoryPrompt,
        });
        
        setSummary(response.text);
      } catch (e) {
        console.error("Error fetching summary from Gemini API:", e);
        setError('Could not generate AI summary. Please try again later.');
        // Fallback to a default message on error
        setSummary("A treasured memory of adventure and togetherness, rediscovered from a time of cool mountain air and warm family bonds.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-2">
          <div className="w-full h-4 bg-surface-tonal rounded-full animate-pulse"></div>
          <div className="w-5/6 h-4 bg-surface-tonal rounded-full animate-pulse"></div>
          <div className="w-3/4 h-4 bg-surface-tonal rounded-full animate-pulse"></div>
        </div>
      );
    }
    // Do not show the raw error message to the user, but show the fallback summary.
    // The error is logged to the console for debugging.
    return (
        <p className="text-text-secondary">
            {summary}
        </p>
    );
  }

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
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AILegacyCard;