export const Content = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg dark:border-gray-700">
                {children}
            </div>
        </div>
    )
}