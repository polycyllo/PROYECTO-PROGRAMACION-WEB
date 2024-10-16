import SideBard from "./SideBard";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="grid grid-cols-3 bg-secundario1 py-5 fixed top-0 left-0 right-0  shadow-sm h-[80px] items-center ">
            <div className="">
                <SideBard />
            </div>
            <div className="">
                <h1 className="text-center text-4xl text-white font-bold ">
                    ezzForm
                </h1>
            </div>
            <div className="flex justify-end items-center mr-5">
                <Link to="PerfilPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user-circle"
                        width="50"
                        height="50"
                        viewBox="0 0 25 25"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}
