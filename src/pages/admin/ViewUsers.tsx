import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/adminService";
type UsuarioProp = {
    nombre: String;
    apellido: String;
    correoelectronico: String;
    fechadecreaciondecuenta: any;
    confirmado: Boolean;
};
export default function ViewUsers() {
    const [usuarios, setUsuarios] = useState<UsuarioProp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await getAllUsers();
                setUsuarios(response.data);
            } catch (err: any) {
                setError("No se pudieron cargar los usuarios.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold">Cargando usuarios...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Usuarios Registrados</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                            Apellido
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                            Correo Electrónico
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                            Fecha de Registro
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                            Confirmado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                {usuario.nombre}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                {usuario.apellido}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                {usuario.correoelectronico}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                {new Date(
                                    usuario.fechadecreaciondecuenta
                                ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                {usuario.confirmado ? (
                                    <span className="text-green-600 font-bold">
                                        Sí
                                    </span>
                                ) : (
                                    <span className="text-red-600 font-bold">
                                        No
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
