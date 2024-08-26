'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Table } from "./components/table";
import { Header } from "./components/header";

export default function Production() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [lastOrderNumber, setLastOrderNumber] = useState<string>()

    const listAll = () => {
        ordersService.list(false).then(data => {
            setOrders(data)
        });
        ordersService.listAll().then(data => {
            if (data.length > 0) {
                setLastOrderNumber(data[data.length - 1].order_number)
            }
        });
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            <Header listAll={listAll} lastOrderNumber={lastOrderNumber} />
            <Table data={orders} listAll={listAll} />
        </React.Fragment>
    )
}