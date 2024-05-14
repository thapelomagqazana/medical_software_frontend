import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (userLoggedIn, appointmentScheduled) => {
  return (
    <header className="header">
    <div className="logo">
      <Link to="/">Medical Scheduler</Link>
    </div>
    <nav className="navigation">
      <ul>
        <li>Find Providers</li>
        <li>My Appointments</li>
        <li>About Us</li>
        <li>Contact</li>
        {!userLoggedIn && <li>Login</li>}
        {!userLoggedIn && <li>Register</li>}
        {userLoggedIn && !appointmentScheduled && <li>Schedule Appointment</li>}
        {userLoggedIn && <li>Profile</li>}
        {userLoggedIn && <li>Logout</li>}
      </ul>
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search for providers..." />
      <button>Search</button>
    </div>
  </header>
  );
};

export default Header;
