import { useState, useRef } from 'react'
import { Pregunta, Respuesta } from "../types";


type PreguntaProps = {
    pregunta: Pregunta;
    eliminarPregunta: (id: Pregunta["id"]) => void;
};
export default function CajaPregunta({
    pregunta,
    eliminarPregunta,
}: PreguntaProps) {

    const [cajaRespuesta,setCajaRespuesta] = useState<Respuesta[]>([])
    const idResp = useRef(0)
    function agregarRespuesta() {
        idResp.current+=1;
        const newRespuesta:Respuesta = {
            id : idResp.current,
            cadena:""
        }

        setCajaRespuesta([...cajaRespuesta,newRespuesta]);
        pregunta.respuesta = cajaRespuesta;
    }

    function eliminarRespuesta(id:Respuesta["id"]){
        const newCaja = cajaRespuesta.filter(resp => (resp.id!=id))
        setCajaRespuesta(newCaja)
    }
    return (
        <div className="caja mx-5 p-10 bg-[#fafafa] rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className='w-full'> 
                    <p>PREGUNTA: </p>
                    <input type="text" className='font-bold text-1xl border border-black rounded-xl py-2 pl-4 w-full' placeholder='Ingrese pregunta'/>    
                </div>

                <div className="md:flex md:flex-row ml-3">
                    <button className="border-2 p-[2px] md:p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold"
                            onClick={() =>{
                                agregarRespuesta()
                            }}>
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

            <div className='space-y-2'>
                {
                    cajaRespuesta.map((respuesta)=>(

                        <div className='border border-black p-4 rounded-2xl flex'>
                            <input type="text" className='font-semibold text-1xl border border-black rounded-xl py-2 pl-4 w-full' placeholder='Ingrese respuesta'></input>    
                            <button
                                className="flex justify-center
                                border-black p-2 
                                bg-acento  
                                ml-3
                                rounded-lg 
                                text-white 
                                font-bold
                                hover:bg-primario 
                                hover:text-black"
                                onClick={() => eliminarRespuesta(respuesta.id)}>
                                X
                            </button>
                        </div>    
                    ))
                }
            </div>

        </div>
    );
}
