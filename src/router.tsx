
import { createBrowserRouter} from 'react-router-dom'
import App from './pages/App'
import LoginPage from './pages/perfil/LoginPage'
import Layout from './Layouts/Layout'
import CrearCuentaPage from './pages/perfil/CrearCuentaPage'
import FormularioPage from './pages/FormularioPage'
import CrearFormularioPage, { action as crearFormularioAction} from './pages/formulario/CrearFormularioPage'
import ModificarFormularioPage from './pages/formulario/ModificarFormularioPage'
import VerFormulariosPage, { loader as formLoader } from './pages/formulario/VerFormulariosPage'
import PerfilPage from './pages/perfil/PerfilPage'
import VerFormularioPage from './pages/formulario/VerFormularioPage'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: '/LoginPage',
                element: <LoginPage/>
            },
            {
                path: '/CrearCuentaPage',
                element: <CrearCuentaPage/>
            },
            {
                path: '/FormularioPage',
                element: <FormularioPage/>
            },
            {
                path: '/CrearFormularioPage',
                element: <CrearFormularioPage/>,
                action: crearFormularioAction,
            },
            {
                path: '/ModificarFormularioPage',
                element: <ModificarFormularioPage/>,
                loader: formLoader
            },
            {
                path: '/VerFormulariosPage',
                element: <VerFormulariosPage/>,
                loader: formLoader
            },
            {
                path: '/PerfilPage',
                element: <PerfilPage/>
            },
            {
                path: 'VerFormulario',
                element: <VerFormularioPage/>
            }
   
        ]
    }
])