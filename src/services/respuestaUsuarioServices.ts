import axios from "axios";
import Cookies from "js-cookie";
export async function getRespuestasForm() {
    try {
        const url = `${import.meta.env.VITE_APIT_URL}/api/formulario`;
        const token = Cookies.get("authToken");
        const { data } = await axios(url, {
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
        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/respuestas/usuarios/${codformulario}`;
        const token = Cookies.get("authToken");
        const { data } = await axios(url, {
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
        const url = `${
            import.meta.env.VITE_APIT_URL
        }/api/respuestas/formulario/${tokenForm}`;
        const token = Cookies.get("authToken");
        const { data } = await axios(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}
