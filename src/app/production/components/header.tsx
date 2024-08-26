'use client'

import { Button, Modal } from "antd";
import { FC, useEffect, useState } from "react";
import { CreateModal } from "./modal";
import { Order } from "@/services/orders/interface";

interface HeaderProps {
    listAll: () => void;
    lastOrderNumber?: string;
}

export const Header: FC<HeaderProps> = ({listAll, lastOrderNumber}) => {
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
                <CreateModal onClose={handleCancel} lastOrderNumber={lastOrderNumber} />
            </Modal>
        </header>
    )
}