import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getLinksForm(codformulario: number) {
    try {
        const url = `/api/linkform/${codformulario}/links`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
export async function deleteLinkForm(id: number) {
    try {
        const url = `/api/linkform/${id}/delete`;
        const { data } = await api.delete(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getFormularioByToken(tokenUrl: string) {
    try {
        const url = `/api/linkform/${tokenUrl}`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function enviarRespuestas(tokenUrl: string, payload: any) {
    try {
        const url = `/api/linkform/responder/${tokenUrl}`;
        const { data } = await api.post(url, payload);
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
