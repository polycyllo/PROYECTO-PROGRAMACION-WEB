export default function RespuestaUsuario({ pregunta, tipopregunta }: any) {
    const cajaRespuesta = pregunta.opciones;
    console.log("holaaa ", pregunta);
    return (
        <div className="caja mx-5 px-5 bg-sky-300 rounded-xl ">
            <div className="mt-8 ">
                <div className="w-full flex">
                    <label className="mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full bg-white mr-4">
                        {pregunta.pregunta}
                    </label>
                </div>
            </div>

            <div className=" pb-5">
                {cajaRespuesta &&
                cajaRespuesta.length > 0 &&
                (tipopregunta === "cuadrado" || tipopregunta === "circulo") ? (
                    cajaRespuesta.map((respuesta: any, index: number) => (
                        <div key={index} className="borde p-4 rounded-2xl flex">
                            <label
                                className={`font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full flex justify-between ${
                                    respuesta.esrespuesta &&
                                    respuesta.esSeleccionada
                                        ? "bg-green-400"
                                        : respuesta.esrespuesta
                                        ? "bg-slate-400"
                                        : respuesta.esSeleccionada
                                        ? "bg-red-400"
                                        : "bg-white"
                                }`}
                            >
                                {respuesta.textoopcion}
                                <p className="font-black mr-10">
                                    {respuesta.esrespuesta &&
                                    !respuesta.esSeleccionada
                                        ? "El Creador definio esta como correcta!"
                                        : respuesta.esrespuesta &&
                                          respuesta.esSeleccionada
                                        ? "El Creador definio esta como correcta! y el usuario marcó esta"
                                        : respuesta.esSeleccionada
                                        ? "El usuario respondio esto!"
                                        : ""}
                                </p>
                            </label>
                        </div>
                    ))
                ) : tipopregunta !== "cuadrado" &&
                  tipopregunta !== "circulo" ? (
                    <label
                        className={`font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full flex justify-between bg-white`}
                    >
                        {pregunta.respuestatexto}
                    </label>
                ) : (
                    <p className="text-center">
                        No hay respuestas disponibles.
                    </p>
                )}
            </div>
        </div>
    );
}
