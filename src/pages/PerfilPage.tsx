export default function PerfilPage() {
    return (
        <div className="h-screen flex justify-center mt-10 xs:mt-0">
            <div className=" mx-auto my-auto   w-[300px] xs:w-[335px] md:w-[600px] lg:w-[1000px] h-[580px] border-4 border-secundario1">
                {/*eliminar ese h-[600* talves*/}
                <div className="flex flex-col items-center pt-5 space-y-3">
                    <img
                        src="https://via.placeholder.com/150" // Aquí va la URL de la imagen de perfil del usuario
                        alt="Foto de perfil"
                        className="w-48 h-48 rounded-full border-4 "
                    />
                    <p className="text-gray-400 text-xl">@NombreApellido</p>
                </div>
                <div className="space-y-4 mt-5">
                    <ProfileField label="Nombre" value="nombrePA" />
                    <ProfileField label="Apellido" value="apellidoPa" />
                    <ProfileField label="Gmail" value="juan1ddd23@gmail.com" />
                    <ProfileField label="Contraseña" value="********" />
                </div>
            </div>
        </div>
    );
}

const ProfileField = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between mx-10 lg:mx-36">
            <div className="text-xl font-bold">{label}</div>

            <div className="flex justify-between gap-10">
                <div className=" pl-2 text-centerh-10 text-xl text-gray-400 border border-gray-300 md:min-w-56 w-44 whitespace-nowrap overflow-y-hidden overflow-x-auto resize-none">
                    {value}
                </div>
                {PencilIcon()}
            </div>
        </div>
    );
};
const PencilIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffbf00"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
        </svg>
    );
};
