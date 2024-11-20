import { useLoaderData } from "react-router-dom"
import Card from "../../components/Card"
import { Formulario } from "../../types"
import { getNameFormularios } from "../../services/FormularioServices"
export async function loader() {
    const formuarios = await getNameFormularios()
    return formuarios
}
export default function ModificarFormularioPage() {
    const formulario = useLoaderData() as Formulario[]
  return (
    
    <div className="mt-32">
        <div className="flex flex-wrap mx-20 gap-24">

            {formulario.map((form) => (
                <Card key={form.codformulario} codformulario={form.codformulario} nombreformulario={form.nombreformulario} descripcion={form.descripcion} text="Editar"/>
                
            ))}

        </div>
    </div>
  )
}
