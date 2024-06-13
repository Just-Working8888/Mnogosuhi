import React, { useEffect, useState } from "react";
import classes from './OrderPlacing.module.scss';
import { Input, Button, Form, Radio, Checkbox, Modal, message, Typography, Affix, Card, Flex, Select } from "antd";
import { BreadCrumps, Map, OrderProducts } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { createCart, fetchCartItemById } from "store/reducers/cartReduser";
import { createBiling } from "store/reducers/bilingReduser";
import { setSessionKey } from "helpers/session_key";
import { fetchAdresses, fetchAdressesById } from "store/reducers/adressesReduser";
import { log } from "console";
import { createDelivary } from "store/reducers/delivaryReduser";
import { setAdressTitle } from "store/slices/adressesSlice";
const OrderPlacing: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal();
    const adresses = useAppSelector((state) => state.adresses.data)
    const points = useAppSelector((state) => state.point)
    const delivery = useAppSelector((state) => state.delivary.data)
    const AdressTitle = useAppSelector((state) => state.adresses.adressTitle)
    const [query, setQuery] = useState('')
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

    useEffect(() => {
        dispatch(fetchAdresses({ query: query }))
    }, [query])
    console.log(points.adressPoint);

    useEffect(() => {
        dispatch(createDelivary({ data: { lon: `${points.adressPoint[0]}`, lat: `${points.adressPoint[1]}` } }))
    }, [points])
    const onFinish = async (values: any) => {
        const data = {
            billing_receipt_type: values.billing_receipt_type,
            delivery_price: delivery.price,
            address: AdressTitle,
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
    const onChange = (value: any) => {
        console.log(value);

        dispatch(fetchAdressesById({ itemId: +value }))
    };

    const onSearch = (value: string) => {
        setQuery(value)
    };
    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    console.log(AdressTitle);

    return (
        <>
            <BreadCrumps title='Your order.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />

            <section className={classes.order}>

                <div className={classes.conteiner}>

                    <div className={classes.flexConteiner}>

                        <Form onFinish={onFinish} name="complex-form" className={classes.left}>
                            <Map />
                            <br />
                            <h3>Ваши данные</h3>
                            <Flex gap={16} className={classes.flexForm}>
                                <Form.Item className={classes.item} name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                    <Input className={classes.input} placeholder="Телефон" size="large" />
                                </Form.Item>
                                <Form.Item className={classes.item} name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
                                    {/* <Input onChange={(e) => setQuery(e.target.value)} className={classes.input} placeholder="Край/Область/Регион, Улица/Дом" /> */}
                                    <Select
                                        showSearch
                                        className={'select'}
                                        size="large"
                                        optionFilterProp="children"

                                        placeholder={AdressTitle}
                                        onChange={onChange}
                                        style={{ background: '#F9FAFC' }}
                                        onSearch={onSearch}
                                        searchValue={query}
                                        filterOption={filterOption}
                                        options={adresses?.result?.items?.map((item: any) => {
                                            return { value: item.id, label: item.full_name }
                                        })}
                                    />
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
                        <OrderProducts data={data} />
                    </div>

                </div>
                {contextHolder}
            </section ></>
    )
}

export default OrderPlacing;