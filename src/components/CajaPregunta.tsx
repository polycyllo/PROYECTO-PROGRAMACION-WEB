import { Pregunta } from "../types";

type PreguntaProps = {
    pregunta: Pregunta;
    eliminarPregunta: (id: Pregunta["id"]) => void;
};
export default function CajaPregunta({
    pregunta,
    eliminarPregunta,
}: PreguntaProps) {
    return (
        <div className="sombra mx-5">
            <div className="flex flex-row items-center justify-between">
                <p> PREGUNTA: {pregunta.id} </p>

                <div>
                    <button className="border-2 p-[2px] md:p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-pencil-plus"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#ffffff"
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
                    </button>

                    <button
                        className="border-2 p-[2px] md:p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold"
                        onClick={() => {
                            eliminarPregunta(pregunta.id);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-square-rounded-x"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
