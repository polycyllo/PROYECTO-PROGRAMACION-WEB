import { useForm } from "react-hook-form";

import { UsuarioLogin } from "../../types";
import { Link } from "react-router-dom";

export default function LoginView() {
    const iniVal: UsuarioLogin = {
        email: "",
        password: "",
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: iniVal });

    const handleLogin = (formData: UsuarioLogin) => {};
    return (
        <>
            <form
                className="bg-white mx-4 p-10 "
                onSubmit={handleSubmit(handleLogin)}
                noValidate
            >
                <div className="flex flex-col space-y-4">
                    <div className="text-start">
                        <div className="mb-4">
                            <label className="text-black uppercase font-extrabold text-lg">
                                Usuario
                            </label>
                            <input
                                type="email"
                                className="border border-black p-2 w-full rounded-lg focus:outline-none"
                                placeholder="Correo electronico. Ej. abc@gmail.com"
                                {...register("email", {
                                    required: "El Email es Obligatorio",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "E-mail no válido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-600 text-sm">
                                    {errors.email.message as string}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="text-black uppercase font-extrabold text-lg">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="border border-black p-2 w-full rounded-lg focus:outline-none"
                                placeholder="Ingrese contraseña"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-600 text-sm">
                                    {errors.password.message as string}
                                </span>
                            )}
                        </div>
                    </div>

                    <input
                        type="submit"
                        value="iniciar sesion"
                        className="border-2 p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold"
                    ></input>
                </div>
            </form>
            <nav>
                <Link
                    to={"/auth/register"}
                    className="text-center text-white font-normal text-xl"
                >
                    No tienes cuenta? Crea una
                </Link>
            </nav>
        </>
    );
}
