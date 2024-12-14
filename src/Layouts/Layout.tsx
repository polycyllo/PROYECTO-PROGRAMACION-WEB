import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout() {
    const { data, isLoading } = useAuth() as any;

    if (isLoading) return "Cargando...";

    if (!data) {
        return <Navigate to="/auth/login" />;
    }
    return (
        <>
            <div>
                <Header />
                <Outlet />
            </div>
            <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
        </>
    );
}
