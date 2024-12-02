import CajaPregunta from "../components/CajaPregunta";
import AgregarIcon from "../icons/agregar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { addFormulario } from "../services/FormularioServices";

type FormData = {
    nombreformulario: string;
    descripcion: string;
    preguntas: {
        pregunta: string;
        opciones: {
            textoopcion: string;
            esrespuesta: boolean;
        }[];
    }[];
};

export default function Formulario() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            nombreformulario: "",
            descripcion: "",
            preguntas: [
                {
                    pregunta: "",
                    opciones: [{ textoopcion: "", esrespuesta: false }],
                },
            ],
        },
    });

    const {
        fields: preguntas,
        append: addPregunta,
        remove: removePregunta,
    } = useFieldArray({
        control,
        name: "preguntas",
    });
    const confirmCancel = () => {
        setIsModalVisible(false);
        navigate("/FormularioPage");
    };
    const onSubmit = async (data: FormData) => {
        try {
            console.log("Datos del formulario:", data);

            const datosFormulario = {
                nombreformulario: data.nombreformulario,
                descripcion: data.descripcion,
                preguntas: data.preguntas.map((pregunta) => ({
                    pregunta: pregunta.pregunta,
                    opciones: pregunta.opciones.map((opcion) => ({
                        textoopcion: opcion.textoopcion,
                        esrespuesta: opcion.esrespuesta,
                    })),
                })),
            };

            console.log("Datos enviados al backend:", datosFormulario);

            await addFormulario(
                datosFormulario.nombreformulario,
                datosFormulario.descripcion,
                datosFormulario.preguntas
            );

            navigate("/FormularioPage");
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <>
            <form className="pt-24" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 py-5 text-2xl">
                    <input
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
                            {errors.nombreformulario.message}
                        </span>
                    )}

                    <input
                        type="text"
                        {...register("descripcion", {
                            required: "Este campo es obligatorio",
                        })}
                        className={`min-w-96 md:w-1/2 border ${
                            errors.descripcion
                                ? "border-red-600"
                                : "border-gray-600"
                        } mx-auto rounded-lg focus:outline-none p-2 font-medium`}
                        placeholder="Ingresar descripción del formulario"
                    />
                    {errors.descripcion && (
                        <span className="text-red-600 text-center">
                            {errors.descripcion.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col justify-center mt-10 space-y-5">
                    {preguntas.map((pregunta, index) => (
                        <CajaPregunta
                            key={pregunta.id}
                            control={control}
                            register={register}
                            errors={errors}
                            preguntaIndex={index}
                            eliminarPregunta={() => removePregunta(index)}
                        />
                    ))}

                    <button
                        type="button"
                        className="flex justify-center lg:mx-[450px] mx-4 h-16 border-2 lg:p-1 bg-acento my-4 rounded-2xl text-white font-bold hover:bg-secundario1 hover:text-black"
                        onClick={() =>
                            addPregunta({
                                pregunta: "",
                                opciones: [
                                    { textoopcion: "", esrespuesta: false },
                                ],
                            })
                        }
                    >
                        <AgregarIcon />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:gap-10">
                    <button
                        type="submit"
                        className="border-2 p-3 text-2xl bg-acento my-4 rounded-2xl text-white mx-4 font-bold hover:bg-white hover:text-black"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className="border-2 p-3 text-2xl bg-acento my-4 rounded-2xl text-white mx-4 font-bold hover:bg-white hover:text-black"
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
