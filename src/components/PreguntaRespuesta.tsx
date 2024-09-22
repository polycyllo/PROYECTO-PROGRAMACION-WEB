import { PreguntaRespuesta } from "../types";
type preguntaRespuetaProps = {
    item : PreguntaRespuesta
}
export default function PreguntaRespuesta({ item }: preguntaRespuetaProps) {
  return (
    <div className="sombra">
        <h2 className="font-bold text-center text-lg">{item.pregunta}</h2>
        <p>{item.respuesta}</p>  
    </div>
  )
}
