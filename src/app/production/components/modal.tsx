'use client'

import ordersService from "@/services/orders";
import { Order } from "@/services/orders/interface";
import { incrementedNumber } from "@/shared/utils";
import { Button, Col, DatePicker, Form, FormProps, Input, Row } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";

type FieldType = {
    order_number?: number;
    client?: string;
    deadline?: Date;
    observations?: string;
    amount?: number;
    created_at?: Date;
    amount_pieces?: number;
    items?: number;
};

interface ModalCreateProps {
    onClose: () => void;
    order?: Order;
    lastOrderNumber?: string;
}

export const CreateModal: FC<ModalCreateProps> = ({ onClose, order, lastOrderNumber }) => {
    const [loading, setloading] = useState(false);
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setloading(true)
        const payload = {
            order_number: values.order_number,
            client: values.client,
            deadline: values.deadline,
            observations: values.observations,
            amount: values.amount,
            created_at: values.created_at,
            amount_pieces: values.amount_pieces,
            items: values.items
        }
        if (order?._id) {
            ordersService.update({...payload, _id: order._id})
                .then(() => {
                    setloading(false)
                    onClose();
                    form.resetFields();
                })
                .catch(() => setloading(false))
        } else {
            ordersService.create(payload)
                .then(() => {
                    setloading(false)
                    onClose();
                    form.resetFields();
                })
                .catch(() => setloading(false))
        }
    };

    useEffect(() => {
        if (order) {
            form.setFieldValue('order_number', order.order_number);
            form.setFieldValue('client', order.client);
            form.setFieldValue('deadline', dayjs(order.deadline));
            form.setFieldValue('observations', order.observations);
            form.setFieldValue('amount', order.amount);
            form.setFieldValue('created_at', dayjs(order.created_at));
            form.setFieldValue('amount_pieces', order.amount_pieces);
            form.setFieldValue('items', order.items);
        }
    }, [form, order]);

    return (
        <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className="font-bold"
        >
            <Row justify={"space-between"}>
                <Col xs={11}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>Nº PEDIDO</span>
                        }
                        name="order_number"
                        rules={[{ required: true }]}
                        initialValue={lastOrderNumber ? incrementedNumber(lastOrderNumber) : "00001"}
                    >
                        <Input type="number" disabled />
                    </Form.Item>
                </Col>
                <Col xs={11}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>CLIENTE</span>
                        }
                        name="client"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"space-between"}>
                <Col xs={8}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>VALOR</span>
                        }
                        name="amount"
                        rules={[{ required: true }]}
                    >
                        <Input prefix={
                            <span style={{ color: '#1890ff' }}>R$</span>
                        } type="number" min={0} />
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>DATA RECEBIMENTO</span>
                        }
                        name="created_at"
                        rules={[{ required: true }]}
                    >
                        <DatePicker placeholder="Selecione a data" />
                    </Form.Item>

                </Col>
                <Col xs={6}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>PRAZO ENTREGA</span>
                        }
                        name="deadline"
                        rules={[{ required: true }]}
                    >
                        <DatePicker placeholder="Selecione a data" />
                    </Form.Item>

                </Col>
            </Row>

            <Form.Item<FieldType>
                label={
                    <span style={{ color: '#1890ff' }}>OBSERVAÇÃO</span>
                }
                name="observations"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Row justify={'space-between'}>
                <Col xs={10}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>Nº ITENS</span>
                        }
                        name="items"
                        rules={[{ required: true }]}
                    >
                        <Input type="number" min={0} />
                    </Form.Item>
                </Col>
                <Col xs={10}>
                    <Form.Item<FieldType>
                        label={
                            <span style={{ color: '#1890ff' }}>Nº PEÇAS</span>
                        }
                        name="amount_pieces"
                        rules={[{ required: true }]}
                    >
                        <Input type="number" min={0} />
                    </Form.Item>
                </Col>
            </Row>

            <Row className="flex justify-center gap-3">
                <Col>
                    <Button className="font-bold text-blue font-sans" type="default" onClick={onClose}>
                        CANCELAR
                    </Button>
                </Col>

                <Col>
                    <Form.Item>
                        <Button className="font-bold font-sans" type="primary" htmlType="submit" loading={loading}>
                            ADICIONAR
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}