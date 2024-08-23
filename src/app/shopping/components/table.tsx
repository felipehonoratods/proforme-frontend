'use client'

import React, { FC } from 'react';
import { Select, Table as TableAntd } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import externalOrdersService from '@/services/external_orders';
import { ExternalOrder } from '@/services/external_orders/interface';

const { Column } = TableAntd;

interface TablePropsOrders {
    data: ExternalOrder[];
    listAll: () => void;
}

const STATUS_OPTIONS = [
    { value: 0, label: '-' },
    { value: 1, label: <CheckCircleFilled style={{ color: 'green' }} /> },
]

export const Table: FC<TablePropsOrders> = ({ data, listAll }) => {

    const handleChange = (id: string) => {
        externalOrdersService.deleteExternalOrder(id).then(() => {
            listAll();
        });
    };

    return (
        <TableAntd dataSource={data} rowKey={'id'}>
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>PEDIDO</span>
            } dataIndex="order_number" key="order_number" className='text-blue font-bold' />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>CLIENTE</span>
            } dataIndex="client" key="client" className='text-blue font-bold' />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>ITEM</span>
            } dataIndex="item" key="item" className='text-blue font-bold' render={(value) => {
                return value.name;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>QTDE</span>
            } dataIndex="item" key="item" className='text-blue font-bold' render={(value) => {
                return value.amount;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>COMPRADO</span>
            } dataIndex="mp_status" key="mp_status" render={(value: number, record) => {
                return <Select
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={() => {
                        handleChange(record.id);
                    }}
                    options={STATUS_OPTIONS} />
            }} />
        </TableAntd>
    )
}