
import Boton from '../../components/Boton'
export default function CrearCuentaPage() {
  return (
    <section className="text-center grid justify-center">
            <h2 className="text-3xl font-bold my-10">Creando Cuenta</h2>
            <form className=" md:w-[510px] sombra mx-4 w-96">
                <div className="flex flex-col space-y-4 ">
                    <div className="text-start flex flex-col space-y-3 mx-4">
                        <label 
                            htmlFor="Nombre"
                            className=" text-blakc uppercase font-extrabold text-lg"
                            >Nombre</label>
                        <input
                            id="Nombre"
                            type="text"
                            name="Nombre"
                            className=" border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Ingrese su nombre"
                            />
                    
                    
                
                        <label 
                            htmlFor="Apellido"
                            className="  text-blakc uppercase font-extrabold text-lg"
                            >Apellido</label>
                        <input
                            id="Apellido"
                            type="text"
                            name="Apellido"
                            className="border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Ingrese su apellido"
                        />

                        <label 
                            htmlFor="correoElectronico"
                            className=" text-blakc uppercase font-extrabold text-lg"
                            >correo Electronico</label>
                        <input
                            id="correoElectronico"
                            type="email"
                            name="correoElectronico"
                            className=" border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Correo electronico. Ej. abc@gmail.com"
                            />
                    
                    
                
                        <label 
                            htmlFor="contrasenia"
                            className="  text-blakc uppercase font-extrabold text-lg"
                            >Contraseña</label>
                        <input
                            id="contrasenia"
                            type="password"
                            name="contrasenia"
                            className="border border-black p-2 rounded-lg focus:outline-none"
                            placeholder="Ingrese contraseña"
                        />

                        <label 
                            htmlFor="contrasenia2"
                            className="  text-blakc uppercase font-extrabold text-lg"
                            >Repita Contraseña</label>
                        <input
                            id="contrasenia2"
                            type="password"
                            name="contrasenia2"
                            className="border border-black p-2 rounded-lg focus:outline-none"
                            placeholder="Ingrese contraseña"
                        />
                 
                 </div>
                        <Boton 
                            enlace="FormularioPage"
                            titulo="Crear Cuenta"
                        />
                </div>
                
                
            </form>
            
        </section> 
  )
}
