import Card from "../../components/Card";
import { getNameFormularios } from "../../services/FormularioServices";
import { useLoaderData } from "react-router-dom";
import { Formulario } from "../../types";

export async function loader() {
    const formularios = await getNameFormularios();
    return formularios || [];
}

export default function VerFormulariosPage() {
    const formulario = useLoaderData() as Formulario[];

    if (!formulario || formulario.length === 0) {
        return (
            <div className="mt-32 text-center">
                <p className="text-gray-600 text-lg">
                    No hay formularios disponibles.
                </p>
            </div>
        );
    }

    return (
        <div className="mt-32 ">
            <div className="flex flex-wrap lg:mx-20 mx-10 lg:gap-24 gap-x-10 gap-y-10 lg:ml-[170px]">
                {formulario.map((form) => (
                    <Card
                        key={form.codformulario}
                        codformulario={form.codformulario}
                        nombreformulario={form.nombreformulario}
                        descripcion={form.descripcion}
                        text="Ver más"
                        mode="compartir"
                    />
                ))}
            </div>
        </div>
    );
}
