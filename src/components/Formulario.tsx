import { Link } from "react-router-dom";
//https://uicolors.app/create
export default function Formulario() {
    return (
        <div className=" flex mt-24 lg:mt-0 lg:items-center justify-center h-screen ">
            <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
                <Link
                    to="/CrearFormularioPage"
                    className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-square-plus"
                        width="84"
                        height="84"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff4500"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                    </svg>
                    Crear formulario
                </Link>

                <Link
                    to="/ModificarFormularioPage"
                    className="sombra p-24 md:p-36    rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil-plus"
                        width="84"
                        height="84"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff4500"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                    </svg>
                    Modificar formulario
                </Link>

                <Link
                    to="/VerFormularioPage"
                    className="sombra p-24 md:p-36 rounded-2xl text-black uppercase font-bold flex flex-col items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye"
                        width="84"
                        height="84"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff4500"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                    ver formulario
                </Link>
            </main>
        </div>
    );
}
