import React, { FC, useState } from 'react'
import classes from './AddRewue.module.scss'
import { Card, Form, Input, Rate, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea';

type FieldType = {
    term_of_use?: string;
    text?: string;
    disadvantages?: string;
    advantages?: string
};

const AddRewue: FC = () => {
    const [form] = Form.useForm();
    const [star, setStar] = useState(0)
    return (
        <Card className={classes.form}>
            <Form
                name="basic"
                form={form}

                autoComplete="off"
            >


                <Rate onChange={setStar} value={star} />
                <p>Оцените товар:</p>



                <Form.Item<FieldType>

                    name="text"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <TextArea style={{ padding: '10px' }} placeholder="Отзыв" />
                </Form.Item>

                <Form.Item
                    name="advantages"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input style={{ padding: '10px' }} placeholder="Достоинства" />
                </Form.Item>

                <Form.Item<FieldType>

                    name="disadvantages"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input style={{ padding: '10px' }} placeholder="Недостатки" />
                </Form.Item>
                <Form.Item name="term_of_use" rules={[{ required: true, message: 'Please select your agreement with the terms of use' }]}>
                    <Select style={{ height: '40px' }} placeholder="Select your agreement">
                        <Select.Option value="день">день</Select.Option>
                        <Select.Option value="неделю">неделю</Select.Option>
                        <Select.Option value="месяц">месяц</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default AddRewue
