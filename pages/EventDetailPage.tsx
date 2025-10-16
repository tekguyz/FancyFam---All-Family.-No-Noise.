import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { mockEvents } from './EventsPage';
import BringYourOwnList from '../components/BringYourOwnList';

const EventDetailPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const event = mockEvents.find(e => e.id === eventId);

    if (!event) {
        return <Navigate to="/events" replace />;
    }

    return (
        <div className="w-full space-y-6">
            <header>
                <h1 className="text-4xl font-bold text-primary">{event.title}</h1>
                <p className="text-xl text-text-secondary font-semibold mt-1">{event.date}</p>
            </header>

            <p className="text-lg bg-surface p-4 rounded-xl">{event.description}</p>
            
            {event.items.length > 0 && <BringYourOwnList initialItems={event.items} />}

            {event.items.length === 0 && (
                <div className="bg-surface rounded-2xl p-6 text-center">
                    <p className="text-text-secondary">No items needed for this event yet. Check back later!</p>
                </div>
            )}
        </div>
    );
};

export default EventDetailPage;