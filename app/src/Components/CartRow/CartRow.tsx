import React, { FC, useState } from 'react'
import classes from './CartRow.module.scss'
import { Flex, Image } from 'antd'
import Counter from 'Components/CartTable/Counter'
type Props = {
    title: string
    desption: string
    image: string
    price: number
    quanty: number
    item: any
}
const CartRow: FC<Props> = ({ title, desption, image, price, quanty, item }) => {
    const [count, setCount] = useState()
    return (
        <div className={classes.cart}>
            <div className={classes.cart_info}>
                <div className={classes.cart_info_image}>
                    <Image width={90} height={90} src={image} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{desption}</p>
                </div>
            </div>
            <Flex align='center' justify='space-between'>
                <Counter record={item} />
                <div>
                   Цена {price}
                </div>
                <div>
                    <b>
                        Итого:   {quanty * price}
                    </b>
                </div>
            </Flex>

        </div>
    )
}

export default CartRow
