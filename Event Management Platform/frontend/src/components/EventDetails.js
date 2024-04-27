import React from 'react';

const EventDetails = ({ event }) => {
 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p>{event.date.toLocaleDateString()}</p>
      <p>{event.location}</p>
      <p>Tickets Available: {event.ticketAvailability}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
    </div>
 );
};

export default EventDetails;
