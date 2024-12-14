import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/FormularioServices";
export const useAuth = () => {
    console.log("auth ");
    const { data, isError, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: 2,
        refetchOnWindowFocus: false,
    });
    return { data, isError, isLoading };
};
