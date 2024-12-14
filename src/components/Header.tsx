import PerfilIcon from "../icons/pefil";
import SideBard from "./SideBard";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="flex items-center justify-between bg-secundario1 py-5 fixed top-0 left-0 right-0 shadow-sm h-[80px]">
            <div className="flex items-center">
                <SideBard />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
                ezzForm
            </h1>
            <div className="flex justify-end items-center mr-5">
                <Link to="PerfilPage">
                    <PerfilIcon />
                </Link>
            </div>
        </header>
    );
}
