import { useForm } from "react-hook-form";
import { UsuarioRegistrationForm } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {
    const iniVal: UsuarioRegistrationForm = {
        nombre: "",
        apellido: "",
        correoelectronico: "",
        contrasenia: "",
        contrasenia_confirmada: "",
    };
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<UsuarioRegistrationForm>({ defaultValues: iniVal });
    const navigate = useNavigate();
    const password = watch("contrasenia");
    const { mutate } = useMutation({
        mutationFn: createAccount,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
            reset();
            navigate("/auth/login");
        },
    });
    const handleRegister = (formData: UsuarioRegistrationForm) => {
        //console.log(formData);
        mutate(formData);
    };
    return (
        <>
            <form
                className=" md:w-[580px]  mx-auto  bg-white p-5"
                onSubmit={handleSubmit(handleRegister)}
            >
                <h2 className="text-3xl font-bold my-10">Creando Cuenta</h2>
                <div className="flex flex-col space-y-4 ">
                    <div className="text-start flex flex-col space-y-3 mx-4">
                        <label className=" text-blakc uppercase font-extrabold text-lg">
                            Nombre
                        </label>
                        <input
                            type="name"
                            className=" border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Ingrese su nombre"
                            {...register("nombre", {
                                required: "El Nombre es obligatorio",
                            })}
                        />
                        {errors.nombre && (
                            <span className="text-red-600 text-sm">
                                {errors.nombre.message as string}
                            </span>
                        )}

                        <label className="  text-blakc uppercase font-extrabold text-lg">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Ingrese su apellido"
                            {...register("apellido", {
                                required: "El Apellido es obligatorio",
                            })}
                        />
                        {errors.apellido && (
                            <span className="text-red-600 text-sm">
                                {errors.apellido.message as string}
                            </span>
                        )}

                        <label className=" text-blakc uppercase font-extrabold text-lg">
                            correo Electronico
                        </label>
                        <input
                            type="email"
                            className=" border border-black p-2  rounded-lg focus:outline-none"
                            placeholder="Correo electronico. Ej. abc@gmail.com"
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
                                {errors.correoelectronico.message as string}
                            </span>
                        )}
                        <label className="  text-blakc uppercase font-extrabold text-lg">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="border border-black p-2 rounded-lg focus:outline-none"
                            placeholder="Ingrese contraseña"
                            {...register("contrasenia", {
                                required: "El Password es obligatorio",
                                minLength: {
                                    value: 8,
                                    message:
                                        "El Password debe ser mínimo de 8 caracteres",
                                },
                            })}
                        />
                        {errors.contrasenia && (
                            <span className="text-red-600 text-sm">
                                {errors.contrasenia.message as string}
                            </span>
                        )}

                        <label className="  text-blakc uppercase font-extrabold text-lg">
                            Repita Contraseña
                        </label>
                        <input
                            id="password_confirmation"
                            type="password"
                            className="border border-black p-2 rounded-lg focus:outline-none"
                            placeholder="Ingrese contraseña"
                            {...register("contrasenia_confirmada", {
                                required: "Repetir Password es obligatorio",
                                validate: (value) =>
                                    value === password ||
                                    "Los Passwords no son iguales",
                            })}
                        />

                        {errors.contrasenia_confirmada && (
                            <span className="text-red-600 text-sm">
                                {
                                    errors.contrasenia_confirmada
                                        .message as string
                                }
                            </span>
                        )}
                    </div>

                    <input
                        type="submit"
                        value="Crear Cuenta"
                        className="border-2 p-3 bg-acento my-4 rounded-2xl text-white uppercase font-bold"
                    />
                </div>
            </form>
            <Link
                to={"/auth/login"}
                className="text-center text-white font-normal text-xl"
            >
                Ya tienes cuenta? Iniciar sesion
            </Link>
        </>
    );
}
