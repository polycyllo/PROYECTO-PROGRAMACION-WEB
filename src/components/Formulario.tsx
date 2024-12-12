import CajaPregunta from "../components/CajaPregunta";
import AgregarIcon from "../icons/agregar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { addFormulario } from "../services/FormularioServices";
import Modal from "./Modal";
import { toast } from "react-toastify";
type FormData = {
    nombreformulario: string;
    descripcion: string;
    preguntas: {
        pregunta: string;
        tipopregunta: string;
        esrespuesta: number[];
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
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            nombreformulario: "",
            descripcion: "",
            preguntas: [
                {
                    pregunta: "",
                    tipopregunta: "",
                    opciones: [{ textoopcion: "", esrespuesta: false }],
                    esrespuesta: [],
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
            const tamForm = data.preguntas.length;
            if (tamForm == 0) {
                alert("El formulario debe tener al menos una pregunta");
                return;
            }
            const preguntasInvalidas = data.preguntas.filter((pregunta) => {
                if (pregunta.tipopregunta === "circulo") {
                    return pregunta.esrespuesta.length !== 1;
                }
                return false;
            });

            if (preguntasInvalidas.length > 0) {
                alert(
                    "Asegúrate de que todas las preguntas de tipo círculo tengan exactamente una respuesta seleccionada."
                );
                return;
            }

            const datosFormulario = {
                nombreformulario: data.nombreformulario,
                descripcion: data.descripcion,
                preguntas: data.preguntas.map((pregunta) => ({
                    pregunta: pregunta.pregunta,
                    tipopregunta: pregunta.tipopregunta,
                    opciones: pregunta.opciones.map((opcion, opcionIndex) => ({
                        textoopcion: opcion.textoopcion,
                        esrespuesta: pregunta.esrespuesta.includes(opcionIndex),
                    })),
                })),
            };

            //console.log("Datos enviados al backend:", datosFormulario);
            toast.success("Formulario creado Correctamente");
            await addFormulario(
                datosFormulario.nombreformulario,
                datosFormulario.descripcion,
                datosFormulario.preguntas
            );

            navigate("/FormularioPage");
        } catch (error) {
            toast.error("Error al crear formualrio");
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
                            setValue={setValue}
                            eliminarPregunta={() => removePregunta(index)}
                        />
                    ))}

                    <button
                        type="button"
                        className="flex justify-center lg:mx-[450px] mx-4 h-16 border-2 lg:p-1 bg-acento my-4 rounded-2xl text-white font-bold hover:bg-secundario1 hover:text-black"
                        onClick={() =>
                            addPregunta({
                                pregunta: "",
                                tipopregunta: "",
                                esrespuesta: [],
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
                <Modal
                    texto="¿Estás seguro de que quieres cancelar?"
                    textBoton="Sí, cancelar"
                    confirm={confirmCancel}
                    close={closeModal}
                />
            )}
        </>
    );
}
