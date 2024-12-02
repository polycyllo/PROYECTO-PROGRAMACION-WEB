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

export const FormularioSchema = object({
    codformulario: number(),
    nombreformulario: string(),
    descripcion: string(),
    activo: boolean(),
});

export const FormulariosSchema = array(FormularioSchema);
export type Formulario = InferOutput<typeof FormularioSchema>;

const OpcionSchema = object({
    textoopcion: string(),
    esrespuesta: boolean(),
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
    preguntas: array(PreguntaSchema),
});
export type FormularioCompleto = InferOutput<typeof FormularioCSchema>;
export type Opcion = InferOutput<typeof OpcionSchema>;
export type PreguntaS = InferOutput<typeof PreguntaSchema>;

export const authSchema = object({
    nombre: string(),
    apellido: string(),
    correoelectronico: string(),
    contrasenia: string(),
    contrasenia_confirmada: string(),
    token: string(),
});

export type Auth = InferOutput<typeof authSchema>;
export type ConfirmToken = Pick<Auth, "token">;
export type UsuarioLogin = Pick<Auth, "correoelectronico" | "contrasenia">;
export type UsuarioRegistrationForm = Pick<
    Auth,
    | "nombre"
    | "apellido"
    | "correoelectronico"
    | "contrasenia"
    | "contrasenia_confirmada"
>;
export type RequestConfirmation = Pick<Auth, "correoelectronico">;

export const userSchema = Object({
    codusuario: number(),
    nombre: string(),
    apellido: string(),
    correoelectronico: string(),
});
export type Usuario = InferOutput<typeof userSchema>;
