import React, { useState } from "react";
import { searchAppointment } from "../../services/appointmentService";
import "./SearchBar.css";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        // Reset search results
        setSearchResults([]);

        try {
            const params = new URLSearchParams();
            if (query) params.append("query", query);

            const data = await searchAppointment(query);
            setSearchResults(data);
        }
        catch (error) {
            console.error("Error searching appointments:", error);
        }
    };

    return (
        <div className="search-appointments">
            <div className="search-bar">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by provider or user..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((appointment) => (
                        <div key={appointment._id} className="appointment-card">
                            <p><strong>Provider:</strong> {appointment.providerId.name}</p>
                            <p><strong>User:</strong> {appointment.userId?.firstName} {appointment.userId?.lastName}</p>
                            <p><strong>Date:</strong> {new Date(appointment.startTime).toLocaleDateString()}</p>
                            <p><strong>Time:</strong> {new Date(appointment.startTime).toLocaleTimeString()} - {new Date(appointment.endTime).toLocaleTimeString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No appointments found.</p>
                )}
            </div>
        </div>
        
        
    );
};

export default SearchBar;