import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import ModalCreateLink from "./ModalCreateLink";
import { useDeleteForm } from "../hooks/useDeleteForm";
type CardProps = {
    codformulario: number;
    nombreformulario: string;
    descripcion: string;
    text: string;
    mode: string;
};

export default function Card({
    codformulario,
    nombreformulario,
    descripcion,
    text,
    mode = "",
}: CardProps) {
    const navigate = useNavigate();
    const handleR = () => {
        navigate("/VerFormulario", { state: { codformulario: codformulario } });
    };

    const { mutate } = useDeleteForm();
    const confirmDelete = () => {
        setShowModal(false);
        mutate(codformulario);
    };
    const [showModal, setShowModal] = useState(false);
    const [showCreateLink, setShowCreateLink] = useState(false);
    setShowCreateLink;
    const closeModal = () => {
        setShowModal(false);
    };
    const closeModalLink = () => {
        setShowCreateLink(false);
    };
    return (
        <>
            <section className="border-4 rounded-2xl border-black w-[320px] min-h-[500px] flex flex-col overflow-hidden">
                <div className="bg-[#FFA500] w-full h-[150px] border-b-4 border-black flex justify-center items-center">
                    <h1 className="text-center text-white text-2xl font-bold ">
                        {nombreformulario}
                    </h1>
                </div>

                <div className="w-full mt-3 flex flex-col justify-start items-center px-4 py-8">
                    <h1 className="text-center text-xl font-semibold limit-lines">
                        {descripcion}
                    </h1>
                    <div className="mt-3 flex flex-col gap-2 w-full">
                        <button
                            className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white"
                            onClick={() => handleR()}
                        >
                            {text}
                        </button>
                        {mode === "modificar" && (
                            <button
                                className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white"
                                onClick={() => setShowModal(true)}
                            >
                                Eliminar
                            </button>
                        )}
                        {mode === "compartir" && (
                            <>
                                <button
                                    className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white"
                                    onClick={() => setShowCreateLink(true)}
                                >
                                    Compartir
                                </button>
                                <button
                                    className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white"
                                    onClick={() =>
                                        navigate(
                                            `/verRespuestasUsuarios/${codformulario}`
                                        )
                                    }
                                >
                                    Ver Respuestas de usuarios
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {showModal && (
                <Modal
                    texto={`¿Estás seguro de que quieres eliminar el formulario: ${nombreformulario}?`}
                    textBoton="Si, eliminar"
                    confirm={confirmDelete}
                    close={closeModal}
                />
            )}

            {showCreateLink && (
                <ModalCreateLink
                    texto="Establece el rango de fechas"
                    codformulario={codformulario}
                    close={closeModalLink}
                />
            )}
        </>
    );
}
