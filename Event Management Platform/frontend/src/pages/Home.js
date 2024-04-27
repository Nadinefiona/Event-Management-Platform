import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';

const Home = () => {
 const [events, setEvents] = useState([]);

 useEffect(() => {
    // Fetch events from your backend
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
 }, []);

 return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <EventList events={events} />
    </div>
 );
};

export default Home;
