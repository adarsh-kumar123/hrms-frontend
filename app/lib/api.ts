import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-Language": "en",
  },
});
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

export default api;