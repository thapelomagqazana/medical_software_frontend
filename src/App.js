import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing/LandingPage';
// import LoginDialog from './pages/form/LoginForm';

import './App.css';
// import SignUpForm from './pages/form/RegisterForm';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        {/* <Route path="/login" element={<LoginDialog/>}></Route>
        <Route path="/register" element={<SignUpForm/>}></Route> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;