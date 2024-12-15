import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRespuestasPorRango } from "../../services/respuestaUsuarioServices";

type Respuesta = {
    codformulariorespondido: number;
    codusuario: number;
    fecharespuesta: string;
    correoelectronico: string;
    tokenformulariousuario: string;
};

type RangoRespuestas = {
    fechainicio: string;
    fechafin: string;
    respuestas: Respuesta[];
};

export default function RespuestaUsuario() {
    const { codformulario } = useParams<{ codformulario: string }>();
    const [rangoRespuestas, setRangoRespuestas] = useState<RangoRespuestas[]>(
        []
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchRespuestas = async () => {
            try {
                if (!codformulario) {
                    throw new Error("Código de formulario no proporcionado");
                }

                const data = await getRespuestasPorRango(Number(codformulario));
                if (!data || data.length === 0) {
                    setRangoRespuestas([]);
                    setError(
                        "No hay rangos de fechas o respuestas disponibles."
                    );
                    return;
                }

                setRangoRespuestas(data);
                setError(null);
            } catch (error) {
                console.error("Error al obtener respuestas:", error);
                setError("Hubo un error al cargar las respuestas.");
            } finally {
                setLoading(false);
            }
        };

        fetchRespuestas();
    }, [codformulario]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold">Cargando respuestas...</p>
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

    const verRespuestasDeUsuario = (tokenform: string) => {
        navigate(`/formularioRespondido/${tokenform}`);
    };
    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-3xl font-bold text-center mb-6">
                Respuestas por Rango de Fechas
            </h1>
            {rangoRespuestas.length === 0 ? (
                <p className="text-center text-gray-500">
                    No hay respuestas disponibles para este formulario.
                </p>
            ) : (
                rangoRespuestas.map((rango, index) => (
                    <div
                        key={index}
                        className="mb-8 p-4 bg-gray-50 shadow-md rounded-lg"
                    >
                        <h2 className="text-xl font-semibold mb-4">
                            Rango de Respuestas:{" "}
                            <span className="text-blue-600">
                                {new Date(rango.fechainicio).toLocaleString()} -{" "}
                                {new Date(rango.fechafin).toLocaleString()}
                            </span>
                        </h2>
                        {rango.respuestas.length > 0 ? (
                            <ul className="space-y-4">
                                {rango.respuestas.map((respuesta) => (
                                    <li
                                        onClick={() =>
                                            verRespuestasDeUsuario(
                                                respuesta.tokenformulariousuario
                                            )
                                        }
                                        key={respuesta.codformulariorespondido}
                                        className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <p className="text-lg">
                                            <span className="font-bold">
                                                Correo:
                                            </span>{" "}
                                            {respuesta.correoelectronico ||
                                                "N/A"}
                                        </p>
                                        <p className="text-lg">
                                            <span className="font-bold">
                                                Fecha de Respuesta:
                                            </span>{" "}
                                            {respuesta.fecharespuesta
                                                ? new Date(
                                                      respuesta.fecharespuesta
                                                  ).toLocaleString()
                                                : "No registrada"}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">
                                No hay respuestas en este rango de fechas.
                            </p>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
