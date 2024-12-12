import axios from "axios";
import Cookies from "js-cookie";

export async function getAllUsers() {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/admin/`;
        const token = Cookies.get("authToken");
        const { data } = await axios(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}
