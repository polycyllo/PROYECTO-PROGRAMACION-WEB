
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/App'
import LoginPage from './pages/LoginPage'
import Layout from './Layouts/Layout'
import CrearCuentaPage from './pages/CrearCuentaPage'
import FormularioPage from './pages/FormularioPage'
import CrearFormularioPage from './pages/CrearFormularioPage'
import { useListaPreguntas } from './hooks/useListaPreguntas'
export default function AppRouter() {


    const {
        caja,
        agregarPregunta,
        eliminarPregunta
    } = useListaPreguntas()
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
            {/*para que todas estas paginas tengan los mismos elementos establecidos en el layout*/}
                <Route path='/' element={<App/>}/>
                <Route path='/LoginPage' element={<LoginPage/>}/>
                <Route path='/CrearCuentaPage' element={<CrearCuentaPage/>}/>
                <Route path='/FormularioPage' element={<FormularioPage/>}/>
                <Route path='/CrearFormularioPage' element={<CrearFormularioPage caja={caja} 
                agregarPregunta={agregarPregunta} eliminarPregunta={eliminarPregunta}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
