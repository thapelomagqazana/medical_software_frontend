import Cookies from "js-cookie";
const BASE_URL = "/api/providers";  // The base URL according to the appointment backend API endpoint
const DOMAIN = "http://localhost:3000";

export const getProviders = async () => {
    try {
        const response = await fetch(`${DOMAIN}${BASE_URL}/all`,{
            headers: {
                    'Authorization': `Bearer ${Cookies.get("token")}`,
                    'Content-Type': 'application/json',
                }
        });

        if (!response.ok){
            throw new Error("Failed to get providers");
        }
        const data = await response.json(); // Await the JSON parsing
        return data;
    }
    catch (error){
        console.error("Error getting for providers:", error);
        throw error;
    }
};

