import React from 'react';
import { Event } from '../types';
import TransitionLink from '../components/TransitionLink';

const mockEvents: Event[] = [
    {
        id: '1',
        title: "Grandma's Birthday",
        date: 'October 25th',
        description: "Let's celebrate Grandma's 80th birthday with a big family dinner! We'll have cake, games, and lots of memories to share.",
        items: [
            { id: '1-1', name: 'Birthday Cake', claimedBy: 'Susan', note: 'Chocolate with vanilla icing' },
            { id: '1-2', name: 'Balloons & Decorations', claimedBy: null, note: '' },
            { id: '1-3', name: 'Paper Plates & Utensils', claimedBy: null, note: '' },
            { id: '1-4', name: 'Main Dish (Lasagna)', claimedBy: 'James', note: 'Making my famous recipe!' },
            { id: '1-5', name: 'Side Salad', claimedBy: null, note: '' },
        ],
    },
    {
        id: '2',
        title: 'Family Reunion',
        date: 'November 12th',
        description: 'Our annual family reunion at the park. Potluck style, so bring your favorite dish to share!',
        items: [
            { id: '2-1', name: 'Grill Master (Burgers & Hot Dogs)', claimedBy: 'Richard', note: '' },
            { id: '2-2', name: 'Buns & Condiments', claimedBy: null, note: '' },
            { id: '2-3', name: 'Potato Salad', claimedBy: 'Eleanor', note: '' },
            { id: '2-4', name: 'Drinks Cooler', claimedBy: null, note: '' },
            { id: '2-5', name: 'Frisbee & Lawn Games', claimedBy: 'Michael', note: '' },
        ]
    },
    {
        id: '3',
        title: "Cousin's Wedding",
        date: 'December 3rd',
        description: "Jennifer and William are getting married! Let's coordinate to get them a wonderful group gift.",
        items: []
    }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <TransitionLink to={`/events/${event.id}`}>
        <div className="bg-surface rounded-2xl p-6 shadow-md hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
            <p className="text-text-secondary font-semibold mt-1 mb-3">{event.date}</p>
            <p className="text-text">{event.description}</p>
        </div>
    </TransitionLink>
);

const EventsPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-text">Upcoming Events</h1>
            {mockEvents.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventsPage;
export { mockEvents }; // Export for use in detail page
