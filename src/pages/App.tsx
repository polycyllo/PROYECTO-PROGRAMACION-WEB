import { Boton1 } from "../components/Boton";
import PreguntaRespuesta from "../components/PreguntaRespuesta";
import { preguntaRespuesta } from "../data/bd";

function App() {
    return (
        <>
            <div className="flex justify-center bg-primario mt-14">
                <img
                    src="../public/ezzForm.jpg"
                    className=" py-4 w-80 h-80 rounded shadow-md"
                />
            </div>
            <div className="flex justify-center">
                <Boton1 enlace="LoginPage" titulo="empezar" />
            </div>
            <h1 className="text-center font-extrabold text-3xl">
                Sobre ezzForm
            </h1>

            <main className="grid md:grid-cols-2 gap-4 mx-10 my-2 ">
                {preguntaRespuesta.map((item) => (
                    <PreguntaRespuesta key={item.id} item={item} />
                ))}
            </main>

            <div className="flex justify-center">
                <Boton1 enlace="LoginPage" titulo="iniciar sesion" />
            </div>

            <footer className=" bg-secundario1 py-5 grid justify-center">
                <p className="text-white text-center">
                    Derechos reservados por Polyfishy
                </p>
                <a
                    className="text-white text-center"
                    href="isacpoly177@gmail.com"
                >
                    isacpoly177@gmail.com
                </a>
            </footer>
        </>
    );
}

export default App;
