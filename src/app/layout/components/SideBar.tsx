'use client'

import Link from "next/link"

export const SideBar = () => {
    return (
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
            <ul className="space-y-2 font-medium">
                <li>
                    <button type="button" className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">PEDIDOS</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <ul id="dropdown-example" className="py-2 space-y-2">
                        <li>
                            <Link href="/production" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700">PRODUÇÃO</Link>
                        </li>
                        <li>
                            <Link href="/finished" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700">FINALIZADOS</Link>
                        </li>

                    </ul>
                </li>
                <li>
                    <Link href="/shopping" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">COMPRAS</span>
                    </Link>
                </li>
            </ul>
            <ul className="space-y-2 font-medium">
                <li>
                    <Link href='/login' onClick={() => localStorage.removeItem('token')} className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}