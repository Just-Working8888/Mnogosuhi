import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import classes from './ContactForm.module.scss'
import { UpCircleOutlined } from '@ant-design/icons';
import { AnimateKeyframes } from 'react-simple-animate';
const { TextArea } = Input;

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: ContactFormValues) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={classes.mainn}>
            <AnimateKeyframes
                play
                pause={false}
                duration={5} // Продолжительность анимации в секундах
                easeType="ease-in-out" // Тип анимации
                iterationCount="infinite" // Количество повторений (бесконечно)
                direction="alternate" // Направление анимации (вперед и назад)
                keyframes={[
                    'transform: translateY(0px) translateX(0px)', // Начальная позиция
                    'transform: translateY(-50px) translateX(5px)' // Конечная позиция
                ]}
            >
                <img style={{ position: 'absolute', right: '-29%', }} width={150} src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-salmon-fish-sushi-vector-design-png-image_6472855.png" alt="" />
            </AnimateKeyframes>
            <div className={classes.fd}>
                <h1>Send Message</h1>
                <Form
                    form={form}
                    name="contact"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <TextArea placeholder="Message" rows={4} />
                    </Form.Item>
                </Form>
                <p>
                    *We promise not to disclose your
                    personal information to third parties.
                </p>
                <br />
                <Button icon={<UpCircleOutlined />} className={classes.mainn_btn} type="primary" htmlType="submit" >
                    Submit
                </Button>
            </div>
            <AnimateKeyframes
                play
                pause={false}
                duration={4} // Продолжительность анимации в секундах
                easeType="ease-in-out" // Тип анимации
                iterationCount="infinite" // Количество повторений (бесконечно)
                direction="alternate" // Направление анимации (вперед и назад)
                keyframes={[
                    'transform: translateY(0px) translateX(0px)', // Начальная позиция
                    'transform: translateY(-100px) translateX(15px)' // Конечная позиция
                ]}
            >
                <div className={classes.circle}></div>
            </AnimateKeyframes>
            <AnimateKeyframes
                play
                pause={false}
                duration={3} // Продолжительность анимации в секундах
                easeType="ease-in-out" // Тип анимации
                iterationCount="infinite" // Количество повторений (бесконечно)
                direction="alternate" // Направление анимации (вперед и назад)
                keyframes={[
                    'transform: translateY(0px) translateX(0px)', // Начальная позиция
                    'transform: translateY(-50px) translateX(5px)' // Конечная позиция
                ]}
            >
                <div className={classes.cerckle2}></div>
            </AnimateKeyframes>
            <AnimateKeyframes
                play
                pause={false}
                duration={5} // Продолжительность анимации в секундах
                easeType="ease-in-out" // Тип анимации
                iterationCount="infinite" // Количество повторений (бесконечно)
                direction="alternate" // Направление анимации (вперед и назад)
                keyframes={[
                    'transform: translateY(0px) translateX(0px)', // Начальная позиция
                    'transform: translateY(-50px) translateX(5px)' // Конечная позиция
                ]}
            >
                <img style={{ position: 'absolute', top: -100, right: 0 }} width={100} src="https://images.vexels.com/media/users/3/230458/isolated/preview/e6c977c2fd1f7492e9f21d43f2166f3d-chopsticks-and-sushi-flat.png" alt="" />
            </AnimateKeyframes>
        </div >
    );
};

export default ContactForm;
