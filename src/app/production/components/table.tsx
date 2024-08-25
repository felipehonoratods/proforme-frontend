'use client'

import React, { FC, useState } from 'react';
import { Col, Modal, Row, Select, Table as TableAntd, Tooltip } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, DeleteOutlined, EditOutlined, WarningFilled } from '@ant-design/icons';
import { Order, OrderCreated } from '@/services/orders/interface';
import { calcDateDifference, dateText } from '@/shared/utils';
import ordersService from '@/services/orders';
import { CreateModal } from './modal';

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
    const orders: Order[] = [
        {
          order_number: "001",
          client: "Client A",
          deadline: "2024-09-01",
          created_at: "2024-08-01",
          items: 10,
          amount: 1000,
          amount_pieces: 50,
          observations: "Prioridade alta",
          mp_status: 1,
          cut_status: 1,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-02",
          cut_finished_at: "2024-08-03",
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b01"
        },
        {
          order_number: "002",
          client: "Client B",
          deadline: "2024-09-05",
          created_at: "2024-08-02",
          items: 20,
          amount: 2000,
          amount_pieces: 100,
          observations: null,
          mp_status: 1,
          cut_status: 1,
          stamping: 1,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-03",
          cut_finished_at: "2024-08-04",
          stamping_finished_at: "2024-08-05",
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b02"
        },
        {
          order_number: "003",
          client: "Client C",
          deadline: "2024-09-10",
          created_at: "2024-08-03",
          items: 15,
          amount: 1500,
          amount_pieces: 75,
          observations: "Urgente",
          mp_status: 1,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-04",
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b03"
        },
        {
          order_number: "004",
          client: "Client D",
          deadline: "2024-09-15",
          created_at: "2024-08-04",
          items: 5,
          amount: 500,
          amount_pieces: 25,
          observations: null,
          mp_status: 1,
          cut_status: 1,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-05",
          cut_finished_at: "2024-08-06",
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b04"
        },
        {
          order_number: "005",
          client: "Client E",
          deadline: "2024-09-20",
          created_at: "2024-08-05",
          items: 25,
          amount: 2500,
          amount_pieces: 125,
          observations: "Verificar material",
          mp_status: 0,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: null,
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b05"
        },
        {
          order_number: "006",
          client: "Client F",
          deadline: "2024-09-25",
          created_at: "2024-08-06",
          items: 8,
          amount: 800,
          amount_pieces: 40,
          observations: "Entregar até dia 20",
          mp_status: 1,
          cut_status: 1,
          stamping: 1,
          chain_stitch_status: 1,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-07",
          cut_finished_at: "2024-08-08",
          stamping_finished_at: "2024-08-09",
          chain_stitch_finished_at: "2024-08-10",
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b06"
        },
        {
          order_number: "007",
          client: "Client G",
          deadline: "2024-09-30",
          created_at: "2024-08-07",
          items: 12,
          amount: 1200,
          amount_pieces: 60,
          observations: "Entrega urgente",
          mp_status: 0,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: null,
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b07"
        },
        {
          order_number: "008",
          client: "Client H",
          deadline: "2024-10-05",
          created_at: "2024-08-08",
          items: 30,
          amount: 3000,
          amount_pieces: 150,
          observations: null,
          mp_status: 1,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-09",
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b08"
        },
        {
          order_number: "009",
          client: "Client I",
          deadline: "2024-10-10",
          created_at: "2024-08-09",
          items: 18,
          amount: 1800,
          amount_pieces: 90,
          observations: "Atenção ao acabamento",
          mp_status: 1,
          cut_status: 1,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-10",
          cut_finished_at: "2024-08-11",
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b09"
        },
        {
          order_number: "010",
          client: "Client J",
          deadline: "2024-10-15",
          created_at: "2024-08-10",
          items: 22,
          amount: 2200,
          amount_pieces: 110,
          observations: "Verificar com fornecedor",
          mp_status: 1,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: "2024-08-11",
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b10"
        },
        {
          order_number: "011",
          client: "Client K",
          deadline: "2024-10-20",
          created_at: "2024-08-11",
          items: 6,
          amount: 600,
          amount_pieces: 30,
          observations: "Entrega pós-feriado",
          mp_status: 0,
          cut_status: 0,
          stamping: 0,
          chain_stitch_status: 0,
          needlework_status: 0,
          finishing_status: 0,
          delivery_status: 0,
          mp_finished_at: null,
          cut_finished_at: null,
          stamping_finished_at: null,
          chain_stitch_finished_at: null,
          needlework_finished_at: null,
          finishing_finished_at: null,
          delivery_finished_at: null,
          _id: "64ffbb10d7b9300017768b11"
        }
    ];
    const [order, setOrder] = useState<Order>();
    const [open, setOpen] = useState(false);

    const handleOpenEdit = (order: Order) => {
        setOrder(order);
        setOpen(true);
    }

    const handleCancel = () => {
        setOpen(false);
        listAll();
    };

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
        <>
            <TableAntd dataSource={orders} rowKey={'_id'}>
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
                    return calcDateDifference(record.deadline, new Date().toISOString());
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
                } dataIndex="_id" key="_id" render={(value: string, record: Order) => {
                    return (
                        <Row justify={'space-around'}>
                            <Col>
                                <EditOutlined style={{ color: 'yellowgreen', cursor: 'pointer' }} onClick={(e) => {
                                    e.preventDefault();
                                    handleOpenEdit(record);
                                }} />
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
            <Modal
                title={
                    <span className="text-blue font-sans">EDITAR PEDIDO</span>
                }
                open={open}
                footer={null}
                onCancel={handleCancel}
                width={'50%'}
            >
                <CreateModal onClose={handleCancel} order={order} />
            </Modal>
        </>
    )
}