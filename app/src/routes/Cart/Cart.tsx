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
const data = [
    {
        key: '1',
        name: {
            title: 'Product 1',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg',
            descriptions: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
        },
        price: 50,
        quantity: 1,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: {
            title: 'Product 2',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/2.jpg',
            descriptions: 'The Koss Porta Pro is a lightweight, on-ear headphone with a retro design and great sound quality.'
        },
        price: 75,
        quantity: 2,
        tags: ['cool', 'tech'],
    },
    {
        key: '1',
        name: {
            title: 'Product 1',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg',
            descriptions: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
        },
        price: 50,
        quantity: 1,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: {
            title: 'Product 2',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/2.jpg',
            descriptions: 'The Koss Porta Pro is a lightweight, on-ear headphone with a retro design and great sound quality.'
        },
        price: 75,
        quantity: 2,
        tags: ['cool', 'tech'],
    },
    {
        key: '3',
        name: {
            title: 'Product 3',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/3.jpg',
            descriptions: 'The Logitech MX Master 3 is a premium wireless mouse with advanced features and ergonomic design.'
        },
        price: 100,
        quantity: 1,
        tags: ['high-tech', 'office'],
    },
];
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
            <BreadCrumps title='Your order..' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
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
                            <h3>Subtotal:</h3>
                            <p>{totalSum}</p>
                        </Flex>
                        <br />
                        <Flex justify='space-between' align='center'>
                            <h4>Estimated shipping:</h4>
                            <p>999</p>
                        </Flex>
                        <br />
                        <Flex justify='space-between' align='center'>
                            <h3>Total:</h3>
                            <p>{totalSum}</p>
                        </Flex>
                        <br />
                        <div className='line'></div>
                        <Flex justify='space-between' align='center'>
                            <Flex align='center' gap={14}>
                                <div onClick={() => navigate('/shop')} className='cart_to_checkout_btn'><LeftCircleOutlined /></div>
                                <h4>         Continue shopping</h4>
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