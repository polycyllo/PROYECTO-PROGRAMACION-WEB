import CajaPregunta from "../components/CajaPregunta";
import { Pregunta } from "../types";

type CrearFomularioProps = {
    caja: Pregunta[];
    agregarPregunta: () => void;
    eliminarPregunta: (id: Pregunta["id"]) => void;
};
export default function CrearFormularioPage({
    caja,
    agregarPregunta,
    eliminarPregunta,
}: CrearFomularioProps) {
    return (
        <div className="pt-24">
            <div className="flex flex-col gap-3 py-5 text-2xl ">
                
                <input
                    id="nombreFormulario"
                    type="text"
                    name="nombreFomrulario"
                    className="min-w-96 md:w-1/2  border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-bold"
                    placeholder="Formulario sin titulo"
                ></input>
                <input
                    id="descripcionFormulario"
                    type="text"
                    name="descripcionFormulario"
                    className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-medium"
                    placeholder="Ingresar descripcion Formulario"
                ></input>
            </div>

            <div className="flex flex-col justify-center mt-10 space-y-5">
                {caja.map((pregunta) => (
                    <CajaPregunta
                        key={pregunta.id}
                        pregunta={pregunta}
                        eliminarPregunta={eliminarPregunta}
                    />
                ))}
                <button
                    className="flex justify-center lg:mx-[450px]
                                mx-4
                                border-2 lg:p-1 
                                bg-acento my-4 
                                rounded-2xl 
                                text-white 
                                font-bold
                                hover:bg-primario 
                                hover:text-black"
                    onClick={() => agregarPregunta()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="90"
                        height="90"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                    </svg>
                </button>
            </div>

            <div className=" flex flex-col md:flex-row justify-center  md:gap-10">
                <button
                    className=" border-2 p-3 
                        text-2xl
                        bg-acento my-4 
                        rounded-2xl 
                        text-white 
                        mx-4
                        font-bold
                      hover:bg-secundario2 
                      hover:text-black"
                >
                    Guardar
                </button>
                <button
                    className=" border-2 p-3 
                            text-2xl
                            bg-acento md:my-4 
                            rounded-2xl 
                            text-white 
                            mx-4
                            font-bold
                            hover:bg-secundario1"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}
