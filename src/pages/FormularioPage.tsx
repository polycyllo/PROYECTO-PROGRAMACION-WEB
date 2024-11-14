import { Link } from "react-router-dom";
import VerIcon  from "../icons/ver";
import CrearFormularioIcon from "../icons/crearFormulario";
import ModificarFormularioIcon from "../icons/modificarFormulario";
export default function FormularioPage() {
    return (
        <div className=" flex mt-24 lg:mt-0 lg:items-center justify-center h-screen ">
        <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
            <Link
                to="/CrearFormularioPage"
                className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
            >
                <CrearFormularioIcon/>   
                Crear formulario
            </Link>

            <Link
                to="/ModificarFormularioPage"
                className="sombra p-24 md:p-36    rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
            >
                <ModificarFormularioIcon/>
                Modificar formulario
            </Link>

            <Link
                to="/VerFormulariosPage"
                className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
            >
                <VerIcon/>
                ver formulario
            </Link>
        </main>
    </div>
    )
}
