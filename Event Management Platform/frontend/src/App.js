import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/events/:eventId" component={EventPage} />
      <Route path="/dashboard" component={UserDashboardPage} />
      <Route path="/admin" component={AdminDashboardPage} />
    </Router>
  );
}

export default App;
