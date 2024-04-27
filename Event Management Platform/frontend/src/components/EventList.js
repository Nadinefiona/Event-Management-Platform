import React from 'react';

const EventList = ({ events }) => {
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map(event => (
        <div key={event._id} className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p>{event.date.toLocaleDateString()}</p>
          <p>{event.location}</p>
          <p>Tickets Available: {event.ticketAvailability}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
        </div>
      ))}
    </div>
 );
};

export default EventList;
