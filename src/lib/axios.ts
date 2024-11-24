import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.VITE_APIT_URL,
});
export default api;
