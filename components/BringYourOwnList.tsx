import React, { useState } from 'react';
import { BringYourOwnItem } from '../types';
import Button from './Button';
import TextField from './TextField';
import CustomPrompt from './CustomPrompt';

interface BringYourOwnListProps {
  initialItems: BringYourOwnItem[];
}

interface PromptConfig {
  isOpen: boolean;
  itemId: string | null;
}

const BringYourOwnList: React.FC<BringYourOwnListProps> = ({ initialItems }) => {
  const [items, setItems] = useState<BringYourOwnItem[]>(initialItems);
  const [newItemName, setNewItemName] = useState('');
  const [promptConfig, setPromptConfig] = useState<PromptConfig>({ isOpen: false, itemId: null });

  const handleClaim = (itemId: string) => {
    setPromptConfig({ isOpen: true, itemId: itemId });
  };
  
  const handlePromptSubmit = (values: { personName: string }) => {
    const { personName } = values;
    if (personName && promptConfig.itemId) {
      setItems(currentItems =>
        currentItems.map(item =>
          item.id === promptConfig.itemId ? { ...item, claimedBy: personName } : item
        )
      );
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      const newItem: BringYourOwnItem = {
        id: Date.now().toString(),
        name: newItemName.trim(),
        claimedBy: null,
        note: ''
      };
      setItems(currentItems => [...currentItems, newItem]);
      setNewItemName('');
    }
  };

  return (
    <>
      <div className="bg-surface rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-text mb-4">What to Bring</h2>
        <ul className="divide-y divide-background">
          {items.map(item => (
            <li key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-text">{item.name}</p>
                {item.note && <p className="text-sm text-text-secondary">{item.note}</p>}
              </div>
              {item.claimedBy ? (
                <p className="mt-2 sm:mt-0 text-md font-bold text-primary text-left sm:text-right">
                  Brought by {item.claimedBy}
                </p>
              ) : (
                <button
                  onClick={() => handleClaim(item.id)}
                  className="mt-2 sm:mt-0 px-4 py-1.5 text-sm font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  I'll Bring It!
                </button>
              )}
            </li>
          ))}
        </ul>
        
        <form onSubmit={handleAddItem} className="mt-6 pt-6 border-t border-background">
          <h3 className="text-xl font-bold text-text mb-3">Add something to the list?</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <TextField
                id="new-item"
                label="Item Name"
                value={newItemName}
                onChange={e => setNewItemName(e.target.value)}
              />
            </div>
            <Button type="submit" variant="outlined">Add Item</Button>
          </div>
        </form>
      </div>
      <CustomPrompt
          isOpen={promptConfig.isOpen}
          onClose={() => setPromptConfig({ isOpen: false, itemId: null })}
          onSubmit={handlePromptSubmit}
          title="Claim Item"
          fields={[{ id: 'personName', label: 'What is your name?', required: true }]}
          submitText="Claim"
      />
    </>
  );
};

export default BringYourOwnList;
