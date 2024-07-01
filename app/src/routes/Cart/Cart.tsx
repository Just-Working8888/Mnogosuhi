import CartComponent from "Components/CartComponent/CartComponent";
import React, { useEffect, useState } from "react";
import classes from './Cart.module.scss'
import { Button, Card, Flex, Typography } from "antd";
import { BreadCrumps, CartTable } from "Components";
import CartRow from "Components/CartRow/CartRow";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCartItemById } from "store/reducers/cartReduser";
import { LeftCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
interface CartProps {

}

const Cart: React.FC<CartProps> = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.cart)
    const navigate = useNavigate()
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
            <BreadCrumps title='Корзина' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <div className={classes.main}>
                <div className={classes.main_desk}>
                    <CartTable />

                </div>

                <div className={classes.main_mob}>
                    {
                        data.items.map((item) => <CartRow
                            item={item}
                            title={item.product.title}
                            desption={item.product.description}
                            quanty={item.quantity}
                            image={item.product.iiko_image}
                            price={item.product.price}
                        />)}
                </div>
                <div style={{ textAlign: 'right', marginTop: '16px', justifyContent: 'end', display: 'flex' }}>
                    <Card className='checking_cart' >
                        <Flex justify='space-between' align='center'>
                            <h3>Промежуточный итог:</h3>
                            <p>{totalSum}</p>
                        </Flex>
                        <br />
               
                        <br />
                        <Flex justify='space-between' align='center'>
                            <h3>итог:</h3>
                            <p>{totalSum}</p>
                        </Flex>
                        <br />
                        <div className='line'></div>
                        <Flex justify='space-between' align='center'>
                            <Flex align='center' gap={14}>
                                <div onClick={() => navigate('/catalog')} className='cart_to_checkout_btn'><LeftCircleOutlined /></div>
                                <h4>        Продолжить покупки</h4>
                            </Flex>
                            <Button onClick={() => navigate('/orders')} type='primary' icon={<UpCircleOutlined />}>
                                checkout
                            </Button>
                        </Flex>


                    </Card>
                </div>
            </div>
        </>
    );
}

export default Cart;