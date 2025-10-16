import React, { useState, useEffect } from 'react';
import { BringYourOwnItem } from '../types';

interface BringYourOwnListProps {
  initialItems: BringYourOwnItem[];
}

const BringYourOwnList: React.FC<BringYourOwnListProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [flashedItemId, setFlashedItemId] = useState<string | null>(null);

  const handleClaimItem = (itemId: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, claimedBy: item.claimedBy ? null : 'You' } // Simple toggle for demo
          : item
      )
    );
    setFlashedItemId(itemId);
  };
  
  const handleNoteChange = (itemId: string, note: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, note } : item
      )
    );
  };

  useEffect(() => {
    if (flashedItemId) {
      const timer = setTimeout(() => setFlashedItemId(null), 700);
      return () => clearTimeout(timer);
    }
  }, [flashedItemId]);

  return (
    <div className="bg-surface rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-text mb-4">"Bring Your Own" List</h3>
      <ul className="space-y-4">
        {items.map(item => (
          <li
            key={item.id}
            className={`p-3 rounded-lg transition-all ${flashedItemId === item.id ? 'animate-flash-update' : ''}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex items-center flex-grow mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  id={`item-${item.id}`}
                  checked={!!item.claimedBy}
                  onChange={() => handleClaimItem(item.id)}
                  className="w-6 h-6 rounded text-primary bg-background border-text-secondary/50 focus:ring-primary"
                />
                <label
                  htmlFor={`item-${item.id}`}
                  className={`ml-3 text-lg ${item.claimedBy ? 'line-through text-text-secondary' : 'text-text'}`}
                >
                  {item.name}
                </label>
              </div>

              {item.claimedBy && (
                <div className="flex-shrink-0 text-sm font-semibold bg-primary/20 text-primary py-1 px-3 rounded-full self-start sm:self-center">
                  Claimed by: {item.claimedBy}
                </div>
              )}
            </div>
            {item.claimedBy === 'You' && (
              <div className="mt-2 pl-9">
                 <input
                    type="text"
                    value={item.note}
                    onChange={(e) => handleNoteChange(item.id, e.target.value)}
                    placeholder="Add a note for the host..."
                    className="w-full text-sm bg-background border-2 border-text-secondary/30 rounded-md px-3 py-1.5 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BringYourOwnList;