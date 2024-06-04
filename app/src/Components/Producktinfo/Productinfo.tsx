import React, { FC } from 'react'
import classes from './Productinfo.module.scss'
import { Button, Card, Flex, Image, Rate } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppSelector } from 'store/hook'

const Productinfo: FC = () => {
    const { product } = useAppSelector((state) => state.product)

    return (
        <div className={classes.main}>
            <div className={classes.main_left}>
                <Image height={"50vh"} src={product.iiko_image} />

            </div>
            <div className={classes.main_right}>
                <div className={classes.main_right_title}>
                    <Card style={{ width: "100%" }}>
                        <h1>    {product.title}</h1>
                    </Card>
                    <div className={classes.main_right_title_price}>
                        <span>c</span> {product.price}
                    </div>
                </div>
                <br />
                <Flex align='center' gap={10}>
                    <Rate value={1} />
                    <p>(4 ratings)</p>
                </Flex>
                <br />
                <p>{product.description}</p>
                <br />
                <Flex className={classes.flex} justify='space-between'>
                    <div className={classes.main_right_item}>
                        <h1>01</h1>
                        <h2>Add to the cart and place an order</h2>
                        <h3>Porro comirton pera nemo veniam</h3>
                    </div>
                    <div className={classes.main_right_item}>
                        <h1>01</h1>
                        <h2>Add to the cart and place an order</h2>
                        <h3>Porro comirton pera nemo veniam</h3>
                    </div>
                    <div className={classes.main_right_item}>
                        <h1>01</h1>
                        <h2>Add to the cart and place an order</h2>
                        <h3>Porro comirton pera nemo veniam</h3>
                    </div>
                </Flex>
                <br />
                <br />
                <Flex gap={16}>
                    <Flex align='center'>
                        <div className={classes.main_right_toggle}>-</div>
                        <div className={classes.main_right_count}>
                            4
                        </div>
                        <div className={classes.main_right_toggle}>+</div>
                    </Flex>
                    <Button type='primary'>
                        <Flex gap={16}>
                            <ShoppingCartOutlined style={{ fontSize: 24 }} />
                            Add to cart
                        </Flex>
                    </Button>
                </Flex>
            </div>
        </div >
    )
}

export default Productinfo
