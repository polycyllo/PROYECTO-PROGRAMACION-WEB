import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/FormularioServices";
export const useAuth = () => {
    console.log("auth ");
    const { data, isError, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false,
    });
    /*console.log("data desde useAtuh", data);
    console.log("error", error);*/
    return { data, isError, isLoading };
};
