'use client'

import externalOrdersService from "@/services/external_orders";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, FormProps, Input, Row } from "antd";
import { FC, useState } from "react";

type FieldType = {
    order_number?: number;
    client?: string;
    item?: ItemType[];
};

interface ModalCreateProps {
    onClose: () => void
}

interface ItemType {
    name: string;
    amount: number;
}

export const CreateModal: FC<ModalCreateProps> = ({ onClose }) => {
    const [items, setItems] = useState<ItemType[]>([{ name: '', amount: 0 }]);
    const [loading, setloading] = useState(false);
    const [form] = Form.useForm();

    const addItem = () => {
        setItems([...items, { name: '', amount: 0 }]);
    };

    const handleInputChange = (index: number, field: keyof ItemType, value: never) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setloading(true)
        const payload = {
            order_number: values.order_number,
            client: values.client,
            item: items
        }
        externalOrdersService.create(payload)
            .then(() => {
                setloading(false)
                onClose();
                form.resetFields();
                setItems([{ name: '', amount: 0 }]);
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

            {items.map((item, index) => (
                <Row justify="space-between" key={index}>
                    <Col xs={13}>
                        <Form.Item
                            label={<span style={{ color: '#1890ff' }}>ITEM</span>}
                            name={`name_${index}`}
                            rules={[{ required: true }]}
                        >
                            <Input
                                value={item.name}
                                onChange={(e) => handleInputChange(index, 'name', e.target.value as never)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={10}>
                        <Form.Item
                            label={<span style={{ color: '#1890ff' }}>QTDE</span>}
                            name={`amount_${index}`}
                            rules={[{ required: true }]}
                        >
                            <Input type="number" min={0}
                                value={item.amount}
                                onChange={(e) => handleInputChange(index, 'amount', Number(e.target.value) as never)}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            ))}

            <Button type="dashed" onClick={addItem} style={{ marginTop: 10 }}>
                <PlusCircleOutlined style={{ color: '#1890ff' }} />
            </Button>

            <Row className="flex justify-center gap-3">
                <Col>
                    <Button className="font-bold text-blue font-sans" type="default" onClick={onClose}>
                        CANCELAR
                    </Button>
                </Col>

                <Col>
                    <Form.Item>
                        <Button className="font-bold font-sans" type="primary" htmlType="submit" loading={loading}>
                            LANÇAR
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}