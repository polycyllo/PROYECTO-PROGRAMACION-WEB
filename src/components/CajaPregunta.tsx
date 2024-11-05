import { useState, useRef } from 'react'
import { Pregunta, Respuesta } from "../types";
import CerrarIcon from '../icons/cerrar';
import EditarIcon from '../icons/editar';


type PreguntaProps = {
    pregunta: Pregunta;
    eliminarPregunta: (id: Pregunta["id"]) => void;
    preguntaIndex: number;
};


export default function CajaPregunta({
    pregunta,
    eliminarPregunta,
    preguntaIndex
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

                    <input 
                        name={`preguntas[${preguntaIndex}].pregunta`}
                        type="text" 
                        className='mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full' 
                        placeholder='Ingresar pregunta'/>
                    
                        
                </div>

                <div className="flex flex-row ml-3 mt-10 gap-1">
                    
                    <button 
                        type='button'
                        className="border-2 p-[2.5px]  bg-acento my-2 rounded-2xl text-white"
                            onClick={() =>{
                                agregarRespuesta()
                            }}>
                    <EditarIcon/>
                    </button>

                    <button
                        type='button'
                        className="border-2 p-[2.5px] bg-acento my-2 rounded-2xl text-white"
                        onClick={() => {
                            eliminarPregunta(pregunta.id);
                        }}
                    >
                    <CerrarIcon/>
                    </button>
                </div>
            </div>

            <div className=' pb-5'>
                {
                    cajaRespuesta.map((respuesta,respIndex)=>(

                        <div  key={respuesta.id} className='borde p-4 rounded-2xl flex'>
                            <input 
                            name={`preguntas[${preguntaIndex}].respuestas[${respIndex}].respuesta`}
                            type="text" className=' font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full' 
                            placeholder='Ingrese respuesta'></input>    
                            <button
                                type='button'
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
