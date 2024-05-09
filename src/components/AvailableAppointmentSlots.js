import React, { useState, useEffect } from "react";
import { fetchAppointmentSlots } from "../services/appointmentService";

const AvailableAppointmentSlots = ({ onSelectAppointment }) => {
    const [appointmentSlots, setAppointmentSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSlots = async () => {
            setLoading(true);
            try {
                const slots = await fetchAppointmentSlots();
                setAppointmentSlots(slots);
            } catch (error) {
                setError("Error fetching appointment slots. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchSlots();
    }, []);

    const handleSelectAppointment = (slot) => {
        onSelectAppointment(slot);
    };

    return (
        <div>
            <h2>Available Appointment Slots</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {appointmentSlots.map((slot, index) => (
                        <li key={index}>
                            {slot.startTime} - {slot.endTime}{" "}
                            <button onClick={() => handleSelectAppointment(slot)}>Book Appointment</button> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AvailableAppointmentSlots;