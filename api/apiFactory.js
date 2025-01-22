import axios from 'axios';

const API_BASE_URL = "https://22e2-2a09-bac5-3f09-a82-00-10c-2d.ngrok-free.app/api/journeys";

export const apiFactory = {
   
  fetchFare: async (journeyData) => 
    axios.get('https://22e2-2a09-bac5-3f09-a82-00-10c-2d.ngrok-free.app/api/fare', journeyData, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
        
        
  fetchAll: async () =>
    axios.get(API_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  fetchByUser: async (userId) =>
    axios.get(`${API_BASE_URL}/user/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  fetchById: async (journeyId) =>
    axios.get(`${API_BASE_URL}/${journeyId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  create: async (journeyData) =>
    axios.post(API_BASE_URL, journeyData, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  bulkCreate: async (journeys) =>
    axios.post(`${API_BASE_URL}/bulk`, journeys, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
