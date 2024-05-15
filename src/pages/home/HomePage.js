import React from 'react';
import Header from "../../components/header/Header";
import QuickActions from '../../components/quick/QuickActions';
import "./HomePage.css";

const HomePage = () => {
  const userLoggedIn = true;

  return (
    <div>
      <Header userLoggedIn={userLoggedIn}/>
      <main className='main-content'>
        <QuickActions />
      </main>
    </div>
    
  );
};

export default HomePage;
