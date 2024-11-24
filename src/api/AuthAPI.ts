import api from "../lib/axios";
import { isAxiosError } from "axios";
import { UsuarioRegistrationForm } from "../types";
export async function createAccount(formData: UsuarioRegistrationForm) {
    try {
        const url = "/api/auth/create-account";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
