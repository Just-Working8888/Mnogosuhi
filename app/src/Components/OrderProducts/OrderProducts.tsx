import { Card, Flex, Image } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import classes from './OrderPriducts.module.scss'
import { useAppSelector } from 'store/hook'

const OrderProducts: FC = () => {
    const { data } = useAppSelector((state) => state.cart)
    const [totalSum, setTotalSum] = useState<number>(1);
    useEffect(() => {
        setTotalSum(data.items.reduce((sum, item) => {
            return sum + Number(item?.product.price) * item.quantity;
        }, 0))
    }, [data])
    return (
        <Card title={<Flex justify='space-between' className={classes.head}>
            <h1>заказ</h1>
            <h1>Total</h1>
        </Flex>} className={classes.order}>
            <div>
                {data.items.map((item) =>
                    <div className={classes.order_item}>
                        <Flex gap={10} align='center'>
                            <div className={classes.order_item_image}>
                                <Image src={item.product.iiko_image} />
                            </div>
                            <div>
                                <h2>{item.product.title}</h2>
                                <p>x {item.quantity}</p>
                            </div>
                        </Flex>

                        <b>{item.product.price * item.quantity}</b>
                    </div>
                )}
            </div>
            <div className={classes.foot}>

                <h2>Subtotal:      <p>{totalSum}</p></h2>

                <h2>Subtotal:      <h2>{totalSum}</h2></h2>


            </div>
        </Card>
    )
}

export default OrderProducts
