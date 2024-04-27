import React, { useEffect, useState } from 'react';
import EventDetails from '../components/EventDetails';
import BookingForm from '../components/BookingForm';

const EventPage = ({ match }) => {
 const [event, setEvent] = useState(null);

 useEffect(() => {
    // Fetch event details from your backend using match.params.id
    fetch(`/api/events/${match.params.id}`)
      .then(response => response.json())
      .then(data => setEvent(data));
 }, [match.params.id]);

 const handleBooking = (tickets) => {
    // Implement booking logic here
 };

 return (
    <div className="container mx-auto p-4">
      {event && (
        <>
          <EventDetails event={event} />
          <BookingForm onSubmit={handleBooking} />
        </>
      )}
    </div>
 );
};

export default EventPage;
