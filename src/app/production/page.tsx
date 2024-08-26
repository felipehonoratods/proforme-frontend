'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Table } from "./components/table";
import { Header } from "./components/header";
import { Skeleton } from "antd";

export default function Production() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setloading] = useState(false);

    const listAll = () => {
        setloading(true);
        ordersService.list(false).then(data => {
            setTimeout(() => {
                setOrders(data)
                setloading(false);
            }, 2000);
        });
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            <Header listAll={listAll} />
            {loading ?
                <Skeleton />
                :
                <Table data={orders} listAll={listAll} />
            }
        </React.Fragment>
    )
}