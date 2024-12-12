import axios from "axios";

import {
    FormularioCSchema,
    FormulariosSchema,
    PreguntaS,
    fechaRango,
} from "../types";
import { safeParse } from "valibot";
import Cookies from "js-cookie";
import { isAxiosError } from "axios";

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
    console.log(dataR);
    const token = Cookies.get("authToken");
    const url = `${import.meta.env.VITE_APIT_URL}/api/formulario`;

    const response = await axios.post(url, dataR, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getNameFormularios() {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/formulario`;
        const token = Cookies.get("authToken");
        const { data } = await axios(url, {
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
        const url = `${import.meta.env.VITE_APIT_URL}/api/formulario/${id}`;
        const token = Cookies.get("authToken");
        const { data } = await axios.get(url, {
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
        const url = `${import.meta.env.VITE_APIT_URL}/api/formulario/${id}`;
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

export async function getUser() {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/auth/user`;
        const token = Cookies.get("authToken");

        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // console.log("datoss ya pues", data);

        //const result = safeParse(userSchema, data);
        //console.log("valores  ", result.output);
        // if (result.success) {
        //     return result.output;
        // } else {
        //     console.log("error de byID");
        //     throw new Error("Hubo un error para obtener un form especifico");
        // }
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUserInfo() {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/auth/user`;
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

        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/formulario/${codformulario}/compartir`;
        const token = Cookies.get("authToken");

        const { data } = await axios.post(url, fechas, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("creadaaa ", data);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
