import { useState } from 'react'
export default function SideBard() {
  const [ open, setOpen ]= useState(false)
    return (
    <div className=" ">
        <button className='ml-4' onClick= {() =>setOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div className={` ${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}></div>
        
        <div className={`${open?"w-80":"w-0"} bg-secundario1 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
            <div className={`${!open && "hidden"} pt-3`}>
                <button className="ml-4 text-white mb-14 " onClick= {() =>setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
                <div className=" font-bold text-center text-white text-xl hover:bg-acento 
                    cursor-pointer py-3">Home
                        
                </div>
                <div className=" font-bold text-center text-white text-xl hover:bg-acento
                    cursor-pointer py-3">Formularios
                </div>
                <div className=" font-bold text-center text-white text-xl hover:bg-acento 
                    cursor-pointer py-3">Acerca de 
                </div>
            </div>
        </div>
    </div>
  )
}
