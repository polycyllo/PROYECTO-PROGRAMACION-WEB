import Boton from "../components/Boton";

export default function LoginPage() {
  return (

        <section className="text-center grid justify-center ">
            <h2 className="text-3xl font-bold my-10">Iniciar Sesion</h2>
            <form className="sombra mx-4">
                <div className="flex flex-col space-y-4">
                    <div className="text-start">
                        <label 
                            htmlFor="usuario"
                            className=" text-blakc uppercase font-extrabold text-lg"
                            >Usuario</label>
                        <input
                            id="usuario"
                            type="email"
                            name="usuario"
                            className=" border border-black p-2 w-full rounded-lg focus:outline-none"
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
                            className="border border-black p-2 w-full rounded-lg focus:outline-none"
                            placeholder="Ingrese contraseña"
                            />
                 
                 </div>
                        <Boton 
                            enlace="FormularioPage"
                            titulo="iniciar sesion"
                        />
                        <Boton 
                            enlace="CrearCuentaPage"
                            titulo="Crear cuenta"
                        />
                </div>
                
                
            </form>
            
        </section> 
  )
}
