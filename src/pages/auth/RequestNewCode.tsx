import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RequestConfirmation } from "../../types";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { RequestConfirmationCode } from "../../api/AuthAPI";
export default function RequestNewCode() {
    const initialValues: RequestConfirmation = {
        correoelectronico: "",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: RequestConfirmationCode,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
        },
    });

    const handleRequestCode = (formData: RequestConfirmation) => {
        mutate(formData);
    };

    return (
        <>
            <h1 className="text-5xl font-black text-white">
                Solicitar Código de Confirmación
            </h1>
            <p className="text-2xl font-light text-white mt-5">
                Coloca tu e-mail para recibir {""}
                <span className=" text-white -500 font-bold">
                    {" "}
                    un nuevo código
                </span>
            </p>

            <form
                onSubmit={handleSubmit(handleRequestCode)}
                className="space-y-8 p-10 rounded-lg bg-white mt-10"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <label className="font-normal text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full p-3 rounded-lg border-gray-300 border"
                        {...register("correoelectronico", {
                            required: "El Email de registro es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />

                    {errors.correoelectronico && (
                        <span className="text-red-600 text-sm">
                            {errors.correoelectronico.message}
                        </span>
                    )}
                </div>

                <input
                    type="submit"
                    value="Enviar Código"
                    className="bg-acento hover:bg-red-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
                />
            </form>

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    to="/auth/login"
                    className="text-center text-white font-normal"
                >
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
                <Link to="" className="text-center text-gray-300 font-normal">
                    ¿Olvidaste tu contraseña? Reestablecer
                </Link>
            </nav>
        </>
    );
}
