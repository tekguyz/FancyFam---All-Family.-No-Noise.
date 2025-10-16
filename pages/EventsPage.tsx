import React from 'react';
import { Event } from '../types';
import TransitionLink from '../components/TransitionLink';

const mockEvents: Event[] = [
    {
        id: '1',
        title: "Grandma Elena's Big 80",
        date: 'October 25th',
        description: "A massive celebration for Grandma's 80th! Formal family dinner—dress code is 'dress up a little.'",
        items: [
            { id: '1-1', name: "Grandma's Fave Cake", claimedBy: 'Susana', note: 'Chocolate with vanilla icing' },
            { id: '1-2', name: 'Balloons & Decorations', claimedBy: null, note: '' },
            { id: '1-3', name: 'Paper Plates & Utensils', claimedBy: null, note: '' },
            { id: '1-4', name: "Javier's Famous Lasagna", claimedBy: 'Javier', note: 'Making my famous recipe!' },
            { id: '1-5', name: 'Side Salad', claimedBy: null, note: '' },
        ],
    },
    {
        id: '2',
        title: 'Annual Park Potluck',
        date: 'November 12th',
        description: "The annual family reunion at the park. Bring your favorite dish, and let's hang out!",
        items: [
            { id: '2-1', name: 'Grill Master (Burgers & Hot Dogs)', claimedBy: 'Ricardo', note: '' },
            { id: '2-2', name: 'Buns & Condiments', claimedBy: null, note: '' },
            { id: '2-3', name: "Elena's Classic Potato Salad", claimedBy: 'Elena', note: '' },
            { id: '2-4', name: 'Drinks Cooler', claimedBy: null, note: '' },
            { id: '2-5', name: 'Frisbee & Lawn Games', claimedBy: 'Miguel', note: '' },
        ]
    },
    {
        id: '3',
        title: "Jen & Will's Wedding",
        date: 'December 3rd',
        description: "Jennifer and William are getting married! Time to coordinate a killer group gift.",
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
        <div className="w-full space-y-6">
            <h1 className="text-4xl font-bold text-text">Upcoming Events</h1>
            {mockEvents.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventsPage;
export { mockEvents }; // Export for use in detail page