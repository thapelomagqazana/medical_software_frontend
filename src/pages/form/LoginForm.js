import React, { useState } from 'react';
import './Form.css';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="login-form-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
