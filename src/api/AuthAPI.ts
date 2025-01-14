import api from "../lib/axios";
import axios, { isAxiosError } from "axios";
axios.defaults.withCredentials = true;
import {
    ConfirmToken,
    RequestConfirmation,
    UsuarioLogin,
    UsuarioRegistrationForm,
} from "../types";
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

export async function confirmAccount(formData: ConfirmToken) {
    try {
        const url = "/api/auth/confirm-account";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function RequestConfirmationCode(formData: RequestConfirmation) {
    try {
        const url = "/api/auth/request-code";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function loginUser(formData: UsuarioLogin) {
    try {
        const url = "/api/auth/login";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function logoutService() {
    try {
        const url = "/api/auth/logout";
        const { data } = await api.post<string>(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
