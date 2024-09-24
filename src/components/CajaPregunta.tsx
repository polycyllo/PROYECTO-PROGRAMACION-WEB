import { Pregunta } from "../types";

type PreguntaProps = {
    pregunta: Pregunta;
};
export default function CajaPregunta({ pregunta }: PreguntaProps) {
    return (
        <div className="sombra">
            <p> PREGUNTA: {pregunta.id} </p>
        </div>
    );
}
