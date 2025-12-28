import axios from 'axios';


const API_URL = process.env.BACKEND_URL;
const api = axios.create({
});

export const sendMessage = async (message) => {
    try {
        const response = await api.post('/chat', { message });
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
