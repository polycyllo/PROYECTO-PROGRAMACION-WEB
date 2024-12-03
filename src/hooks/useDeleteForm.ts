import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteForm } from "../services/FormularioServices";
import { toast } from "react-toastify";

export const useDeleteForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteForm,
        onError: (error: any) => {
            toast.error(error.message || "Error al eliminar el formulario");
        },
        onSuccess: (data) => {
            toast.success(data.message || "Formulario eliminado con éxito");
            queryClient.invalidateQueries({
                queryKey: ["formularios"],
            });
        },
    });
};
