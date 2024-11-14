
import { useLocation } from "react-router-dom";



import FormularioVer from "./components/FormularioVer";

export default function VerFormularioPage() {
    const location = useLocation();
    const codform = location.state?.codformulario;

    return (
        <div className="">
               <FormularioVer

            codform={codform}
            />
        </div>
    );











    

}
