import { useQuery } from "@tanstack/react-query";
import { getNameFormularios } from "../../services/FormularioServices";
import Card from "../../components/Card";
import { Formulario } from "../../types";

export default function ModificarFormularioPage() {
    const { data: formularios = [], isLoading } = useQuery<
        Formulario[] | undefined
    >({
        queryKey: ["formularios"],
        queryFn: getNameFormularios,
    });

    if (isLoading) {
        return (
            <div className="mt-32 text-center">
                <p className="text-gray-600 text-lg">Cargando...</p>
            </div>
        );
    }

    if (!formularios || formularios.length === 0) {
        return (
            <div className="mt-32 text-center">
                <p className="text-gray-600 text-lg">
                    No hay formularios disponibles.
                </p>
            </div>
        );
    }

    return (
        <div className="mt-32">
            <div className="flex flex-wrap mx-20 gap-24">
                {formularios.map((form) => (
                    <Card
                        key={form.codformulario}
                        codformulario={form.codformulario}
                        nombreformulario={form.nombreformulario}
                        descripcion={form.descripcion}
                        text="Ver"
                        mode="modificar"
                    />
                ))}
            </div>
        </div>
    );
}
