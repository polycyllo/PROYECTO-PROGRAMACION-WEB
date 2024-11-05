import CajaPregunta from "../components/CajaPregunta";
import AgregarIcon from "../icons/agregar";
import { Pregunta } from "../types";
import { Form } from "react-router-dom";
type CrearFomularioProps = {
    caja: Pregunta[];
    agregarPregunta: () => void;
    eliminarPregunta: (id: Pregunta["id"]) => void;
};





export default function Formulario({
    caja,
    agregarPregunta,
    eliminarPregunta,
}: CrearFomularioProps) {
    return (
        <>
        <Form className="pt-24" method="post">
            <div className="flex flex-col gap-3 py-5 text-2xl ">
                
                <input
                    id="nombreformulario"
                    type="text"
                    name="nombreformulario"
                    className="min-w-96 md:w-1/2  border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-bold"
                    placeholder="Formulario sin titulo"
                ></input>
                <input
                    id="descripcion"
                    type="text"
                    name="descripcion"
                    className="min-w-96 md:w-1/2 border border-gray-600 mx-auto rounded-lg focus:outline-none p-2 font-medium"
                    placeholder="Ingresar descripcion Formulario"
                ></input>
            </div>

            <div className="flex flex-col justify-center mt-10 space-y-5">
                {caja.map((pregunta,index) => (
                    <CajaPregunta
                        key={pregunta.id}
                        pregunta={pregunta}
                        eliminarPregunta={eliminarPregunta}
                        preguntaIndex={index}
                    />
                ))}
                <button
                    type="button"
                    className="flex justify-center lg:mx-[450px]
                                mx-4
                                h-16
                                border-2 lg:p-1 
                                bg-acento my-4 
                                rounded-2xl 
                                text-white 
                                font-bold
                                hover:bg-secundario1 
                                hover:text-black"
                    onClick={() => agregarPregunta()}
                >
                <AgregarIcon/>
                </button>
            </div>

            <div className=" flex flex-col md:flex-row justify-center  md:gap-10">
                <button
                    type="submit"
                    className=" border-2 p-3 
                        text-2xl
                        bg-acento my-4 
                        rounded-2xl 
                        text-white 
                        mx-4
                        font-bold
                      hover:bg-white
                      hover:text-black
                      hover: border-secundario1"
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
                            hover:bg-white
                            hover:text-black
                            hover: border-secundario1"
                >
                    Cancelar
                </button>
            </div>
        </Form>
        </>
    );
}
