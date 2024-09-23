import SideBard from "./SideBard"
export default function Header() {
  return (
    <header className="grid grid-cols-3 bg-secundario1 py-5 fixed top-0 left-0 right-0 shadow-sm">
        <div>
            <SideBard/>
        </div>
        <div >
            <h1 className="text-center text-4xl text-white font-bold"> ezzForm</h1>
        </div>
    </header>
  )
}
