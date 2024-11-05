import axios from "axios";

import { Pregunta } from "../types";


export async function addFormulario(nombreformulario: string, descripcion: string, preguntas: Pregunta[]) {
    const dataR = {
        nombreformulario: nombreformulario,
        descripcion: descripcion,
        preguntas : preguntas
    };

    const url = 'http://localhost:4000/api/formulario';
   
        const response = await axios.post(url, dataR);
        return response.data;
    
}