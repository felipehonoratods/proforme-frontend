'use client'

import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Table } from "./components/table";
import externalOrdersService from "@/services/external_orders";

export default function Shopping() {
    const [orders, setOrders] = useState<any[]>([]);

    const listAll = () => {
        externalOrdersService.list().then(data => {
            const refactoredOrders = data.flatMap(order =>
                order.item.map((item: any) => ({
                    order_number: order.order_number,
                    client: order.client,
                    item: item,
                    id: order.id
                }))
            );
            setOrders(refactoredOrders);
        })
    };

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