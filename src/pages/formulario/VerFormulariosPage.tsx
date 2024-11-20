import Card from "../../components/Card";
import { getNameFormularios } from "../../services/FormularioServices";
import { useLoaderData } from "react-router-dom";
import { Formulario } from "../../types";

export async function loader() {
    const formuarios = await getNameFormularios();
    return formuarios;
}
export default function VerFormulariosPage() {
    const formulario = useLoaderData() as Formulario[];

    return (
        <div className="mt-32 ">
            <div className="flex flex-wrap lg:mx-20 mx-16 lg:gap-24 gap-x-10 gap-y-10 lg:ml-[170px] 2xl:ml-20">
                {formulario.map((form) => (
                    <Card
                        key={form.codformulario}
                        codformulario={form.codformulario}
                        nombreformulario={form.nombreformulario}
                        descripcion={form.descripcion}
                        text="Ver mas"
                    />
                ))}
            </div>
        </div>
    );
}
