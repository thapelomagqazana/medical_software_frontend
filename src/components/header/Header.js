import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Modal from '../modal/Modal';
import LoginForm from '../../pages/form/LoginForm';
import RegisterForm from '../../pages/form/RegisterForm';

const Header = (props) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

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
        {!props.userLoggedIn && <li><button onClick={openLogin}>Login</button></li>}
        {!props.userLoggedIn && <li><button onClick={openRegister}>Register</button></li>}
        {props.userLoggedIn && !props.appointmentScheduled && <li><Link to="/schedule">Schedule Appointment</Link></li>}
        {props.userLoggedIn && <li><Link to="/profile">Profile</Link></li>}
        {props.userLoggedIn && <li><Link to="/logout">Logout</Link></li>}
      </ul>
    </nav>
    {props.userLoggedIn && <div className="search-bar">
      <input type="text" placeholder="Search for providers..." />
      <button>Search</button>
    </div>}

      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <LoginForm onClose={closeLogin} />
      </Modal>
      <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
        <RegisterForm onClose={closeRegister} />
      </Modal>
  </header>
  );
};

export default Header;
