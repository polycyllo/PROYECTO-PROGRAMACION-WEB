import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.VITE_APIT_URL,
    withCredentials: true,
});

export default api;
// import Cookies from "js-cookie";

// api.interceptors.request.use((config) => {
//     const token = Cookies.get("authToken");
//     console.log("desde cokies", token);//si imprime pero ya no funciona mis endpoints
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });
