'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Table } from "./components/table";
import { Header } from "./components/header";

export default function Production() {
    const [orders, setOrders] = useState<Order[]>([]);

    const listAll = () => {
        ordersService.list(false).then(data => {
            setOrders(data)
        })
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            <Header listAll={listAll} />
            <Table data={orders} listAll={listAll} />
        </React.Fragment>
    )
}