
import { createBrowserRouter} from 'react-router-dom'
import App from './pages/App'
import LoginPage from './pages/LoginPage'
import Layout from './Layouts/Layout'
import CrearCuentaPage from './pages/CrearCuentaPage'
import FormularioPage from './pages/FormularioPage'
import CrearFormularioPage, { action as crearFormularioAction} from './pages/CrearFormularioPage'
import ModificarFormularioPage from './pages/ModificarFormularioPage'
import VerFormularioPage from './pages/VerFormularioPage'
import PerfilPage from './pages/PerfilPage'

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
                action: crearFormularioAction
            },
            {
                path: '/ModificarFormularioPage',
                element: <ModificarFormularioPage/>
            },
            {
                path: '/VerFormularioPage',
                element: <VerFormularioPage/>
            },
            {
                path: '/PerfilPage',
                element: <PerfilPage/>
            }   
        ]
    }
])