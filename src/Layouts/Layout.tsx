import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout() {
    //    const { data, isLoading } = useAuth() as any;

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
