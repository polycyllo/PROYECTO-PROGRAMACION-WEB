import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/FormularioServices";
import Cookies from "js-cookie";
export const useAuth = () => {
    console.log("entro auth");
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false,
    });
    /*console.log("data desde useAtuh", data);
    console.log("error", error);*/
    return { data, isError, isLoading };
};
