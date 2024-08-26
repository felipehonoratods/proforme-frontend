'use client'

import React, { FC } from 'react';
import { Table as TableAntd } from 'antd';
import { Order } from '@/services/orders/interface';
import { calcDateDifference, dateText } from '@/shared/utils';

const { Column } = TableAntd;

interface TablePropsOrders {
    data: Order[];
}

export const Table: FC<TablePropsOrders> = ({ data }) => {

    return (
        <TableAntd dataSource={data} rowKey={'_id'} scroll={{ x: 'max-content' }}>
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>PEDIDO</span>
            } dataIndex="order_number" key="order_number" className='text-blue font-bold' />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>CLIENTE</span>
            } dataIndex="client" key="client" className='text-blue font-bold' />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>PRAZO</span>
            } dataIndex="deadline" key="deadline" className='text-blue font-bold' render={(value) => {
                return dateText(value);
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>DATA ENTREGA</span>
            } dataIndex="mp_finished_at" key="mp_finished_at" className='text-blue font-bold' render={(value) => {
                return dateText(value);
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#6DB753' }}>DIAS ANTECIPADOS</span>
            } dataIndex="deadline" key="deadline" className='text-grenn font-bold' render={(value, record) => {
                return calcDateDifference(record.deadline, record.mp_finished_at) > 0 ? calcDateDifference(record.deadline, record.mp_finished_at) : null;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#DE0000' }}>DIAS ATRASADOS</span>
            } dataIndex="deadline" key="deadline" className='text-red font-bold' render={(value, record) => {
                return calcDateDifference(record.mp_finished_at, record.deadline) > 0 ? calcDateDifference(record.mp_finished_at, record.deadline) : null;
            }}  />
        </TableAntd>
    )
}