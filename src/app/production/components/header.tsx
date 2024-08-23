'use client'

import { Button, Modal } from "antd";
import { FC, useState } from "react";
import { CreateModal } from "./modal";

interface HeaderProps {
    listAll: () => void;
}

export const Header: FC<HeaderProps> = ({listAll}) => {
    const [open, setOpen] = useState(false);

    const handleCancel = () => {
        setOpen(false);
        listAll();
    };

    return (
        <header className="flex h-16 items-center justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-blue font-sans">PRODUÇÃO</h1>
            </div>
            <div>
                <Button className="font-bold" type="primary" onClick={() => setOpen(true)}>ADICIONAR PEDIDO</Button>
            </div>
            <Modal
                title={
                    <span className="text-blue font-sans">ADICIONAR PEDIDO</span>
                }
                open={open}
                footer={null}
                onCancel={handleCancel}
                width={'50%'}
            >
                <CreateModal onClose={handleCancel} />
            </Modal>
        </header>
    )
}