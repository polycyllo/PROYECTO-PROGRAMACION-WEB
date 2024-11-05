import { ActionFunctionArgs, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import { useListaPreguntas } from "../hooks/useListaPreguntas";
import { addFormulario } from "../services/FormularioServices";


export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = Object.fromEntries(await request.formData());

    const nombreformulario = formData["nombreformulario"] as string;
    const descripcion = formData["descripcion"] as string;

    // Extraer y estructurar las preguntas y respuestas
    const preguntas: any[] = [];
    for (const [key, value] of Object.entries(formData)) {
        const preguntaMatch = key.match(/^preguntas\[(\d+)\]\.pregunta$/);
        const respuestaMatch = key.match(/^preguntas\[(\d+)\]\.respuestas\[(\d+)\]\.respuesta$/);

        if (preguntaMatch) {
            const index = Number(preguntaMatch[1]);
            preguntas[index] = { pregunta: value, opciones: [] };
        } else if (respuestaMatch) {
            const [_, preguntaIndex, respuestaIndex] = respuestaMatch.map(Number);
            if (preguntas[preguntaIndex]) {
                preguntas[preguntaIndex].opciones[respuestaIndex] = { textoopcion: value };
            }
        }
    }

    // Llamar a la función `addFormulario` con todos los datos
    try {
        await addFormulario(nombreformulario, descripcion, preguntas);
    } catch (error) {
        console.error("Error al enviar formulario:", error);
    }

    return redirect('/FormularioPage');
};


export default function CrearFormularioPage() {
    //const error = useActionData()
    
    const { caja, agregarPregunta, eliminarPregunta} = useListaPreguntas()
    return (

        <Formulario
            caja={caja}
            agregarPregunta={agregarPregunta}
            eliminarPregunta={eliminarPregunta}
        />
    );
}
