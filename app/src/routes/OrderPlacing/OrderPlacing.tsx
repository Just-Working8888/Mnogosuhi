import React, { useEffect, useState } from "react";
import classes from './OrderPlacing.module.scss';
import { Input, Button, Form, Radio, Checkbox, Modal, message, Typography, Affix, Card, Flex } from "antd";
import { BreadCrumps, OrderProducts } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { createCart, fetchCartItemById } from "store/reducers/cartReduser";
import { createBiling } from "store/reducers/bilingReduser";
import { setSessionKey } from "helpers/session_key";
const OrderPlacing: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal();
    const { TextArea } = Input;
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.cart)


    const [totalSum, setTotalSum] = useState<number>(1);
    useEffect(() => {
        setTotalSum(data.items.reduce((sum, item) => {
            return sum + Number(item?.product.price) * item.quantity;
        }, 0))
    }, [data])
    useEffect(() => {
        dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))
    }, [])


    const onFinish = async (values: any) => {
        const data = {
            billing_receipt_type: values.billing_receipt_type,
            delivery_price: "string",
            address: values.address,
            phone: values.phone,
            payment_method: values.payment_method,
            payment_code: "string",
            note: values.note,
            status: true,
            parent: 0
        };


        dispatch(createBiling({
            data: data
        })).then(() => {
            dispatch(createCart({
                data: {
                    session_key: setSessionKey(),
                    discount_amount: 1,
                    promo_code: false
                }
            })).then((res: any) => {
                console.log(res);
                dispatch(fetchCartItemById({ id: res.payload.id }))

            })
        }
        )
    };

    return (
        <>
            <BreadCrumps title='Your order.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <section className={classes.order}>

                <div className={classes.conteiner}>

                    <div className={classes.flexConteiner}>

                        <Form onFinish={onFinish} name="complex-form" className={classes.left}>
                            <h3>Ваши данные</h3>
                            <Flex gap={16} className={classes.flexForm}>
                                <Form.Item className={classes.item} name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                    <Input className={classes.input} placeholder="Телефон" size="large" />
                                </Form.Item>
                                <Form.Item className={classes.item} name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
                                    <Input className={classes.input} placeholder="Край/Область/Регион, Улица/Дом" size="large" />
                                </Form.Item>
                            </Flex>

                            <h3>Способ доставки</h3>

                            <div className={classes.flexForm}>
                                <Form.Item name="billing_receipt_type" className={classes.item} rules={[{ required: true, message: 'Please select a delivery method!' }]}>
                                    <Radio.Group>
                                        <Radio className={classes.radio} value="Доставка">Доставка курьером до двери</Radio>
                                        <Radio className={classes.radio} value="Самовывоз">Самовывоз из магазина</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>


                            <h3>Дополнительная информация</h3>
                            <Form.Item name="note">
                                <TextArea className={classes.item} rows={6} placeholder="Примечание" />
                            </Form.Item>

                            <h3>Способ оплаты</h3>

                            <Form.Item name="payment_method" rules={[{ required: true, message: 'Please select a payment method!' }]}>
                                <Radio.Group>
                                    <Radio value="bankCard">Банковской картой</Radio>
                                    <Radio value="PayPal">PayPal</Radio>
                                    <Radio value="Visa">Visa/ MasterCard</Radio>
                                    <Radio value="GooglePay">Google pay/ Apple pay</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <div className={classes.agreement}>
                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                        },
                                    ]}
                                >
                                    <Checkbox>
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
                        <OrderProducts />
                        {/* <Card className={classes.right}>

                            <div style={{ height: 'fit-content' }}>
                                <h3>Ваш заказ</h3>
                                {
                                    data.items.map((item) => (
                                        <div className={classes.flexConteiner}>
                                            <div className={classes.imgProduct}>
                                                <img src={item.product.iiko_image} alt="" />
                                            </div>
                                            <div className={classes.title}>
                                                <h2>
                                                    {item.product.title}
                                                </h2>
                                                <p><Flex gap={10}>  Количество: <strong>{item.quantity}</strong></Flex></p>
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

                        </Card> */}
                        {/* Конец правой части верстки */}

                    </div>

                </div >

                {contextHolder}
            </section ></>
    )
}

export default OrderPlacing;