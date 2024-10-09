import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Function to create a new countdown timer
export const createTimer = async (data) => {
  try {
    const response = await axios.post(`${backendUrl}/api/timers`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Return the response data (you can modify this according to your needs)
    return response.data;
  } catch (error) {
    console.error('Failed to create timer:', error);
    // Handle error response (e.g., display a message or send back a status)
    throw error;
  }
};
