import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutService } from "../api/AuthAPI";
export default function SideBard() {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await logoutService();

            queryClient.invalidateQueries({ queryKey: ["user"] });

            localStorage.clear();
            sessionStorage.clear();
            navigate("/auth/login");
        } catch (error) {
            console.error("Error cerrando sesión:", error);
        }
    };

    return (
        <div className=" ">
            <button className="ml-4" onClick={() => setOpen(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            <div
                className={` ${
                    !open && "hidden"
                } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
                onClick={() => setOpen(false)}
            ></div>

            <div
                className={`${
                    open ? "w-80" : "w-0"
                } bg-secundario1 min-h-screen fixed top-0 left-0 transition-all duration-300`}
            >
                <div className={`${!open && "hidden"} pt-3`}>
                    <button
                        className="ml-4 text-white mb-14 "
                        onClick={() => setOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>

                    <div className="flex flex-col">
                        <Link
                            to="/"
                            className=" font-bold text-center text-white text-xl hover:bg-acento 
                    cursor-pointer py-3"
                        >
                            Home
                        </Link>
                        <Link
                            to="/FormularioPage"
                            className=" font-bold text-center text-white text-xl hover:bg-acento
                    cursor-pointer py-3"
                        >
                            Formularios
                        </Link>
                        <Link
                            to=""
                            className=" font-bold text-center text-white text-xl hover:bg-acento 
                    cursor-pointer py-3"
                        >
                            Acerca de
                        </Link>
                        <button
                            className=" font-bold text-center text-white text-xl hover:bg-acento 
                    cursor-pointer py-3"
                            onClick={logout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
