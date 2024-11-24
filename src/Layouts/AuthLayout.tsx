import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AuthLayout() {
    return (
        <>
            <div className="bg-secundario1 min-h-screen">
                <div className="py-7 lg:py-10 lg-py-20 mx-auto lg:w-[650px] text-center">
                    <h1 className="text-6xl lg:text-8xl font-bold text-white">
                        ezzForm
                    </h1>
                    <div className=" mt-3 lg:mt-10 lg:max-w-[650px] mx-2">
                        <Outlet />
                    </div>
                    <ToastContainer />
                </div>
            </div>

            <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
        </>
    );
}
