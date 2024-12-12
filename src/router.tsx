import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Layout from "./Layouts/Layout";
import FormularioPage from "./pages/FormularioPage";
import CrearFormularioPage from "./pages/formulario/CrearFormularioPage";
import ModificarFormularioPage from "./pages/formulario/ModificarFormularioPage";
import VerFormulariosPage, {
    loader as formLoader,
} from "./pages/formulario/VerFormulariosPage";
import PerfilPage from "./pages/perfil/PerfilPage";
import VerFormularioPage from "./pages/formulario/VerFormularioPage";
import AuthLayout from "./Layouts/AuthLayout";
import LoginView from "./pages/auth/LoginView";
import RegisterView from "./pages/auth/RegisterView";
import ConfirmAccount from "./pages/auth/ConfirmAccount";
import RequestNewCode from "./pages/auth/RequestNewCode";
import ResponderFormulario from "./pages/formulario/ResponderFormulario";
import RespuestaUsuario from "./pages/respuestaUsuario/RespuestaUsuario";
import FormularioRespuestaUsuario from "./pages/respuestaUsuario/formularioRespuestaUsuario/FormularioRespuestaUsuario";
import ViewUsers from "./pages/admin/ViewUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "/FormularioPage",
                element: <FormularioPage />,
            },
            {
                path: "/CrearFormularioPage",
                element: <CrearFormularioPage />,
            },
            {
                path: "/ModificarFormularioPage",
                element: <ModificarFormularioPage />,
                loader: formLoader,
            },
            {
                path: "/VerFormulariosPage",
                element: <VerFormulariosPage />,
                loader: formLoader,
            },
            {
                path: "/PerfilPage",
                element: <PerfilPage />,
            },
            {
                path: "VerFormulario",
                element: <VerFormularioPage />,
            },
            {
                path: "/responder/:token",
                element: <ResponderFormulario />,
            },
            {
                path: "/verRespuestasUsuarios/:codformulario",
                element: <RespuestaUsuario />,
            },
            {
                path: "/formularioRespondido/:token",
                element: <FormularioRespuestaUsuario />,
            },
            {
                path: "/viewUsers",
                element: <ViewUsers />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <LoginView />,
            },
            {
                path: "/auth/register",
                element: <RegisterView />,
            },
            {
                path: "/auth/confirm-account",
                element: <ConfirmAccount />,
            },
            {
                path: "/auth/request-code",
                element: <RequestNewCode />,
            },
        ],
    },
]);
