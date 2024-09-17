import { Link} from 'react-router-dom'
type BotonProps = {
    enlace: string
    titulo: string
}
export default function Boton({enlace, titulo}:BotonProps) {
    return(
        <Link to={`/${enlace}`} className=" border-2 p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold">{titulo}</Link>
    )
}