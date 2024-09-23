import { useState } from 'react'
import CajaPregunta from '../components/CajaPregunta'
export default function CrearFormularioPage() {
    const [caja, setCaja] = useState([])
    let id = 0;
    const agregarPregunta = () => {
        setCaja([...caja, "Arreglar"]); // Añade un texto de ejemplo
    };
    return (
    <div className="pt-24">
      <div className="flex flex-col lg:flex-row ">
        <label 
            htmlFor="nombreFormularioLabel"
            className="  text-blakc uppercase font-extrabold text-lg text-center"
            >Nombre del Formulario</label>
        <input 
            id="nombreFormulario" 
            type='text' 
            name="nombreFomrulario"
            className="min-w-96 border border-black mx-5 rounded-lg focus:outline-none"
            placeholder="Ingrese nombre para el formulario"
            ></input>
        </div>
            
        <div className='flex flex-col justify-center'>
            {caja.map(()=>(
                <CajaPregunta
                    key={id+1}
                />
            ))}
            <button className='border border-black p-2 mt-5' onClick={() => agregarPregunta()}>Aprete para agregar Pregunta</button>
        </div>

        <div className=' flex flex-col md:flex-row justify-center  md:gap-10'>
            <button 
            className=" border-2 p-3 
            bg-acento my-4 
            rounded-2xl 
            text-white 
            uppercase 
            font-bold
            hover:bg-primario 
            hover:text-black">
                Guardar
            </button>
            <button 
            className=" border-2 p-3 
            bg-acento md:my-4 
            rounded-2xl 
            text-white 
            uppercase 
            font-bold
            hover:bg-secundario1">
                Cancelar
            </button>
        </div>
    </div>
  )
}
