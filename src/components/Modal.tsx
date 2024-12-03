type modalProps = {
    texto: string;
    textBoton: string;
    close: () => void;
    confirm: () => void;
};
export default function Modal({
    texto,
    textBoton,
    close,
    confirm,
}: modalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">{texto}</h2>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-acento text-white rounded-md hover:bg-red-600 font-bold"
                        onClick={() => confirm()}
                    >
                        {textBoton}
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 font-bold"
                        onClick={() => close()}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
