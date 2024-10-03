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
        <div className="caja mx-5 px-5 bg-[#00AFFF] rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className='w-full'> 
                
                    <select className='mt-3 h-8 md:mx-1 mb-2 '>
                        <option value="opcion1">Respuesta/parrafo </option>
                        <option value="opcion2">Seleccion</option>
                        <optgroup label="Más opciones">
                        <option value="opcion3">Secuencia</option>
                        
                        </optgroup>
                    </select>

                    <input type="text" className='mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full' 
                    placeholder='Ingresar pregunta'/>
                    
                        
                </div>

                <div className="flex flex-row ml-3 mt-10 gap-1">
                    
                    <button className="border-2 p-[2.5px]  bg-acento my-2 rounded-2xl text-white"
                            onClick={() =>{
                                agregarRespuesta()
                            }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-pencil-plus"
                            width="40"
                            height="40"
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
                        className="border-2 p-[2.5px] bg-acento my-2 rounded-2xl text-white"
                        onClick={() => {
                            eliminarPregunta(pregunta.id);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-square-rounded-x"
                            width="40"
                            height="40"
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

            <div className=' pb-5'>
                {
                    cajaRespuesta.map((respuesta)=>(

                        <div className='borde p-4 rounded-2xl flex'>
                            <input type="text" className=' font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full' 
                            placeholder='Ingrese respuesta'></input>    
                            <button
                                className="flex justify-center
                                border-black p-2 
                                bg-acento  
                                ml-3
                                rounded-lg 
                                text-white 
                                font-bold
                                hover:bg-secundario1 
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
