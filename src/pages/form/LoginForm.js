import React, { useState } from 'react';
import { login } from '../../services/authService';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      Cookies.set("token", token);
      navigate("/home");
    } catch (err){
      setError(err.message);
    }

  };
  
  return (
    <div className="login-form-container">
      <h2>Login to Your Account</h2>
      {error && <p className="error">{error}</p>}
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password"
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
