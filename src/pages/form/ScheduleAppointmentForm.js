import React, { useState, useEffect } from "react";

import "./ScheduleAppointment.css"
import { getProviders } from "../../services/providerService";
import { bookAppointment } from "../../services/appointmentService";

const ScheduleAppointmentForm = ( {onClose}) => {
    const [providers, setProviders] = useState([]);
    const [formData, setFormData] = useState({
        providerName: "",
        startTime: "",
        endTime: ""
    });
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchProviders();
    }, []);

    const fetchProviders = async () => {
        try {
            const response = await getProviders();
            // console.log(response);
            setProviders(response);
        }
        catch (error) {
            console.error("Error fetching providers:", error);
        }
    };

    const handleChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bookAppointment(formData);
            setMessage("Appointment booked successfully");
        }
        catch (error) {
            setMessage("Failed to book appointment");
            console.error("Error book appointment:", error);
        }
    };

    return (
        <div className="schedule-appointment">
            <h2>Schedule a New Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="provider">Provider</label>
                    <select id="providerName" name="providerName" onChange={handleChange} value={formData.providerName} required>
                        <option value="">Select Provider</option>
                        {providers.map(provider => (
                            <option key={provider._id} value={provider.name}>{provider.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="start-time">Start Time</label>
                    <input type="datetime-local" id="startTime" name="startTime" onChange={handleChange} value={formData.startTime} required />
                </div>
                <div className="form-group">
                    <label htmlFor="end-time">End Time</label>
                    <input type="datetime-local" id="endTime" name="endTime" onChange={handleChange} value={formData.endTime} required />
                </div>
                <button type="submit" className="schedule-button-a">Book Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ScheduleAppointmentForm;