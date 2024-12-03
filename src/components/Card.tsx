import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";

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
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <section className=" border-4 rounded-2xl border-black w-[300px] h-[400px] flex flex-col overflow-hidden">
                <div className="bg-[#FFA500] w-full h-[150px] border-b-4 border-black flex justify-center items-center">
                    <h1 className="text-center text-white text-2xl font-bold ">
                        {nombreformulario}
                    </h1>
                </div>

                <div className="w-full mt-3 h-[200px] flex flex-col  justify-center">
                    <h1 className="text-center text-xl font-semibold ">
                        {descripcion}
                    </h1>
                    <div className="mt-3 flex justify-center flex-col gap-2 mx-16">
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
                            <button className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white">
                                Compartir
                            </button>
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
        </>
    );
}
