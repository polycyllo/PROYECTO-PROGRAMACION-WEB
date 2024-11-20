import { useNavigate } from "react-router-dom";

type CardProps = {
    codformulario: number;
    nombreformulario: string;
    descripcion: string;
    text: string;
}


export default function Card({codformulario, nombreformulario, descripcion, text} : CardProps) {

    const navigate = useNavigate();
    const handleR = () =>{

        navigate('/VerFormulario', { state: { codformulario: codformulario } });
    }
    return (
        <section className=" border-4 rounded-2xl border-black w-[300px] h-[400px] flex flex-col overflow-hidden">

            <div className="bg-[#FFA500] w-full h-[150px] border-b-4 border-black flex justify-center items-center">
                <h1 className="text-center text-white text-2xl font-bold ">{nombreformulario}</h1>
            </div>
            
            <div className="w-full mt-3 h-[200px] flex flex-col  justify-center">
                <h1 className="text-center text-xl font-semibold ">{descripcion}</h1>
                <div className="mt-3 flex justify-center">
                    <button className="bg-secundario1 font-semibold border-2 p-2 rounded-xl border-black hover:bg-acento text-white"
                    onClick={()=>handleR()}>{text}</button>
                </div>
            </div>
        </section>
    ); 
}
