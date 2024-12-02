import {
    Control,
    FieldErrors,
    UseFormRegister,
    useFieldArray,
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
            opciones: {
                textoopcion: string;
                esrespuesta: boolean;
            }[];
        }[];
    }>;
    preguntaIndex: number;
    eliminarPregunta: () => void;
};

export default function CajaPregunta({
    control,
    register,
    errors,
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

    return (
        <div className="caja mx-5 px-5 bg-[#00AFFF] rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className="w-full">
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
                    <button
                        type="button"
                        className="border-2 p-[2.5px] bg-acento my-2 rounded-2xl text-white"
                        onClick={() =>
                            append({ textoopcion: "", esrespuesta: false })
                        }
                    >
                        <EditarIcon />
                    </button>
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
                                        required: "La respuesta es obligatorio",
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
                                <input
                                    type="radio"
                                    {...register(
                                        `preguntas[${preguntaIndex}].opciones[${opcionIndex}].esrespuesta`
                                    )}
                                    value="true"
                                    className="appearance-none h-6 w-6 border-4 border-black rounded-full checked:bg-white focus:outline-none"
                                />
                            </label>

                            <button
                                type="button"
                                className="flex justify-center border-black p-2 bg-acento ml-3 rounded-lg text-white font-bold h-10 hover:bg-secundario1 hover:text-black "
                                onClick={() => remove(opcionIndex)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
