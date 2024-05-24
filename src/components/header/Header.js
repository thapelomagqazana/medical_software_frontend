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
    <div>
      {props.userLoggedIn && <p>Welcome to the Appointment Scheduling System</p>}
    </div>
    <nav className="navigation">
      <ul>
        {/* {props.userLoggedIn && <li>Find Providers</li>}
        {props.userLoggedIn && <li>My Appointments</li>} */}
        <li>About Us</li>
        <li>Contact</li>
        {!props.userLoggedIn && <li onClick={openLogin}>Login</li>}
        {!props.userLoggedIn && <li onClick={openRegister}>Register</li>}
        {/* {props.userLoggedIn && <li><Link to="/schedule">Schedule Appointment</Link></li>}
        {props.userLoggedIn && <li><Link to="/profile">Profile</Link></li>} */}
        {props.userLoggedIn && <li><Link to="/">Logout</Link></li>}
      </ul>
    </nav>

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
