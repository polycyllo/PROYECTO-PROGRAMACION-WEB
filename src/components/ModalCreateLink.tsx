import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { fechaRango } from "../types";
import { createLinkForm } from "../services/FormularioServices";
import { toast } from "react-toastify";
import { useState } from "react";
import { deleteLinkForm, getLinksForm } from "../services/linkServices";
import { format } from "date-fns";
import { es } from "date-fns/locale";
type ModalProps = {
    texto: string;
    codformulario: number;
    close: () => void;
};

export default function ModalCreateLink({
    texto,
    codformulario,
    close,
}: ModalProps) {
    const [showLinks, setShowLinks] = useState(false);
    const [linksData, setLinksData] = useState<any[]>([]);

    const iniValues: fechaRango = {
        fechainicio: "",
        fechafin: "",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: iniValues,
    });

    const createMutation = useMutation({
        mutationFn: createLinkForm,
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success("¡Enlace creado exitosamente!");
            fetchLinks();
            setShowLinks(true);
        },
    });

    const fetchLinks = async (): Promise<any[]> => {
        try {
            const data = await getLinksForm(codformulario);
            setLinksData(data || []);
            return data || [];
        } catch (error: any) {
            toast.error(error.message || "Error al cargar enlaces.");
            return [];
        }
    };

    const deleteMutation = useMutation({
        mutationFn: deleteLinkForm,
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success("¡Enlace eliminado exitosamente!");

            fetchLinks().then((data) => {
                if (data.length === 0) {
                    setLinksData([]);
                }
            });
        },
    });

    function validateDates(
        fechainicio: string,
        fechafin: string
    ): string | null {
        const now = new Date();
        const startDate = new Date(fechainicio);
        const endDate = new Date(fechafin);

        if (isNaN(startDate.getTime())) {
            return "La fecha de inicio no es válida.";
        }

        if (isNaN(endDate.getTime())) {
            return "La fecha de fin no es válida.";
        }

        if (startDate < now) {
            return "La fecha de inicio no puede ser anterior a la fecha actual.";
        }

        if (startDate > endDate) {
            return "La fecha de inicio no puede ser posterior a la fecha de fin.";
        }

        return null;
    }
    const formatFecha = (fechaISO: string) => {
        try {
            return format(new Date(fechaISO), "PPPppp", { locale: es });
        } catch {
            return "Fecha no válida";
        }
    };
    const handleCreateLink = (formData: fechaRango) => {
        const error = validateDates(formData.fechainicio, formData.fechafin);
        if (error) {
            toast.error(error);
            return;
        }
        createMutation.mutate({
            codformulario,
            ...formData,
        });
    };

    const handleDeleteLink = (id: number) => {
        deleteMutation.mutate(id);
    };

    const handleCopyLink = (link: string) => {
        if (!link) {
            toast.error("El enlace está vacío, no se puede copiar.");
            return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(link)
                .then(() => toast.success("¡Enlace copiado al portapapeles!"))
                .catch(() =>
                    toast.error(
                        "Hubo un error al copiar el enlace al portapapeles."
                    )
                );
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = link;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                const success = document.execCommand("copy");
                if (success) {
                    toast.success("¡Enlace copiado al portapapeles!");
                } else {
                    toast.error("Hubo un error al copiar el enlace.");
                }
            } catch (error) {
                console.error("Error al copiar enlace:", error);
                toast.error("No se pudo copiar el enlace.");
            }
            document.body.removeChild(textArea);
        }
    };

    const handleViewLinks = () => {
        setShowLinks(true);
        fetchLinks();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={close}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">{texto}</h2>

                <div className="flex justify-between mb-4">
                    <button
                        className={`px-4 py-2 ${
                            showLinks
                                ? "bg-gray-300 text-black"
                                : "bg-acento text-white"
                        } rounded-md font-bold`}
                        onClick={handleViewLinks}
                    >
                        Ver Links
                    </button>
                    <button
                        className={`px-4 py-2 ${
                            !showLinks
                                ? "bg-gray-300 text-black"
                                : "bg-acento text-white"
                        } rounded-md font-bold`}
                        onClick={() => setShowLinks(false)}
                    >
                        Crear Link
                    </button>
                </div>

                {/* Mostrar links existentes */}
                {showLinks && (
                    <div className="max-h-80 overflow-y-auto border rounded-lg p-4 bg-gray-50">
                        <h3 className="text-lg font-bold mb-2">
                            Enlaces existentes
                        </h3>
                        {linksData.length > 0 ? (
                            <ul className="space-y-4">
                                {linksData.map((link: any) => (
                                    <li
                                        key={link.id}
                                        className="flex justify-between items-center border-b pb-2"
                                    >
                                        <div>
                                            <p className="text-sm text-gray-800">
                                                Link:{" "}
                                                <span
                                                    className="text-blue-500 underline cursor-pointer"
                                                    onClick={() =>
                                                        handleCopyLink(
                                                            link.link
                                                        )
                                                    }
                                                >
                                                    {link.link}
                                                </span>
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Desde:{" "}
                                                {formatFecha(link.fechainicio)}{" "}
                                                - Hasta:{" "}
                                                {formatFecha(link.fechafin)}
                                            </p>
                                        </div>
                                        <button
                                            className="text-red-500 hover:text-red-700 font-bold"
                                            onClick={() =>
                                                handleDeleteLink(
                                                    link.codformulariotoken
                                                )
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">
                                No hay enlaces creados. Crea uno nuevo
                            </p>
                        )}
                    </div>
                )}

                {/* Formulario para crear un nuevo enlace */}
                {!showLinks && (
                    <form
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                        onSubmit={handleSubmit(handleCreateLink)}
                    >
                        <h3 className="text-lg font-bold mb-2">
                            Crear nuevo enlace
                        </h3>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">
                                Fecha de inicio
                            </label>
                            <input
                                type="datetime-local"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-acento"
                                {...register("fechainicio", {
                                    required:
                                        "La fecha de inicio es obligatoria",
                                })}
                            />
                            {errors.fechainicio && (
                                <span className="text-red-400 font-medium ml-2">
                                    {errors.fechainicio.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">
                                Fecha de fin
                            </label>
                            <input
                                type="datetime-local"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-acento"
                                {...register("fechafin", {
                                    required: "La fecha de fin es obligatoria",
                                })}
                            />
                            {errors.fechafin && (
                                <span className="text-red-400 font-medium ml-2">
                                    {errors.fechafin.message}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-acento text-white rounded-md hover:bg-red-600 font-bold"
                            >
                                Crear enlace
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 font-bold"
                                onClick={close}
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
