const BASE_URL = "/api/auth";  // The base URL according to the appointment backend API endpoint
const DOMAIN = "http://localhost:3000";
export const register = async (firstName, lastName, email, password) => {
    try {
        const response = await fetch(`${DOMAIN}${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });

        if (!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to register"); 
        }

        const data = await response.json();
        return data.token;
    } catch (error){
        console.error("Error with registering:", error);
        throw error;
    }
   
};

export const login = async (email, password) => {
    try {
        const response = await fetch(`${DOMAIN}${BASE_URL}/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to login"); 
        }

        const data = await response.json();
        return data.token;
    } catch (error){
        console.error("Error with logging in:", error);
        throw error;
    }
   
};