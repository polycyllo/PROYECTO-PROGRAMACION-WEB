import { useState, useRef } from "react";
import CajaPregunta from "../components/CajaPregunta";
import type { Pregunta } from "../types";

export default function CrearFormularioPage() {
    const [caja, setCaja] = useState<Pregunta[]>([]);
    const id = useRef(0);

    const agregarPregunta = () => {
        id.current += 1;
        const nuevaPregunta: Pregunta = {
            id: id.current,
            pregunta: "INGRESE LA PREGUNTA",
            respuesta: [],
        };
        setCaja([...caja, nuevaPregunta]);
    };
    return (
        <div className="pt-24">
            <div className="flex flex-col lg:flex-row ">
                <label
                    htmlFor="nombreFormularioLabel"
                    className="  text-blakc uppercase font-extrabold text-lg text-center"
                >
                    Nombre del Formulario
                </label>
                <input
                    id="nombreFormulario"
                    type="text"
                    name="nombreFomrulario"
                    className="min-w-96 border border-black mx-5 rounded-lg focus:outline-none"
                    placeholder="Ingrese nombre para el formulario"
                ></input>
            </div>

            <div className="flex flex-col justify-center">
                {caja.map((pregunta) => (
                    <CajaPregunta key={id + 1} pregunta={pregunta} />
                ))}
                <button
                    className="flex justify-center lg:mx-96
                                border-2 p-3 
                                bg-acento my-4 
                                rounded-2xl 
                                text-white 
                                uppercase 
                                font-bold
                                hover:bg-primario 
                                hover:text-black"
                    onClick={() => agregarPregunta()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-plus"
                        width="92"
                        height="92"
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
                        uppercase 
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
                            uppercase 
                            font-bold
                            hover:bg-secundario1"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}
