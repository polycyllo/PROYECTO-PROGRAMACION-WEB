import { ActionFunctionArgs, redirect } from "react-router-dom";
import Formulario from "../../components/Formulario";
import { useListaPreguntas } from "../../hooks/useListaPreguntas";
import { addFormulario } from "../../services/FormularioServices";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = Object.fromEntries(await request.formData());
    console.log(formData);
    const nombreformulario = formData["nombreformulario"] as string;
    const descripcion = formData["descripcion"] as string;

    // Extraer y estructurar las preguntas y respuestas
    const preguntas: any[] = [];
    for (const [key, value] of Object.entries(formData)) {
        const preguntaMatch = key.match(/^preguntas\[(\d+)\]\.pregunta$/);

        if (preguntaMatch) {
            const index = Number(preguntaMatch[1]);
            preguntas[index] = { pregunta: value, opciones: [] };
        }
        const respuestaMatch = key.match(
            /^preguntas\[(\d+)\]\.respuestas\[(\d+)\]\.(respuesta|esrespuesta)$/
        );

        if (respuestaMatch) {
            const [_, preguntaIndex, respuestaIndex, field] = respuestaMatch;

            const pIndex = Number(preguntaIndex);
            const rIndex = Number(respuestaIndex);

            if (!preguntas[pIndex]) {
                preguntas[pIndex] = { pregunta: "", opciones: [] }; // Asegurarse de que la pregunta exista
            }
            if (!preguntas[pIndex].opciones[rIndex]) {
                preguntas[pIndex].opciones[rIndex] = {
                    textoopcion: "",
                    esrespuesta: false,
                };
            }

            if (field === "respuesta") {
                preguntas[pIndex].opciones[rIndex].textoopcion = value;
            } else if (field === "esrespuesta") {
                preguntas[pIndex].opciones[rIndex].esrespuesta =
                    value === "true";
            }
        }
    }

    try {
        await addFormulario(nombreformulario, descripcion, preguntas);
    } catch (error) {
        console.error("Error al enviar formulario:", error);
    }

    return redirect("/FormularioPage");
};

export default function CrearFormularioPage() {
    const { caja, agregarPregunta, eliminarPregunta } = useListaPreguntas();
    return (
        <Formulario
            caja={caja}
            agregarPregunta={agregarPregunta}
            eliminarPregunta={eliminarPregunta}
        />
    );
}
