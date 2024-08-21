'use client'

import ordersService from "@/services/orders";
import { Button, Col, DatePicker, Form, FormProps, Input, Row } from "antd";
import { FC, useState } from "react";

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
    onClose: () => void
}

export const CreateModal: FC<ModalCreateProps> = ({ onClose }) => {
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
        ordersService.create(payload)
            .then(() => {
                setloading(false)
                onClose();
                form.resetFields();
            })
            .catch(() => setloading(false))
    };

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
                    >
                        <Input type="number" />
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