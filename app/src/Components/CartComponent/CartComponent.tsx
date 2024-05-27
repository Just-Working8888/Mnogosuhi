import React, { useEffect, useState } from 'react';
import classes from './CartComponent.module.scss'
import { Flex, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import CartItemComponent from 'Components/CartItemComponent/CartItemComponent';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hook';
import data from '../../data/test/cart.json'

type Props = {

}

const CartComponent: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const [is_all_check, setIsAllCheck] = useState(false);
    const [cost, setCost] = useState(0);
    const [sell, setSell] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [total_cost, setTotalCost] = useState(0);

    return (
        <>

            {data.cart_items.length <= 0 && (
                <div className={classes.container}>
                    <Flex vertical justify='center' gap={20} align='center' className={classes.cart__empty}>
                        <h2>Корзина пуста</h2>
                        <p>Воспользуйтесь поиском, чтобы найти всё, что нужно.</p>
                        <Link to={'/'}>На главную</Link>
                    </Flex>
                </div>
            )}
            {data.cart_items.length > 0 && (
                <div className={classes.container}>
                    <Flex vertical gap={10} className={classes.cart__top}>
                        <Flex className={classes.cart__top1} align='center' gap={10}>
                            <h1>Корзина</h1>
                            <span>{data.cart_items.length === 1 ? '1 товар' : `${data.cart_items.length} товара`}</span>
                        </Flex>
                        <Flex className={classes.cart__top2} gap={10}>
                            <Checkbox checked={is_all_check}>Выбрать все</Checkbox>
                            <Flex gap={5} className={classes.delete__btn} align='center' onClick={() => { }}><CloseOutlined />Удалить выбранные</Flex>
                        </Flex>
                    </Flex>
                    <Flex gap={20} className={classes.cart__bottom}>
                        <Flex vertical={true} className={classes.cart__items}>
                            {data.cart_items.map(e => (
                                <CartItemComponent key={e.id} cart_item={e} />
                            ))}
                        </Flex>
                        <Flex gap={30} vertical align='start' className={classes.cart__form}>
                            <h2>Детали заказа</h2>
                            <Flex vertical className={classes.form_data}>
                                <Flex>
                                    <span>{data.cart_items.length == 1 ? '1 товар' : `${data.cart_items.length} товара`}</span>
                                    <hr />
                                    <span>{cost} с</span>
                                </Flex>
                                <Flex>
                                    <span>Скидка</span>
                                    <hr />
                                    <span>{sell} с</span>
                                </Flex>
                                <Flex>
                                    <span>Доставка</span>
                                    <hr />
                                    <span>{delivery} с</span>
                                </Flex>
                                <Flex>
                                    <span>Итого к оплате</span>
                                    <hr />
                                    <span>{total_cost} с</span>
                                </Flex>
                            </Flex>

                            <Button type='primary'>
                                <Link to={'/orderplasing'}>
                                    Перейти к оформлению
                                </Link>
                            </Button>

                        </Flex>
                    </Flex>
                </div>
            )}
        </>
    );
};

export default CartComponent;