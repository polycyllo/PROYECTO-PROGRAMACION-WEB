import { object, string } from "valibot";
export type PreguntaRespuesta = {
    id: number;
    pregunta: string;
    respuesta: string;
};

export type Pregunta = {
    id: number;
    pregunta: string;
    respuesta: Respuesta[];
};

export type Respuesta = {
    id:number;
    cadena:string;
}

export const DraftSchema = object({
    nombreformulario : string(),
    descripcion : string()
})