import api from "../lib/axios";
export async function getRespuestasForm() {
    try {
        const url = "/api/formulario";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getRespuestasPorRango(codformulario: number) {
    try {
        const url = `/api/respuestas/usuarios/${codformulario}`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getFormularioRespondidoByToken(tokenForm: string) {
    try {
        const url = `/api/respuestas/formulario/${tokenForm}`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}
