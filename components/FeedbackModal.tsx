import React, { useState } from 'react';
import Dialog from './Dialog';
import TextField from './TextField';
import TextareaField from './TextareaField';
import Button from './Button';
import { useToast } from '../context/ToastContext';

type FeedbackType = 'bug' | 'feature' | 'general';

const FeedbackTypeSelector: React.FC<{ selected: FeedbackType; onSelect: (type: FeedbackType) => void }> = ({ selected, onSelect }) => {
    const types: { id: FeedbackType; label: string }[] = [
        { id: 'bug', label: 'Bug Report' },
        { id: 'feature', label: 'Feature Request' },
        { id: 'general', label: 'General Feedback' },
    ];
    return (
        <div className="flex bg-surface-tonal rounded-full p-1 mb-6">
            {types.map(({ id, label }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => onSelect(id)}
                    className={`w-full py-2 text-sm font-bold rounded-full transition-colors duration-300 ${
                        selected === id ? 'bg-primary text-black shadow' : 'text-text-secondary hover:bg-surface'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};


const FeedbackModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('general');
  const [formData, setFormData] = useState({
      page: '',
      bugDescription: '',
      stepsToReproduce: '',
      featureDescription: '',
      featureBenefit: '',
      generalFeedback: '',
      email: ''
  });
  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
        'form-name': 'feedback',
        feedbackType,
        ...formData
    };

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload)
    })
    .then(() => {
        showToast("Thank you for your feedback!", 'success');
        onClose();
    })
    .catch(error => {
        showToast("Sorry, there was an error submitting your feedback.", 'error');
        console.error(error);
    });
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Share Your Feedback">
      <form onSubmit={handleSubmit} name="feedback" data-netlify="true">
        <input type="hidden" name="form-name" value="feedback" />
        <input type="hidden" name="feedbackType" value={feedbackType} />
        
        <FeedbackTypeSelector selected={feedbackType} onSelect={setFeedbackType} />
        
        {feedbackType === 'bug' && (
            <div className="space-y-4 animate-fade-in">
                <TextField id="page" name="page" label="Page where bug occurred" value={formData.page} onChange={handleChange} />
                <TextareaField id="bugDescription" name="bugDescription" label="Please describe the bug" required value={formData.bugDescription} onChange={handleChange} />
                <TextareaField id="stepsToReproduce" name="stepsToReproduce" label="Steps to reproduce (if possible)" value={formData.stepsToReproduce} onChange={handleChange} />
            </div>
        )}

        {feedbackType === 'feature' && (
            <div className="space-y-4 animate-fade-in">
                <TextareaField id="featureDescription" name="featureDescription" label="What new feature would you like?" required value={formData.featureDescription} onChange={handleChange} />
                <TextareaField id="featureBenefit" name="featureBenefit" label="How would this help your family?" required value={formData.featureBenefit} onChange={handleChange} />
            </div>
        )}
        
        {feedbackType === 'general' && (
            <div className="animate-fade-in">
                <TextareaField id="generalFeedback" name="generalFeedback" label="What's on your mind?" required value={formData.generalFeedback} onChange={handleChange} />
            </div>
        )}

        <div className="mt-4">
            <TextField id="email" name="email" type="email" label="Your Email (Optional)" value={formData.email} onChange={handleChange}/>
        </div>
        
        <div className="pt-4">
            <Button type="submit" variant="filled" className="w-full">Submit Feedback</Button>
        </div>
      </form>
    </Dialog>
  );
};

export default FeedbackModal;