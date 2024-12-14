import api from "../lib/axios";

export async function getAllUsers() {
    try {
        const url = "/api/admin/";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}
