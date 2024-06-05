import React, { useEffect, useState } from "react";
import classes from './OrderPlacing.module.scss';
import { Input, Button, Form, Radio, Checkbox, Modal, message, Typography, Affix, Card, Flex } from "antd";
import { Link } from 'react-router-dom';
import data from '../../data/test/cart.json'
import { BreadCrumps } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCartItemById } from "store/reducers/cartReduser";
const OrderPlacing: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal();
    const { TextArea } = Input;
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.cart)


    const [totalSum, setTotalSum] = useState<number>();
    useEffect(() => {
        setTotalSum(data.items.reduce((sum, item) => {
            return sum + Number(item?.product.price) * item.quantity;
        }, 0))
    }, [data])
    useEffect(() => {
        dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))
    }, [])

    return (
        <>
            <BreadCrumps title='Your order.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <section className={classes.order}>

                <div className={classes.conteiner}>

                    <div className={classes.flexConteiner}>

                        <Form

                            name="complex-form"
                            className={classes.left}
                        >

                            <div className={classes.flexForm}>
                                <Form.Item className={classes.item}>

                                    <div className={classes.input}>
                                        <p className={classes.link}> <Button style={{ opacity: 0 }} className={classes.linkButton} type="link"><Link to={'/login'}>Войти</Link></Button>Личные данные</p>
                                        <Form.Item
                                            name="username"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input1}
                                                placeholder="Имя"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item name="email" rules={[{ required: true }]}>
                                            <Input
                                                type="email"
                                                className={classes.input}
                                                placeholder="E-mail"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>
                                </Form.Item>

                                <Form.Item className={classes.item}>

                                    <div className={classes.input}>
                                        <p className={classes.link}>У вас уже есть аккаунт? <Button className={classes.linkButton} type="link"><Link to={'/login'}>Войти</Link></Button></p>
                                        <Form.Item
                                            name="surname"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Фамилия"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="number"
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Телефон"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                </Form.Item>
                            </div>

                            <h3>Способ доставки</h3>

                            <div className={classes.flexForm}>
                                <div className={classes.item}>
                                    <Form.Item name="billing_receipt_type">
                                        <Radio.Group>
                                            <Radio className={classes.radio} value="Доставка">Доставка курьером до двери</Radio>
                                            <Radio className={classes.radio} value="Самовывоз">Самовывоз из магазина</Radio>
                                            {/* <Radio className={classes.radio} value="postOffices">Кыргыз почтасы</Radio> */}
                                        </Radio.Group>
                                    </Form.Item>
                                </div>

                                <div className={classes.item}>
                                    <p>Ылдам-Экспресс, 3 дня - бесплатно</p>
                                    <p>После 100% оплаты, бесплатно</p>
                                    <p>Отделения и почтоматы</p>
                                </div>
                            </div>

                            {/* Второй 7 инпутов */}

                            <h3>Адрес доставки</h3>

                            <div className={classes.flexForm}>
                                <Form.Item className={classes.item}>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="country"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Страна"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="city"
                                            rules={[{ required: true }]}
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input
                                                type="text"
                                                className={classes.input}
                                                placeholder="Город"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            style={{ marginBottom: 0 }}
                                            name="office"
                                            rules={[{ required: true }]}>
                                            <Input
                                                type="text"
                                                className={classes.input}
                                                placeholder="Квартира/Офис"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>
                                </Form.Item>

                                <Form.Item className={classes.item}>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="region"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Край/Область/Регион"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            style={{ marginBottom: 0 }}
                                            name="street"
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Улица/Дом"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            style={{ marginBottom: 0 }}
                                            name="index"
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Индекс"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                </Form.Item>
                            </div>

                            <Form.Item name="note">
                                <TextArea className={classes.item} rows={6} />
                            </Form.Item>

                            <h3>Способ оплаты</h3>

                            {/* Последине инпуты */}

                            <Form.Item name="radio-group">
                                <Radio.Group>
                                    <Radio value="bankCard">Банковской картой</Radio>
                                    <Radio value="PayPal">PayPal</Radio>
                                    <Radio value="Visa">Visa/ MasterCard</Radio>
                                    <Radio value="GooglePay">Google pay/ Apple pay</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <div className={classes.flexForm}>
                                <Form.Item className={classes.item}>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="usernameCart"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="Фамилия и имя на карте"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item name="bankCard" rules={[{ required: true }]}>
                                            <Input
                                                type="numberCart"
                                                className={classes.input}
                                                placeholder="Номер банковской карты"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>
                                </Form.Item>

                                <Form.Item className={classes.item}>


                                    <div className={classes.input}>
                                        <Form.Item
                                            name="idCart"
                                            style={{ marginBottom: 0 }}
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="ММ/ГГ"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>

                                    <div className={classes.input}>
                                        <Form.Item
                                            name="CVC/CVV"
                                            rules={[{ required: true }]}
                                        >
                                            <Input
                                                className={classes.input}
                                                placeholder="CVC/CVV"
                                                size="large"
                                            ></Input>
                                        </Form.Item>
                                    </div>
                                </Form.Item>
                            </div>

                            <div className={classes.agreement}>
                                <Form.Item
                                    style={{ marginBottom: '0' }}
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                        },
                                    ]}
                                >
                                    <Checkbox style={{ textWrap: 'wrap' }}>
                                        Оформляя заказ, вы принимаете условия <a href="#/">Пользовательских соглашений</a> и даете согласие на обработку персональных данных согласно <a href="#/">Политике конфиденциальности.</a>
                                    </Checkbox>
                                </Form.Item>
                            </div>


                            <Form.Item colon={false}>
                                <Button className={classes.button} type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>

                        {/* Конец левой части верстки (Форма) */}

                        {/* Начало правой части верстки */}

                        <Card className={classes.right}>

                            <div style={{ height: 'fit-content' }}>
                                <h3>Ваш заказ</h3>
                                {
                                    data.items.map((item) => (
                                        <div className={classes.flexConteiner}>
                                            <div className={classes.imgProduct}>
                                                <img src={item.product.iiko_image} alt="" />
                                            </div>

                                            <div className={classes.title}>
                                                <h3>
                                                    {item.product.title}

                                                </h3>



                                                <p>Цвет товара: Цвет товара</p>

                                                <p>Количество: <strong>{item.quantity}</strong></p>
                                            </div>
                                            <div className={classes.price}>
                                                <s>{item.product.price}</s>
                                                <h2>{item.product.price * item.quantity}</h2>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                            <br />
                            <div className='' >
                                <Flex justify='space-between' align='center'>
                                    <h3>Subtotal:</h3>
                                    <p>$999</p>
                                </Flex>
                                <br />
                                <Flex justify='space-between' align='center'>
                                    <h4>Estimated shipping:</h4>
                                    <p>$999</p>
                                </Flex>
                                <br />
                                <Flex justify='space-between' align='center'>
                                    <h3><b>Total</b>:</h3>
                                    <p>{totalSum}</p>
                                </Flex>
                            </div>

                        </Card>
                        {/* Конец правой части верстки */}

                    </div>

                </div >

                {contextHolder}
            </section ></>
    )
}

export default OrderPlacing;