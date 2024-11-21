/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL+"/auth"; // Access the base URL from the environment variable

export const loginUser = async (email: string, password: string) => {
  try {
    // const response = await api.post('/logben', { username: email, password });
    const response = await axios.post(
      `${baseURL}/login`,
      { email, password },
      { withCredentials: true }
    );

    // Check for different response statuses or data conditions
    if (response.status === 200) {
      // Assuming a successful login returns a status of 200
      return response.data;
    } else if (response.status === 401) {
      // Assuming a status of 401 indicates unauthorized (incorrect credentials)
      throw new Error('Incorrect email or password.');
    } else {
      // Handle other statuses or unexpected responses
      throw new Error('An unexpected error occurred. Please try again.');
    }
  } catch (error: any) {
    // Handle network or server errors
    if (error.response) {
      // Server responded with a status other than 200 range
      throw new Error(error.response.data.message || 'An error occurred. Please try again.');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server. Please check your network connection.');
    } else {
      // Something else happened while setting up the request
      throw new Error(error.message);
    }
  }
};

export const signUpUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${baseURL}/register`,
      { email, password },
      { withCredentials: true }
    );

    // Check for different response statuses or data conditions
    if (response.status === 200) {
      // Assuming a successful login returns a status of 200
      return response.data;
    } else {
      // Handle other statuses or unexpected responses
      throw new Error('An unexpected error occurred. Please try again.');
    }
  } catch (error: any) {
    // Handle network or server errors
    if (error.response) {
      // Server responded with a status other than 200 range
      throw new Error(error.response.data.message || 'An error occurred. Please try again.');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server. Please check your network connection.');
    } else {
      // Something else happened while setting up the request
      throw new Error(error.message);
    }
  }
};