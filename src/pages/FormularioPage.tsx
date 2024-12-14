import { Link } from "react-router-dom";
import VerIcon from "../icons/ver";
import CrearFormularioIcon from "../icons/crearFormulario";
import ModificarFormularioIcon from "../icons/modificarFormulario";
import { useAuth } from "../hooks/useAuth";

export default function FormularioPage() {
    const { data } = useAuth() as any;
    return (
        <div className=" flex mt-24 lg:mt-0 lg:items-center justify-center h-screen ">
            {data.rol === "user" ? (
                <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
                    <Link
                        to="/CrearFormularioPage"
                        className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                    >
                        <CrearFormularioIcon />
                        Crear formulario
                    </Link>

                    <Link
                        to="/ModificarFormularioPage"
                        className="sombra p-24 md:p-36    rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                    >
                        <ModificarFormularioIcon />
                        Modificar formulario
                    </Link>

                    <Link
                        to="/VerFormulariosPage"
                        className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                    >
                        <VerIcon />
                        ver formulario
                    </Link>
                </main>
            ) : (
                <main className="flex justify-center items-center w-full mx-5">
                    <Link
                        to="/viewUsers"
                        className="sombra p-6 sm:p-8 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center "
                    >
                        <VerIcon />
                        Ver usuarios Registrados
                    </Link>
                </main>
            )}
        </div>
    );
}
