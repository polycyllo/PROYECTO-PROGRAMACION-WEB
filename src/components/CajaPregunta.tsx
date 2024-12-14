import {
    Control,
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
    useFieldArray,
    useWatch,
} from "react-hook-form";
import CerrarIcon from "../icons/cerrar";
import EditarIcon from "../icons/editar";
import ErrorMessage from "./ErrorMessage";

type PreguntaProps = {
    control: Control<any>;
    register: UseFormRegister<any>;
    errors: FieldErrors<{
        preguntas: {
            pregunta: string;
            tipopregunta: string;
            esrespuesta: number[];
            opciones: {
                textoopcion: string;
                esrespuesta: boolean;
            }[];
        }[];
    }>;
    setValue: UseFormSetValue<any>;
    preguntaIndex: number;
    eliminarPregunta: () => void;
};

export default function CajaPregunta({
    control,
    register,
    errors,
    setValue,
    preguntaIndex,
    eliminarPregunta,
}: PreguntaProps) {
    const {
        fields: opciones,
        append,
        remove,
    } = useFieldArray({
        control,
        name: `preguntas[${preguntaIndex}].opciones`,
    });
    const tipopregunta = useWatch({
        control,
        name: `preguntas[${preguntaIndex}].tipopregunta`,
    });
    const esrespuesta =
        useWatch({
            control,
            name: `preguntas[${preguntaIndex}].esrespuesta`,
        }) || [];

    const toggleRespuesta = (opcionIndex: number) => {
        if (tipopregunta === "circulo") {
            setValue(`preguntas[${preguntaIndex}].esrespuesta`, [opcionIndex]);
        } else if (tipopregunta === "cuadrado") {
            const nuevaRespuesta = esrespuesta.includes(opcionIndex)
                ? esrespuesta.filter((index: number) => index !== opcionIndex)
                : [...esrespuesta, opcionIndex];
            setValue(`preguntas[${preguntaIndex}].esrespuesta`, nuevaRespuesta);
        }
    };
    return (
        <div className="caja mx-5 px-5 bg-[#00AFFF] rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className="w-full ">
                    <div></div>
                    <div className="flex flex-col md:flex-row items-center gap-3 mt-3">
                        <label className="font-bold text-xl">
                            Seleccione tipo de pregunta:
                        </label>
                        <select
                            {...register(
                                `preguntas[${preguntaIndex}].tipopregunta`,
                                {
                                    required:
                                        "El tipo de pregunta es obligatorio",
                                }
                            )}
                            className="border border-gray-300 rounded-xl px-3 py-1 focus:outline-none mb-1"
                        >
                            <option value="">Seleccione</option>
                            <option value="circulo">Una respuesta</option>
                            <option value="cuadrado">
                                Múltiples respuestas
                            </option>
                            <option value="texto">Solo texto</option>
                            <option value="numeros">Solo numeros</option>
                            <option value="textoLibre">Texto libre</option>
                        </select>
                        {errors.preguntas?.[preguntaIndex]?.tipopregunta && (
                            <ErrorMessage>
                                {
                                    errors.preguntas[preguntaIndex]
                                        ?.tipopregunta?.message
                                }
                            </ErrorMessage>
                        )}
                    </div>
                    {/* Input para la pregunta */}
                    <input
                        {...register(`preguntas[${preguntaIndex}].pregunta`, {
                            required: "La pregunta es obligatoria",
                        })}
                        className={`mb-2 font-bold text-1xl border ${
                            errors.preguntas?.[preguntaIndex]?.pregunta
                                ? "border-red-600"
                                : "border-gray-300"
                        } rounded-xl py-2 pl-4 w-full`}
                        placeholder="Ingrese la pregunta"
                    />
                    {errors.preguntas?.[preguntaIndex]?.pregunta && (
                        <ErrorMessage>
                            {errors.preguntas[preguntaIndex]?.pregunta?.message}
                        </ErrorMessage>
                    )}
                </div>

                <div className="flex flex-row ml-3 mt-10 gap-1">
                    {/* Botón para agregar opciones */}
                    {(tipopregunta === "circulo" ||
                        tipopregunta === "cuadrado") && (
                        <button
                            type="button"
                            className="border-2 p-[2.5px] bg-acento my-2 rounded-2xl text-white"
                            onClick={() =>
                                append({ textoopcion: "", esrespuesta: false })
                            }
                        >
                            <EditarIcon />
                        </button>
                    )}
                    {/* Botón para eliminar la pregunta */}
                    <button
                        type="button"
                        className="border-2 p-[2.5px] bg-acento my-2 rounded-2xl text-white"
                        onClick={eliminarPregunta}
                    >
                        <CerrarIcon />
                    </button>
                </div>
            </div>

            {/* Lista de opciones */}
            <div className="pb-5">
                {opciones.map((opcion, opcionIndex) => (
                    <div
                        key={opcion.id}
                        className="borde p-4 rounded-2xl flex w-full"
                    >
                        {/* Input para el texto de la opción */}
                        <div className="w-full">
                            <input
                                {...register(
                                    `preguntas[${preguntaIndex}].opciones[${opcionIndex}].textoopcion`,
                                    {
                                        validate: (value) => {
                                            if (
                                                tipopregunta === "circulo" ||
                                                tipopregunta === "cuadrado"
                                            ) {
                                                return (
                                                    value.trim() !== "" ||
                                                    "La respuesta es obligatoria"
                                                );
                                            }
                                            return true;
                                        },
                                    }
                                )}
                                className={`font-semibold text-1xl border ${
                                    errors.preguntas?.[preguntaIndex]
                                        ?.opciones?.[opcionIndex]?.textoopcion
                                        ? "border-red-600"
                                        : "border-gray-300"
                                } rounded-xl py-2 pl-4 w-full`}
                                placeholder="Ingrese la respueta"
                            />
                            {errors.preguntas?.[preguntaIndex]?.opciones?.[
                                opcionIndex
                            ]?.textoopcion && (
                                <ErrorMessage>
                                    {
                                        errors.preguntas?.[preguntaIndex]
                                            ?.opciones?.[opcionIndex]
                                            ?.textoopcion?.message
                                    }
                                </ErrorMessage>
                            )}
                        </div>

                        <div className="flex items-start">
                            <label className="ml-4 flex items-center gap-2 mt-2">
                                {(tipopregunta === "circulo" ||
                                    tipopregunta === "cuadrado") && (
                                    <input
                                        type={
                                            tipopregunta === "circulo"
                                                ? "radio"
                                                : "checkbox"
                                        }
                                        checked={esrespuesta.includes(
                                            opcionIndex
                                        )}
                                        onChange={() =>
                                            toggleRespuesta(opcionIndex)
                                        }
                                        className={`appearance-none h-6 w-6 border-4 ${
                                            tipopregunta === "circulo"
                                                ? "rounded-full"
                                                : "rounded-md"
                                        } border-black checked:bg-white focus:outline-none`}
                                    />
                                )}
                            </label>

                            {(tipopregunta === "circulo" ||
                                tipopregunta === "cuadrado") && (
                                <button
                                    type="button"
                                    className="flex justify-center border-black p-2 bg-acento ml-3 rounded-lg text-white font-bold h-10 hover:bg-secundario1 hover:text-black "
                                    onClick={() => {
                                        if (opciones.length > 1) {
                                            remove(opcionIndex);
                                        } else {
                                            alert(
                                                "Cada pregunta debe tener al menos una opción."
                                            );
                                        }
                                    }}
                                >
                                    X
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
