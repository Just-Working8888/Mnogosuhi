import React, { FC } from 'react'
import classes from './SmailCartItem.module.scss'
import { Card, Flex } from 'antd'

type Props = {
    title: string,
    image: string,
    price: number,
}
const SmailCartItem: FC<Props> = ({ title, image, price }) => {
    return (
        <Flex className={classes.item}>
            <div className={classes.item_image}>
                <img src={image} alt="" />
            </div>
            <Card className={classes.item_title}>
                <h1>   {title}</h1>
            </Card>
            <div className={classes.item_price}>
                <span>c</span>    {price}
            </div>
        </Flex>
    )
}

export default SmailCartItem
