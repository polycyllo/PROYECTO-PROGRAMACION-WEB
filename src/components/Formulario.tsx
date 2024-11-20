import CajaPregunta from "../components/CajaPregunta";
import AgregarIcon from "../icons/agregar";
import { Pregunta } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addFormulario } from "../services/FormularioServices";

type CrearFomularioProps = {
    caja: Pregunta[];
    agregarPregunta: () => void;
    eliminarPregunta: (id: Pregunta["id"]) => void;
};

export default function Formulario({
    caja,
    agregarPregunta,
    eliminarPregunta,
}: CrearFomularioProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const confirmCancel = () => {
        setIsModalVisible(false);
        navigate("/FormularioPage");
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleGuardarClick = async () => {
        const formElement = document.querySelector("form");
        if (formElement) {
            const formData = new FormData(formElement);
            const formObject = Object.fromEntries(formData.entries());

            const nombreformulario = formObject["nombreformulario"] as string;
            const descripcion = formObject["descripcion"] as string;

            const preguntas: any[] = [];
            for (const [key, value] of Object.entries(formObject)) {
                const preguntaMatch = key.match(
                    /^preguntas\[(\d+)\]\.pregunta$/
                );

                if (preguntaMatch) {
                    const index = Number(preguntaMatch[1]);
                    preguntas[index] = { pregunta: value, opciones: [] };
                }
                const respuestaMatch = key.match(
                    /^preguntas\[(\d+)\]\.respuestas\[(\d+)\]\.(respuesta|esrespuesta)$/
                );

                if (respuestaMatch) {
                    const [_, preguntaIndex, respuestaIndex, field] =
                        respuestaMatch;

                    const pIndex = Number(preguntaIndex);
                    const rIndex = Number(respuestaIndex);

                    if (!preguntas[pIndex]) {
                        preguntas[pIndex] = { pregunta: "", opciones: [] };
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
                navigate("/FormularioPage");
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
            }
        }
    };

    return (
        <>
            <form className="pt-24" onSubmit={handleSubmit(handleGuardarClick)}>
                <div className="flex flex-col gap-3 py-5 text-2xl ">
                    <input
                        id="nombreformulario"
                        type="text"
                        {...register("nombreformulario", {
                            required: "Este campo es obligatorio",
                        })}
                        className={`min-w-96 md:w-1/2 border ${
                            errors.nombreformulario
                                ? "border-red-600"
                                : "border-gray-600"
                        } mx-auto rounded-lg focus:outline-none p-2 font-bold`}
                        placeholder="Ingrese nombre del formulario"
                    />
                    {errors.nombreformulario && (
                        <span className="text-red-600 text-center">
                            {errors.nombreformulario.message as string}
                        </span>
                    )}
                    <input
                        id="descripcion"
                        type="text"
                        {...register("descripcion", {
                            required: "Este campo es obligatorio",
                        })}
                        className={`min-w-96 md:w-1/2 border ${
                            errors.descripcion
                                ? "border-red-600"
                                : "border-gray-600"
                        } mx-auto rounded-lg focus:outline-none p-2 font-medium`}
                        placeholder="Ingresar descripcion Formulario"
                    ></input>
                    {errors.descripcion && (
                        <span className="text-red-600 text-center">
                            {errors.descripcion.message as string}
                        </span>
                    )}
                </div>

                <div className="flex flex-col justify-center mt-10 space-y-5">
                    {caja.map((pregunta, index) => (
                        <CajaPregunta
                            key={pregunta.id}
                            pregunta={pregunta}
                            eliminarPregunta={eliminarPregunta}
                            preguntaIndex={index}
                        />
                    ))}
                    <button
                        type="button"
                        className="flex justify-center lg:mx-[450px]
                                mx-4
                                h-16
                                border-2 lg:p-1 
                                bg-acento my-4 
                                rounded-2xl 
                                text-white 
                                font-bold
                                hover:bg-secundario1 
                                hover:text-black"
                        onClick={() => agregarPregunta()}
                    >
                        <AgregarIcon />
                    </button>
                </div>

                <div className=" flex flex-col md:flex-row justify-center  md:gap-10">
                    <button
                        type="submit"
                        className=" border-2 p-3 
                        text-2xl
                        bg-acento my-4 
                        rounded-2xl 
                        text-white 
                        mx-4
                        font-bold
                      hover:bg-white
                      hover:text-black
                      hover: border-secundario1"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className=" border-2 p-3 
                            text-2xl
                            bg-acento md:my-4 
                            rounded-2xl 
                            text-white 
                            mx-4
                            font-bold
                            hover:bg-white
                            hover:text-black
                            hover: border-secundario1"
                        onClick={openModal}
                    >
                        Cancelar
                    </button>
                </div>
            </form>

            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold mb-4">
                            ¿Estás seguro de que quieres cancelar?
                        </h2>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-acento text-white rounded-md hover:bg-red-600 font-bold"
                                onClick={confirmCancel}
                            >
                                Sí, cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 font-bold"
                                onClick={closeModal}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
