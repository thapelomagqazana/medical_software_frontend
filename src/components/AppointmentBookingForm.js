import React, { useState } from "react";

const AppointmentBookingForm = ({ onSubmit }) => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!startTime || !endTime){
            setError("Please select both start and end time.");
            return;
        }

        if (new Date(startTime) >= new Date(endTime)){
            setError("End time must be after start time");
            return;
        }

        onSubmit({ startTime, endTime });
        setStartTime("");
        setEndTime("");
        setError(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <label>
                Start Time:
                <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            </label>
            <label>
                End Time:
                <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AppointmentBookingForm;