import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  let navItems;

  if (!props.userLoggedIn) {
    navItems = (
      <React.Fragment>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </React.Fragment>
    );
  } else {
    if (!props.appointmentScheduled) {
      navItems = (
        <React.Fragment>
          <li>Schedule Appointment</li>
          <li>Profile</li>
          <li>Logout</li>
        </React.Fragment>
      );
    } else {
      navItems = (
        <React.Fragment>
          <li>Profile</li>
          <li>Logout</li>
        </React.Fragment>
      );
    }
  }

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
        {navItems}
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
