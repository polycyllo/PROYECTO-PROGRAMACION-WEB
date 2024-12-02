import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
    const { data, isError, isLoading } = useAuth();
    //console.log(data);
    if (isLoading) return "Cargando...";
    if (!data) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}
