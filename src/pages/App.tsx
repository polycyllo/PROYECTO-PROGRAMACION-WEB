import { Boton1 } from "../components/Boton";
import PreguntaRespuesta from "../components/PreguntaRespuesta";
import { preguntaRespuesta } from "../data/bd";
import { animation } from "../icons/animation";
function App() {
    const ani = animation();
    return (
        <>
            <div className="flex flex-col justify-center  mt-16 mx-auto">
                {ani}
                <h1 className="mt-2 text-3xl uppercase font-bold text-center">
                    crea formularios!!!
                </h1>
            </div>
            <div className="flex justify-center">
                <Boton1 enlace="FormularioPage" titulo="empezar" />
            </div>
            <h1 className="text-center font-extrabold text-3xl">
                Sobre ezzForm
            </h1>

            <main className="grid md:grid-cols-2 gap-4 mx-10 my-2 ">
                {preguntaRespuesta.map((item) => (
                    <PreguntaRespuesta key={item.id} item={item} />
                ))}
            </main>

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
