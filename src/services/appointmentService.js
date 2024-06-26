import Cookies from "js-cookie";
const BASE_URL = "/api/appointments";  // The base URL according to the appointment backend API endpoint
const DOMAIN = "http://localhost:3000";

// Fetch available appointment slots from the server
export const fetchAppointmentSlots = async () => {
    try {
        const response = await fetch(`${DOMAIN}${BASE_URL}/slots`);
        
        if (!response.ok){
            throw new Error("Failed to fetch appointment slots");
        }
        return response.json();
    } catch (error){
        console.error("Error fetching appointment slots:", error);
        throw error;
    }
}

// Book a new appointment
export const bookAppointment = async (appointmentData) => {
    try {
        const response = await fetch(`${DOMAIN}${BASE_URL}/book`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(appointmentData),
        });
        if (!response.ok){
            throw new Error("Failed to book appointment");
        }
    } catch (error) {
        console.error("Error booking appointment:", error);
        throw error;
    }
};

// Search for appointments
export const searchAppointment = async (query) => {
    try {
        const url = new URL(`${DOMAIN}${BASE_URL}/search`);
        url.searchParams.append('query', query);

        const response = await fetch(url,{
            headers: {
                    'Authorization': `Bearer ${Cookies.get("token")}`,
                    'Content-Type': 'application/json',
                }
        });

        if (!response.ok){
            throw new Error("Failed to search appointments");
        }
        const data = await response.json(); // Await the JSON parsing
        return data;
    }
    catch (error){
        console.error("Error searching for appointment slots:", error);
        throw error;
    }
};