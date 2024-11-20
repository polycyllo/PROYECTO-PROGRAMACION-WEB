import { boolean, number, object, string, InferOutput, array } from "valibot";


export type FormValues = {
    preguntas: {
        pregunta: string;
        respuestas: {
            respuesta: string;
            esrespuesta: boolean;
        }[];
    }[];
};
export type PreguntaRespuesta = {
    id: number;
    pregunta: string;
    respuesta: string;
};

export type Pregunta = {
    id: number;
    pregunta: string;
    opcion: Respuesta[];
};

export type Respuesta = {
    id:number;
    cadena:string;
    esrespuesta:boolean;
}

export const DraftSchema = object({
    nombreformulario : string(),
    descripcion : string()
})

export const FormularioSchema = object({
    codformulario: number(),
    nombreformulario: string(),
    descripcion: string(),
    activo: boolean()

})



export const FormulariosSchema = array(FormularioSchema)
export type Formulario = InferOutput<typeof FormularioSchema>


const OpcionSchema = object({
    textoopcion: string(),
    esrespuesta: boolean()
});

const PreguntaSchema = object({
    pregunta: string(),
    tipopregunta: string(),
    opciones: array(OpcionSchema),
});

export const FormularioCSchema = object({
    nombreformulario: string(),
    descripcion: string(),
    activo: boolean(),
    preguntas: array(PreguntaSchema)
})
 export type FormularioCompleto = InferOutput<typeof FormularioCSchema>
 export type Opcion = InferOutput<typeof OpcionSchema>
 export type PreguntaS = InferOutput<typeof PreguntaSchema>


