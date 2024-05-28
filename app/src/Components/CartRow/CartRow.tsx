import React, { FC, useState } from 'react'
import classes from './CartRow.module.scss'
import { Flex, Image } from 'antd'
type Props = {
    title: string
    desption: string
    image: string
    price: number
    quanty: number
}
const CartRow: FC<Props> = ({ title, desption, image, price, quanty }) => {
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
                <div className={classes.cart_count}>
                    <div className={classes.cart_count_btn}>-</div>
                    <div className={classes.cart_count_th}>{quanty}</div>
                    <div className={classes.cart_count_btn}>+</div>
                </div>
                <div>
                    Price: $ {price}
                </div>
                <div>
                    <b>
                        Total: $   {quanty * price}
                    </b>
                </div>
            </Flex>

        </div>
    )
}

export default CartRow
