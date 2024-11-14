import axios from "axios";

import { FormularioCSchema, FormulariosSchema, Pregunta } from "../types";
import {  safeParse } from "valibot";


export async function addFormulario(nombreformulario: string, descripcion: string, preguntas: Pregunta[]) {
    const dataR = {
        nombreformulario: nombreformulario,
        descripcion: descripcion,
        preguntas : preguntas
    };

    const url = 'http://localhost:4000/api/formulario';
        console.log(dataR)
        const response = await axios.post(url, dataR);
        return response.data;
    
}

export async function getNameFormularios() {
    try {
        const url = 'http://localhost:4000/api/formulario';
        const { data } = await axios(url)
        const result = safeParse(FormulariosSchema,data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('hubo un error')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getFormularioById(id : number) {
    try {

        const url = `http://localhost:4000/api/formulario/${id}`;
        const { data }= await axios.get(url)
        const result = safeParse(FormularioCSchema,data.data)
        if(result.success){
            return result.output
        }else{
            console.log("error de byID")
            throw new Error('Hubo un error para obtener un form especifico')
        }
        return data.data
    } catch (error) {
        console.log(error)
    }
}