import React, { useState } from "react";

import "./ScheduleAppointment.css"

const ScheduleAppointmentForm = ( {onClose}) => {
    const [providerName, setProviderName] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSchedule = async () => {
        if (!providerName || !date || !startTime || !endTime){
            alert("All fields are required.");
            return;
        }
    };

    return (
        <div className="schedule-appointment">
            <h2>Schedule a New Appointment</h2>
            <div className="form-group">
                <label htmlFor="provider">Provider</label>
                <input type="text" id="provider" value={providerName} onChange={e => setProviderName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="start-time">Start Time</label>
                <input type="time" id="start-time" value={startTime} onChange={e => setStartTime(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="end-time">End Time</label>
                <input type="time" id="end-time" value={endTime} onChange={e => setEndTime(e.target.value)} />
            </div>
            <button onClick={handleSchedule} className="schedule-button-a">Schedule Appointment</button>
        </div>
    );
};

export default ScheduleAppointmentForm;