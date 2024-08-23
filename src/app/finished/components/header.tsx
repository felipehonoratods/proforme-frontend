import { FC } from "react"

export const Header: FC = () => {
    return (
        <header className="flex h-16 items-center justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-blue font-sans">FINALIZADOS</h1>
            </div>
        </header>
    )
}