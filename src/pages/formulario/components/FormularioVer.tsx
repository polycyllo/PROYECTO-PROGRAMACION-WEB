
import { FormularioCompleto, PreguntaS } from "../../../types";


import { useEffect, useState } from "react";
import { getFormularioById } from "../../../services/FormularioServices";
import PreguntaVer from "./PreguntaVer";


type CrearFomularioProps = {

    codform: number;
};


export default function FormularioVer({
    codform
}: CrearFomularioProps) {


    const [formulario, setFormulario] = useState<FormularioCompleto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormulario = async () => {
            if (codform) {
                try {
                    const data = await getFormularioById(codform);
                    setFormulario(data);
                } catch (error) {
                    console.error("Error al obtener el formulario:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchFormulario();
    }, [codform]);

    const preguntas = formulario?.preguntas as PreguntaS[]
    return (
        <>
        <section className="pt-24">
            <div className="flex flex-col gap-3 py-5 text-2xl ">
                
                <label
                    id="nombreformulario"
                    className="min-w-96 md:w-1/2  border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-bold"
                >{formulario?.nombreformulario || "fomulario sin nombre"}</label>
                <label
                    id="descripcion"
                    className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-medium"
                >{formulario?.descripcion || "Sin descripcion"}</label>
            </div>

            <div className="flex flex-col justify-center mt-10 space-y-5">

                {preguntas && preguntas.length > 0 ? (preguntas.map((pregunta,index) => (
                    <PreguntaVer key={index} pregunta={pregunta.pregunta} cajaRespuesta={pregunta.opciones || []}/>
                ))):(
                    <p className="text-center">No hay preguntas disponibles.</p>
                )}

            </div>

        </section>
        </>
    );
}
