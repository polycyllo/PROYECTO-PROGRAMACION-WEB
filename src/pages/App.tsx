import Boton from "../components/Boton"

function App() {
 
  return (
    <>
        
        
        <div className="flex justify-center bg-primario">
            <img src="../public/ezzForm.jpg" className=" py-4 w-80 h-80 rounded shadow-md"/>
        </div>
        <div className="flex justify-center">
            <Boton 
                enlace = "LoginPage"
                titulo = "empezar"
            />
        </div>
        <h1 className="text-center font-extrabold text-3xl">Sobre ezzForm</h1>
        <main className="grid md:grid-cols-2 gap-4 mx-10 my-2 ">
            
            <div className="sombra">
                <h2 className="font-bold text-center text-lg">¿Qué es ezzForm?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ut tempora doloribus minima, eligendi consequatur fuga nesciunt cumque culpa incidunt eos architecto minus omnis, beatae itaque unde. Perferendis, sapiente nostrum.</p>
            </div>

            <div className="sombra">
                <h2 className="font-bold text-center text-lg">¿Por qué usar ezzForm?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, alias laudantium. Modi perspiciatis nobis ipsa, deleniti fugit iusto eveniet, error amet quas, natus nam earum enim recusandae soluta minima doloribus.</p>
            </div>

            <div className="md:col-span-2 sombra">
                <h2 className="font-bold text-center text-lg">¿Cómo empezar?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam perspiciatis eveniet, nesciunt necessitatibus, nobis nam velit blanditiis nisi sunt vitae harum iusto, voluptatem facere. Dolorem explicabo obcaecati laborum facere.</p>
            </div>
        </main>

        <div className="flex justify-center">
            <Boton
                enlace = "LoginPage"
                titulo = "iniciar sesion"
            />
        </div>
        
        

        <footer className=" bg-secundario1 py-5 grid justify-center">
            <p className="text-white text-center">Derechos reservados por Polyfishy</p>
            <a className="text-white text-center" href="isacpoly177@gmail.com">isacpoly177@gmail.com</a>
        </footer>
    </>
  )
}

export default App
