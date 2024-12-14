import { FormularioCSchema, FormulariosSchema } from "../types";
import { safeParse } from "valibot";
import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function addFormulario(
    nombreformulario: string,
    descripcion: string,
    preguntas: {
        pregunta: string;
        opciones: {
            textoopcion: string;
            esrespuesta: boolean;
        }[];
    }[]
) {
    const dataR = {
        nombreformulario,
        descripcion,
        preguntas,
    };

    const url = "/api/formulario";
    const response = await api.post(url, dataR);

    return response.data;
}

export async function getNameFormularios() {
    try {
        const url = "/api/formulario";
        const { data } = await api.get(url);

        const result = safeParse(FormulariosSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error("hubo un error");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getFormularioById(id: number) {
    try {
        const url = `/api/formulario/${id}`;
        const { data } = await api.get(url);

        const result = safeParse(FormularioCSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            console.log("error de byID");
            throw new Error("Hubo un error para obtener un form especifico");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function deleteForm(id: number) {
    try {
        const url = `/api/formulario/${id}`;
        const { data } = await api.delete(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUser() {
    try {
        const url = "/api/auth/user";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUserInfo() {
    try {
        const url = "/api/auth/user";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function createLinkForm(datas: {
    codformulario: number;
    fechainicio: string;
    fechafin: string;
}) {
    try {
        const { codformulario, fechainicio, fechafin } = datas;

        const fechas = {
            fechainicio,
            fechafin,
        };

        const url = `/api/formulario/${codformulario}/compartir`;
        const { data } = await api.post(url, fechas);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
