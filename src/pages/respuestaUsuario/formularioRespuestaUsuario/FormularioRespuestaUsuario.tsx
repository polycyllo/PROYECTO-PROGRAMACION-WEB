import { useParams } from "react-router-dom";
import FormularioVerRespUsuario from "./components/FormularioVerRespUsuario";

export default function FormularioRespuestaUsuario() {
    const { token } = useParams<{ token: string }>();
    return <FormularioVerRespUsuario token={token} />;
}
