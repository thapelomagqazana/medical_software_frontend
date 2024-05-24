import React, { useState } from "react";
import { searchAppointment } from "../../services/appointmentService";
import "./SearchBar.css";

const SearchBar = ({ setSearchResults }) => {
    const [query, setQuery] = useState("");

    const handleSearch = async () => {
        if (!query) return;

        try {
            const params = new URLSearchParams();
            if (query) params.append("query", query);

            const data = searchAppointment(query);
            setSearchResults(data);
        }
        catch (error) {
            console.error("Error searching appointments:", error);
        }
    };

    return (
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
    );
};

export default SearchBar;