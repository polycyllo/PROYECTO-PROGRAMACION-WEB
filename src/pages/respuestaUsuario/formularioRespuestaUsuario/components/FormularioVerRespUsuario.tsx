import { useEffect, useState } from "react";
import { PreguntaS } from "../../../../types";
import { getFormularioRespondidoByToken } from "../../../../services/respuestaUsuarioServices";
import RespuestaUsuario from "./RespuestaUsuario";
type FormularioVerRespProps = {
    token: string | any;
};
export default function FormularioVerRespUsuario({
    token,
}: FormularioVerRespProps) {
    const [formulario, setFormulario] = useState<any | null> as any;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormulario = async () => {
            if (token) {
                try {
                    const data = await getFormularioRespondidoByToken(token);
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
    }, [token]);

    if (loading) {
        return <div>Cargando...</div>;
    }
    const preguntas = formulario?.resultados as PreguntaS[];
    return (
        <>
            <section className="pt-24">
                <div className="flex flex-col gap-3 py-5 text-2xl">
                    <label
                        id="nombreformulario"
                        className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-bold"
                    >
                        {formulario?.nombreformulario ||
                            "Formulario sin nombre"}
                    </label>
                    <label
                        id="descripcion"
                        className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-medium"
                    >
                        {formulario?.descripcion || "Sin descripción"}
                    </label>
                </div>

                <div className="flex flex-wrap">
                    <label
                        id="correoDe"
                        className=" md:ml-10 rounded-lg focus:outline-none p-2 font-medium"
                    >
                        Respondido por:{" "}
                        {formulario?.correoelectronico ||
                            "Erro al mostrar el correo"}
                    </label>
                    <label
                        id="fecha"
                        className="rounded-lg focus:outline-none p-2 font-medium"
                    >
                        Fecha de llenado:{" "}
                        {formulario?.fecharespuesta &&
                        !isNaN(new Date(formulario.fecharespuesta).getTime())
                            ? new Date(
                                  formulario.fecharespuesta
                              ).toLocaleString()
                            : "Error en la fecha"}
                    </label>
                </div>

                <div className="flex flex-col justify-center mt-10 space-y-5">
                    {preguntas && preguntas.length > 0 ? (
                        preguntas.map((pregunta, index) => (
                            <RespuestaUsuario
                                key={index}
                                pregunta={pregunta}
                                tipopregunta={pregunta.tipopregunta}
                            />
                        ))
                    ) : (
                        <p className="text-center">
                            No hay preguntas disponibles.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}
