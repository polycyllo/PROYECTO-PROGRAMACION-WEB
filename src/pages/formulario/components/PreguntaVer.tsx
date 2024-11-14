
import { Opcion } from '../../../types';



type PreguntaProps = {
    pregunta: string;
    cajaRespuesta: Opcion[]

};


export default function PreguntaVer({
    pregunta,
    cajaRespuesta

}: PreguntaProps) {


    return (
        <div className="caja mx-5 px-5 bg-sky-300 rounded-xl ">
            <div className="mt-8 ">
                <div className='w-full flex'> 
                
                    <label
                        className='mb-2 font-bold text-1xl border border-gray-500 rounded-xl py-2 pl-4 w-full bg-white mr-4'>
                            {pregunta}
                    </label>
                    
                        
                </div>

            </div>

            <div className=' pb-5'>
                {cajaRespuesta && cajaRespuesta.length > 0? (
                    cajaRespuesta.map((respuesta,index)=>(

                        <div key={index} className='borde p-4 rounded-2xl flex'>
                            <label 
                            
                            className={`font-semibold text-1xl border border-gray-300 rounded-xl py-2 pl-4 w-full ${respuesta.esrespuesta?'bg-green-400':'bg-white'}`} 
                            >{respuesta.textoopcion}</label>    

                        </div>    
                    ))
                ):(
                    <p className="text-center">No hay respuestas disponibles.</p>
                )
                }
            </div>

        </div>
    );
}
