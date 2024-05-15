import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

  return (
    <header className="header">
    <div className="logo">
      <Link to="/">Medical Scheduler</Link>
    </div>
    <nav className="navigation">
      <ul>
        {props.userLoggedIn && <li>Find Providers</li>}
        {props.userLoggedIn && <li>My Appointments</li>}
        <li>About Us</li>
        <li>Contact</li>
        {!props.userLoggedIn && <li><Link to="/login">Login</Link></li>}
        {!props.userLoggedIn && <li><Link to="/register">Register</Link></li>}
        {props.userLoggedIn && !props.appointmentScheduled && <li><Link to="/schedule">Schedule Appointment</Link></li>}
        {props.userLoggedIn && <li><Link to="/profile">Profile</Link></li>}
        {props.userLoggedIn && <li><Link to="/logout">Logout</Link></li>}
      </ul>
    </nav>
    {props.userLoggedIn && <div className="search-bar">
      <input type="text" placeholder="Search for providers..." />
      <button>Search</button>
    </div>}
  </header>
  );
};

export default Header;
