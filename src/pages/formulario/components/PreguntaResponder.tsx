import { useState } from "react";

type PreguntaResponderProps = {
    pregunta: string;
    opciones: any;
    tipopregunta: string;
    onChange: (respuestaSeleccionada: number[] | number | string) => void;
};

export default function PreguntaResponder({
    pregunta,
    opciones,
    tipopregunta,
    onChange,
}: PreguntaResponderProps) {
    const [seleccionadas, setSeleccionadas] = useState<number[]>([]);
    const [textoRespuesta, setTextoRespuesta] = useState<string>("");
    const handleCirculoChange = (id: number) => {
        setSeleccionadas([id]);
        onChange(id);
    };

    const handleCuadradoChange = (id: number) => {
        let nuevasSeleccionadas = [...seleccionadas];
        if (seleccionadas.includes(id)) {
            nuevasSeleccionadas = nuevasSeleccionadas.filter(
                (item) => item !== id
            );
        } else {
            nuevasSeleccionadas.push(id);
        }
        setSeleccionadas(nuevasSeleccionadas);
        onChange(nuevasSeleccionadas);
    };

    const handleTextoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;

        if (tipopregunta === "texto" && /[^a-zA-Z\s]/.test(valor)) {
            return;
        }

        if (tipopregunta === "numeros" && /[^0-9]/.test(valor)) {
            return;
        }

        setTextoRespuesta(valor);
        onChange(valor);
    };
    return (
        <div className="caja mx-5 px-5 bg-sky-300 rounded-xl">
            <div className="mt-8">
                <div className="w-full flex">
                    <label className="mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full bg-white mr-4">
                        {pregunta}
                    </label>
                </div>
            </div>
            <div className="pb-5">
                {tipopregunta === "circulo" || tipopregunta === "cuadrado" ? (
                    opciones && opciones.length > 0 ? (
                        opciones.map((opcion: any) => (
                            <div
                                key={opcion.codrespuesta}
                                className="borde p-4 rounded-2xl flex items-center"
                            >
                                <input
                                    type={
                                        tipopregunta === "circulo"
                                            ? "radio"
                                            : "checkbox"
                                    }
                                    name={
                                        tipopregunta === "circulo"
                                            ? `pregunta-${pregunta}`
                                            : undefined
                                    }
                                    value={opcion.codrespuesta}
                                    checked={seleccionadas.includes(
                                        opcion.codrespuesta
                                    )}
                                    onChange={() =>
                                        tipopregunta === "circulo"
                                            ? handleCirculoChange(
                                                  opcion.codrespuesta
                                              )
                                            : handleCuadradoChange(
                                                  opcion.codrespuesta
                                              )
                                    }
                                    className="w-6 h-6"
                                />
                                <label className="font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full ml-3 bg-white">
                                    {opcion.textoopcion}
                                </label>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">
                            No hay respuestas disponibles.
                        </p>
                    )
                ) : (
                    <div>
                        <input
                            type="text"
                            value={textoRespuesta}
                            onChange={handleTextoChange}
                            className="font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full"
                            placeholder={
                                tipopregunta === "solotexto"
                                    ? "Ingrese solo texto"
                                    : tipopregunta === "numeros"
                                    ? "Ingrese solo números"
                                    : "Ingrese su respuesta"
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
