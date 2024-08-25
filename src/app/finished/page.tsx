'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Header } from "./components/header";
import { Table } from "./components/table";

export default function Finished() {
    const [orders, setOrders] = useState<Order[]>([]);

    const listAll = () => {
        ordersService.list(true).then(data => {
            setOrders(data)
        })
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Table data={orders} />
        </React.Fragment>
    )
}