import { useState, useRef } from "react";
export const useListaPreguntas = () => {
    const [caja, setCaja] = useState<any[]>([]);
    const id = useRef(0);

    const agregarPregunta = (): void => {
        id.current += 1;
        const nuevaPregunta: any = {
            id: id.current,
            pregunta: "INGRESE LA PREGUNTA",
            opcion: [],
        };
        setCaja([...caja, nuevaPregunta]);
    };
    function eliminarPregunta(id: any["id"]) {
        setCaja((prevCaja) =>
            prevCaja.filter((pregunta) => pregunta.id !== id)
        );
    }

    return {
        id,
        caja,
        agregarPregunta,
        eliminarPregunta,
    };
};
