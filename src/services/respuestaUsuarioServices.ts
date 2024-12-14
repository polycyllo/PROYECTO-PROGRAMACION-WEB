import Cookies from "js-cookie";
import api from "../lib/axios";
export async function getRespuestasForm() {
    try {
        const token = Cookies.get("authToken");
        const url = "/api/formulario";
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

export async function getRespuestasPorRango(codformulario: number) {
    try {
        const token = Cookies.get("authToken");
        const url = `/api/respuestas/usuarios/${codformulario}`;
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

export async function getFormularioRespondidoByToken(tokenForm: string) {
    try {
        const token = Cookies.get("authToken");
        const url = `/api/respuestas/formulario/${tokenForm}`;
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
