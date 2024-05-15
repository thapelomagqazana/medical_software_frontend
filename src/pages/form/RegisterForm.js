import React, { useState } from 'react';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Form.css';

const RegisterForm = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordStrong = (password) => {
    // Define password strength criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  
    // Check if password meets all criteria
    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    );
  };
  
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if password meets strength criteria
    // if (!isPasswordStrong(password)) {
    //   setError("Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character");
    //   return;
    // }

      // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const token = await register(firstName, lastName, email, password);
      Cookies.set("token", token);
      navigate("/home");
    } catch (err){
      setError(err.message);
    }
  };
  
  return (
    <div className="signup-form-container">
      <h2>Create an Account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
