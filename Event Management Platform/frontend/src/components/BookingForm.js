import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
 const [tickets, setTickets] = useState(1);

 const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tickets);
 };

 return (
    <form onSubmit={handleSubmit} className="p-4">
      <label htmlFor="tickets" className="block text-sm font-medium text-gray-700">Number of Tickets</label>
      <input type="number" id="tickets" name="tickets" min="1" value={tickets} onChange={(e) => setTickets(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Book</button>
    </form>
 );
};

export default BookingForm;
