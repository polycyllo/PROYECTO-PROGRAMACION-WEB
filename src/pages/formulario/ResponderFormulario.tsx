import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PreguntaResponder from "./components/PreguntaResponder";
import { FormularioCompleto } from "../../types";
import { getFormularioByToken } from "../../services/linkServices";
import { enviarRespuestas } from "../../services/linkServices";
import { useAuth } from "../../hooks/useAuth";

export default function ResponderFormulario() {
    const [showModal, setShowModal] = useState(false);
    const { token } = useParams<{ token: string }>();
    const [formulario, setFormulario] =
        useState<FormularioCompleto | null> as any;
    const [respuestas, setRespuestas] = useState<{
        [key: number]: {
            respuestasSeleccionadas?: number[]; // Opciones seleccionadas
            respuestatexto?: string; // Respuesta de texto
        };
    }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFormulario = async () => {
            try {
                if (!token) {
                    throw new Error("Token no proporcionado");
                }
                const data = await getFormularioByToken(token);

                const now = new Date();
                const fechaini = new Date(data.fechainicio);
                const fechafin = new Date(data.fechafin);
                if (now < fechaini) {
                    setError("Este formulario aún no está disponible.");
                    return;
                }
                if (now > fechafin) {
                    setError("Este formulario ya no está disponible.");
                    return;
                }
                setFormulario(data);
            } catch (error) {
                setError(
                    "Hubo un error al cargar el formulario. Intente nuevamente más tarde."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchFormulario();
    }, [token]);
    const navigate = useNavigate();
    const handleRespuestaChange = (
        codpregunta: number,
        respuestaSeleccionada: number[] | number | string
    ) => {
        setRespuestas((prev) => ({
            ...prev,
            [codpregunta]:
                typeof respuestaSeleccionada === "string"
                    ? { respuestatexto: respuestaSeleccionada } // Solo guarda texto
                    : {
                          respuestasSeleccionadas: Array.isArray(
                              respuestaSeleccionada
                          )
                              ? respuestaSeleccionada
                              : [respuestaSeleccionada],
                      }, // Guarda opciones seleccionadas
        }));
    };
    const currentUser = useAuth() as any;
    const handleSubmit = async () => {
        if (!currentUser) {
            alert("Usuario no autenticado.");
            return;
        }
        if (!formulario) return;

        const formattedRespuestas = Object.keys(respuestas).map(
            (codpregunta) => {
                const respuesta = respuestas[Number(codpregunta)];
                return {
                    codpregunta: Number(codpregunta),
                    respuestasSeleccionadas:
                        respuesta.respuestasSeleccionadas || [],
                    respuestatexto: respuesta.respuestatexto || null,
                };
            }
        );

        const ans = {
            codusuario: currentUser.data.codusuario,
            respuestas: formattedRespuestas,
        };
        console.log(ans);
        try {
            await enviarRespuestas(token || "", ans);
            setShowModal(true);
        } catch (error) {
            console.error("Error al enviar las respuestas:", error);
            alert("Hubo un error al enviar las respuestas.");
        }
    };

    const close = () => {
        navigate("/");
    };
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold">Cargando formulario...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold text-red-500">{error}</p>
            </div>
        );
    }

    if (!formulario) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold text-red-500">
                    Formulario no encontrado o ya no está disponible.
                </p>
            </div>
        );
    }

    const preguntas = formulario.preguntas as any;

    return (
        <>
            <section className="pt-24">
                <div className="flex flex-col gap-3 py-5 text-2xl">
                    <label
                        id="nombreformulario"
                        className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-bold"
                    >
                        {formulario.nombreformulario || "Formulario sin nombre"}
                    </label>
                    <label
                        id="descripcion"
                        className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-medium"
                    >
                        {formulario.descripcion || "Sin descripción"}
                    </label>
                </div>

                <div className="flex flex-col justify-center mt-10 space-y-5">
                    {preguntas && preguntas.length > 0 ? (
                        preguntas.map((pregunta: any, index: any) => (
                            <PreguntaResponder
                                key={index}
                                pregunta={pregunta.pregunta}
                                opciones={pregunta.opciones || []}
                                tipopregunta={pregunta.tipopregunta}
                                onChange={(respuesta) =>
                                    handleRespuestaChange(
                                        pregunta.codpregunta,
                                        respuesta
                                    )
                                }
                            />
                        ))
                    ) : (
                        <p className="text-center">
                            No hay preguntas disponibles.
                        </p>
                    )}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        className="px-6 py-3 bg-acento text-white rounded-lg hover:bg-red-700 font-bold"
                        onClick={handleSubmit}
                    >
                        Enviar Respuestas
                    </button>
                </div>
            </section>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            LLenaste el formulario!
                        </h2>
                        <div className="flex justify-center space-x-4">
                            <button
                                className="px-4 py-2 bg-acento text-white rounded-md hover:bg-red-600 font-bold"
                                onClick={close}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
