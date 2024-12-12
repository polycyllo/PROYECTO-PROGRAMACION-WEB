import axios from "axios";

import Cookies from "js-cookie";
import { isAxiosError } from "axios";

export async function getLinksForm(codformulario: number) {
    try {
        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/linkform/${codformulario}/links`;
        const token = Cookies.get("authToken");

        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
export async function deleteLinkForm(id: number) {
    try {
        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/linkform/${id}/delete`;
        const token = Cookies.get("authToken");

        const { data } = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getFormularioByToken(tokenUrl: string) {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/linkform/${tokenUrl}`;
        const token = Cookies.get("authToken");

        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function enviarRespuestas(tokenUrl: string, payload: any) {
    try {
        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/linkform/responder/${tokenUrl}`;
        const token = Cookies.get("authToken");

        const { data } = await axios.post(url, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(
                error.response.data.error || "Error al enviar respuestas."
            );
        }
        throw new Error("Error inesperado al enviar respuestas.");
    }
}
