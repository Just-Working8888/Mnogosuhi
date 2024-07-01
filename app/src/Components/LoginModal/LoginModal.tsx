import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import classes from './LoginModal.module.scss';
import { useAppDispatch } from 'store/hook';
import { loginAsync } from 'store/reducers/authRedusers';
import { setCookie } from 'helpers/cookies';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LoginModal: React.FC<{ close: Function }> = ({ close }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        try {
            setLoading(true);
            const response = await dispatch(loginAsync({ username: values.username, password: values.password }));
            if (response.payload.access) {
                message.success('Login successful');
            }
            console.log(response);

            setCookie('access_token', response.payload.access, 30);
            localStorage.setItem('user_id', response.payload.user_id);
            close()
        } catch (err: any) {
            if (axios.isAxiosError(err) && err.response) {
                console.log(err.response.data.message || 'Ошибка авторизации.');
            } else {
                console.log('Ошибка соединения с сервером.');
            }
            message.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };


    return (

        <div className={classes.form}>

            <div className={classes.icon}>
                <UserOutlined style={{ fontSize: '50px', color: "white" }} />
            </div>

            <div className={classes.title}>
                <h2>Добро пожаловать!</h2>
                <p>Войдите в свою учетную запись, чтобы продолжить</p>
            </div>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователья" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <div className={classes.formBlock}>
                        <div>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запомнить меня</Checkbox>
                            </Form.Item>
                        </div>

                        <div>
                            <a className="login-form-forgot" href="#/">
                                Забыл пароль
                            </a>
                        </div>
                    </div>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" className="login-form-button" block>
                        Войти
                    </Button>
                    или <a href="#/"> <Link to={'/signUp'}>зарегистрироваться сейчас!</Link></a>
                </Form.Item>
            </Form>
        </div>


    );
};

export default LoginModal;