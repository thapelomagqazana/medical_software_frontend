import React, { useState } from 'react';
import Header from "../../components/header/Header";
import QuickActions from '../../components/quick/QuickActions';
import SearchBar from "../../components/search/SearchBar";
import "./HomePage.css";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const userLoggedIn = true;

  return (
    <div>
      <Header userLoggedIn={userLoggedIn}/>
      <main className='main-content'>
        <SearchBar setSearchResults={setSearchResults}/>
        {searchResults.length > 0 ? (
          <div className='search-results'>
            {searchResults.map((appointment) => (
              <div key={appointment._id} className='appointment-card'>
                <p>Date: {new Date(appointment.startTime).toLocaleString()}</p>
                <p>End Time: {new Date(appointment.endTime).toLocaleString()}</p>
                <p>Booked: {appointment.booked ? "Yes" : "No"}</p>
              </div>
            ))}
          </div>
        ) : (
          <QuickActions />
        )}
        <QuickActions />
      </main>
    </div>
    
  );
};

export default HomePage;
