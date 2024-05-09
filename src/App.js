import React, { useState } from 'react';
import AvailableAppointmentSlots from './components/AvailableAppointmentSlots';
import AppointmentBookingForm from './components/AppointmentBookingForm';
import { bookAppointment } from './services/appointmentService';
import './App.css';

function App() {
  const [bookingData, setBookingData] = useState(null);

  const handleBooking = async (data) => {
    try {
      const response = await bookAppointment(data);
      setBookingData(response);
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };
  return (
    <div>
      <h1>Appointment Booking System</h1>
      <AvailableAppointmentSlots onSelectAppointment={handleBooking} />
      <AppointmentBookingForm onSubmit={handleBooking} />

      {bookingData && (
        <div>
          <h2>Booking Details</h2>
          <p>Start Time: {bookingData.startTime}</p>
          <p>End Time: {bookingData.endTime}</p>
          {/* Display additional booking details as needed */}
        </div>
      )}
    </div>
  );
}

export default App;
