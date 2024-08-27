'use client'

import React, { useEffect, useState } from "react";
import { Order } from "@/services/orders/interface";
import ordersService from "@/services/orders";
import { Table } from "./components/table";
import { Header } from "./components/header";
import { Skeleton } from "antd";
import { incrementedNumber } from "@/shared/utils";

export default function Production() {
    const [lastOrderNumber, setLastOrderNumber] = useState<string>("00001");
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setloading] = useState(false);

    const listAll = () => {
        setloading(true);
        ordersService.list(false).then(data => {
            setTimeout(() => {
                setOrders(data)
                setloading(false);
            }, 1000);
        });
        ordersService.listAll().then(data => {
            if (data.length > 0) {
                setLastOrderNumber(incrementedNumber(data[data.length - 1].order_number));
            }
        });
    }

    useEffect(() => {
        listAll();
    }, []);

    return (
        <React.Fragment>
            {loading ?
                <Skeleton />
                :
                <>
                    <Header listAll={listAll} lastOrderNumber={lastOrderNumber} />
                    <Table data={orders} listAll={listAll} />
                </>
            }
        </React.Fragment>
    )
}