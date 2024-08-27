'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Skeleton } from "antd";

export default function Finished() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setloading] = useState(false);

    const listAll = () => {
        setloading(true);
        ordersService.list(true).then(data => {
            setTimeout(() => {
                setOrders(data);
                setloading(false);
            }, 1000);
        })
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            <Header />
            {loading ?
                <Skeleton />
                :
                <Table data={orders} />
            }
        </React.Fragment>
    )
}