import React, { useEffect, useState } from "react";
import classes from './BilingTable.module.scss';
import { Input, Button, Form, Radio, Checkbox, Modal, Card, Flex } from "antd";
import { BreadCrumps } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCartItemById } from "store/reducers/cartReduser";
import { createTableBiling } from "store/reducers/tableBilingREsuser";
import { useParams } from "react-router-dom";
import { createTableOrder, fetchOrderItemById } from "store/reducers/TableOrderReduser";
import { fetchTableById } from "store/reducers/tableReduser";
const BilingTable: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal();
    const { TextArea } = Input;
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.tableCart)
    const { table } = useAppSelector((state) => state.table)
    const { id } = useParams()


    const [totalSum, setTotalSum] = useState<number>(1);
    useEffect(() => {
        setTotalSum(data.items.reduce((sum, item) => {
            return sum + Number(item?.product.price) * item.quantity;
        }, 0))
    }, [data])
    useEffect(() => {
        dispatch(fetchOrderItemById({ id: localStorage.getItem('table_key') as any }))
        dispatch(fetchTableById({ id: Number(id) }))
    }, [])


    const onFinish = async (values: any) => {
        const data = {
            table_uuid: Number(id),
            payment_method: values.payment_method,
            note: values.note,
            parent: 0,
            table_title: table.title
        };
        dispatch(createTableBiling({
            data: data
        })).then(() => {
            dispatch(createTableOrder({
                data: {
                    session_key: localStorage.getItem('session_key') as any,
                    menu_table: Number(id),
                    promo_code: true,
                    discount_amount: 0
                }
            })).then((res) => {
                localStorage.setItem('table_key', res.payload?.id)
            })
        })

    };

    return (
        <>
            <BreadCrumps title='Your order.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <section className={classes.order}>

                <div className={classes.conteiner}>

                    <div className={classes.flexConteiner}>

                        <Form onFinish={onFinish} name="complex-form" className={classes.left}>
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

export default BilingTable;