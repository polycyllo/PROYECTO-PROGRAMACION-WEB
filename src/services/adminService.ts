import Cookies from "js-cookie";
import api from "../lib/axios";

export async function getAllUsers() {
    try {
        const token = Cookies.get("authToken");
        const url = "/api/admin/";
        const { data } = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}
