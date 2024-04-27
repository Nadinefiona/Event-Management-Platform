import React from 'react';
import UserDashboard from '../components/UserDashboard';

const UserDashboardPage = () => {
 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      <UserDashboard />
    </div>
 );
};

export default UserDashboardPage;
