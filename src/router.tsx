
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/App'
import LoginPage from './pages/LoginPage'
import Layout from './Layouts/Layout'
import CrearCuentaPage from './pages/CrearCuentaPage'
import FormularioPage from './pages/FormularioPage'
export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<App/>}/>
                <Route path='/LoginPage' element={<LoginPage/>}/>
                <Route path='/CrearCuentaPage' element={<CrearCuentaPage/>}/>
                <Route path='/FormularioPage' element={<FormularioPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
