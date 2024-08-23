'use client'

import React, { FC } from 'react';
import { Col, Row, Select, Table as TableAntd, Tooltip } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, DeleteOutlined, EditOutlined, WarningFilled } from '@ant-design/icons';
import { Order, OrderCreated } from '@/services/orders/interface';
import { calcDateDifference, dateText } from '@/shared/utils';
import ordersService from '@/services/orders';

const { Column } = TableAntd;

interface TablePropsOrders {
    data: Order[];
    listAll: () => void;
}

const STATUS_OPTIONS = [
    { value: 0, label: '-' },
    { value: 1, label: <CheckCircleFilled style={{ color: 'green' }} /> },
    { value: 2, label: <CloseCircleFilled style={{ color: 'red' }} /> },
    { value: 3, label: <WarningFilled style={{ color: '#f59e0b' }} /> },
]

export const Table: FC<TablePropsOrders> = ({ data, listAll }) => {

    const handleChange = (payload: OrderCreated) => {
        ordersService.update(payload).then(() => {
            listAll();
        });
    };

    const deleteChange = (_id: string) => {
        ordersService.deleteOrder(_id).then(() => {
            listAll();
        });
    }

    return (
        <TableAntd dataSource={data} rowKey={'_id'}>
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
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>DIAS</span>
            } dataIndex="created_at" key="created_at" className='text-blue font-bold' render={(value, record) => {
                return calcDateDifference(record.deadline, value);
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>M.P.</span>
            } dataIndex="mp_status" key="mp_status" render={(value: number, record) => {
                return (<Tooltip title={value === 1 ? dateText(record.mp_finished_at) : undefined}>
                    <Select
                        disabled={value === 1}
                        defaultValue={0}
                        style={{ width: 120 }}
                        value={value}
                        onChange={(selectValue) => {

                            const payload: OrderCreated = {
                                _id: record._id,
                                mp_status: selectValue,
                                mp_finished_at: new Date().toISOString(),
                                order_number: record.order_number,
                                client: record.client,
                                deadline: record.deadline,
                                created_at: record.created_at,
                                items: record.items,
                                amount: record.amount,
                                amount_pieces: record.amount_pieces
                            }
                            handleChange(payload);
                        }}
                        options={STATUS_OPTIONS} />
                </Tooltip>
                );
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>CORTE</span>
            } dataIndex="cut_status" key="cut_status" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            cut_status: selectValue,
                            cut_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>ESTAMPARIA</span>
            } dataIndex="stamping" key="stamping" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            stamping: selectValue,
                            stamping_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>BORDADO</span>
            } dataIndex="needlework_status" key="needlework_status" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            needlework_status: selectValue,
                            needlework_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>COSTURA</span>
            } dataIndex="chain_stitch_status" key="chain_stitch_status" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            chain_stitch_status: selectValue,
                            chain_stitch_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>FINALIZAÇÃO</span>
            } dataIndex="finishing_status" key="finishing_status" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            finishing_status: selectValue,
                            finishing_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>ENTREGA</span>
            } dataIndex="delivery_status" key="delivery_status" render={(value: number, record) => {
                return <Select
                    disabled={value === 1}
                    defaultValue={0}
                    style={{ width: 120 }}
                    value={value}
                    onChange={(selectValue) => {
                        const payload: OrderCreated = {
                            _id: record._id,
                            delivery_status: selectValue,
                            delivery_finished_at: new Date().toISOString(),
                            order_number: record.order_number,
                            client: record.client,
                            deadline: record.deadline,
                            created_at: record.created_at,
                            items: record.items,
                            amount: record.amount,
                            amount_pieces: record.amount_pieces
                        }
                        handleChange(payload);
                    }}
                    options={STATUS_OPTIONS} />;
            }} />
            <Column title={
                <span className='font-bold font-sans' style={{ color: '#1890ff' }}>AÇÕES</span>
            } dataIndex="_id" key="_id" render={(value: string) => {
                return (
                    <Row justify={'space-around'}>
                        <Col>
                            <EditOutlined style={{ color: 'yellowgreen', cursor: 'pointer' }} />
                        </Col>
                        <Col>
                            <DeleteOutlined style={{ color: '#DE0000', cursor: 'pointer' }} onClick={(e) => {
                                e.preventDefault();
                                deleteChange(value);
                            }} />
                        </Col>
                    </Row>
                )
            }} />
        </TableAntd>
    )
}