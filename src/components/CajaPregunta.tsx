import { useState, useRef, useEffect } from 'react'
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

    const [tipoRespuesta, setTipoRespuesta] = useState("seleccion_multiple");

    // Manejar el cambio del valor seleccionado
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("este valor pa ",e.target.value)
        setTipoRespuesta(e.target.value);
    };


    useEffect(() => {
        if (tipoRespuesta !== "seleccion_multiple" && tipoRespuesta !== "varias_respuestas") {
            if (cajaRespuesta.length > 1) {

                const aux = [cajaRespuesta[0]]; 
                setCajaRespuesta(aux);
            } else if (cajaRespuesta.length === 0) {
                agregarRespuesta(); 
            }
        }
    }, [tipoRespuesta]);


    const [cajaRespuesta,setCajaRespuesta] = useState<Respuesta[]>([])
    const idResp = useRef(0)
    function agregarRespuesta() {
        idResp.current+=1;
        const newRespuesta:Respuesta = {
            id : idResp.current,
            cadena:"",
            esrespuesta: false
        }

        setCajaRespuesta([...cajaRespuesta,newRespuesta]);
        pregunta.respuesta = cajaRespuesta;
    }

    function eliminarRespuesta(id:Respuesta["id"]){
        const newCaja = cajaRespuesta.filter(resp => (resp.id!=id))

        setCajaRespuesta(newCaja)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        let updatedValue = value;

        if (tipoRespuesta === "para_nombre") {
            updatedValue = value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
        } else if (tipoRespuesta === "para_telefono") {
            updatedValue = value.replace(/[^0-9]/g, '');
        } else if (tipoRespuesta === "para_nickname") {
            updatedValue = value.replace(/[^a-zA-Z0-9]/g, '');
        }

        const newCajaRespuesta = [...cajaRespuesta];
        newCajaRespuesta[index].cadena = updatedValue;
        setCajaRespuesta(newCajaRespuesta);
    };


    return (
        <div className="caja mx-5 px-5 bg-[#00AFFF] rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <div className='w-full'> 
                
                    <select value={tipoRespuesta}
                        onChange={handleSelectChange}
                        className='mt-3 h-8 md:mx-1 mb-2'>
                        {/* <option value="a" disabled selected className='bg-neutral-300'>
                            agregar tipo de respuestas
                        </option> */}
                        <option value="seleccion_multiple">Seleccion multiple</option>
                        <option value="varias_respuestas">Varias respuestas</option>
                        <option value="respuesta_parrafo">Respuesta/parrafo </option>
                        <optgroup label="Respuesta corta">
                        <option value="para_nombre">Para nombre</option>
                        <option value="para_telefono">Para telefono</option>
                        <option value="para_nickname">Para nickname</option>
                        </optgroup>
                    </select>

                    {tipoRespuesta==="varias_respuestas" &&(<select className='mt-3 h-8 md:mx-1 mb-2 '>
                        {/* <option value="a" className='bg-neutral-300' disabled selected>agregar limite de respuestas</option> */}
                        <option value="">1 respuesta</option>
                        <option value="">2 respuestas</option>
                        <option value="">3 respuestas </option>
                        <option value="">4 respuestas </option>
                        <option value="">5 respuestas </option>
                        <option value="">sin limite</option>
                    </select>)}

                    <input 
                        name={`preguntas[${preguntaIndex}].pregunta`}
                        type="text" 
                        className='mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full' 
                        placeholder='Ingresar pregunta'/>
                    
                        
                </div>

                <div className="flex flex-row ml-3 mt-10 gap-1">
                    
                {(tipoRespuesta === "seleccion_multiple" || tipoRespuesta === "varias_respuestas") && (
                    <button 
                        type='button'
                        className="border-2 p-[2.5px]  bg-acento my-2 rounded-2xl text-white"
                            onClick={() =>{
                                agregarRespuesta()
                            }}>
                    <EditarIcon/>
                    </button>)
                    }

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
                            value={respuesta.cadena}
                            onChange={(e) => handleInputChange(e, respIndex)}
                            type="text" className=' font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full' 
                            placeholder='Ingrese respuesta'>
                            </input>

                            {(tipoRespuesta === "seleccion_multiple" || tipoRespuesta === "varias_respuestas")&&(
                                <>
                            <label className="ml-4 flex items-center gap-2">
                                <input
                                    type="radio"
                                    name={`preguntas[${preguntaIndex}].respuestas[${respIndex}].esrespuesta`}
                                    value="true"
                                    className={`appearance-none h-6 w-6 border-4 border-black ${tipoRespuesta==="varias_respuestas"?"":"rounded-full"} checked:bg-white focus:outline-none`}
                                />
                                
                            </label>
                            
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
                                </>)}
                        </div>    
                    ))
                }
            </div>

        </div>
    );
}
