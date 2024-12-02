import { useState, useRef } from "react";
import type { Pregunta } from "../types";
export const useListaPreguntas = () => {
    const [caja, setCaja] = useState<Pregunta[]>([]);
    const id = useRef(0);

    const agregarPregunta = (): void => {
        id.current += 1;
        const nuevaPregunta: Pregunta = {
            id: id.current,
            pregunta: "INGRESE LA PREGUNTA",
            opcion: [],
        };
        setCaja([...caja, nuevaPregunta]);
    };
    function eliminarPregunta(id: Pregunta["id"]) {
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
