import { FormularioCSchema, FormulariosSchema } from "../types";
import { safeParse } from "valibot";
import Cookies from "js-cookie";
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

    const token = Cookies.get("authToken");

    const url = "/api/formulario";
    const response = await api.post(url, dataR, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getNameFormularios() {
    try {
        const token = Cookies.get("authToken");

        const url = "/api/formulario";
        const { data } = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

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
        const token = Cookies.get("authToken");

        const url = `/api/formulario/${id}`;
        const { data } = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const result = safeParse(FormularioCSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            console.log("error de byID");
            throw new Error("Hubo un error para obtener un form especifico");
        }
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteForm(id: number) {
    try {
        const token = Cookies.get("authToken");

        const url = `/api/formulario/${id}`;
        const { data } = await api.delete(url, {
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

export async function getUser() {
    try {
        const token = Cookies.get("authToken");

        const url = "/api/auth/user";
        const { data } = await api.get<string>(url, {
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

export async function getUserInfo() {
    try {
        const token = Cookies.get("authToken");

        const url = "/api/auth/user";
        const { data } = await api.get(url, {
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

        const token = Cookies.get("authToken");

        const url = `/api/formulario/${codformulario}/compartir`;
        const { data } = await api.post(url, fechas, {
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
