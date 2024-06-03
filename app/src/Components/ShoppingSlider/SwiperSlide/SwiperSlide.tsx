import React from 'react';
import { Button, Card, Flex, Image, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './SwiperSlide.module.scss'
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'store/hook';
import { addCartItem } from 'store/reducers/cartReduser';

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    price: string;
    desprition: string
    rate: number
    id: string
}
const SwiperItem: React.FC<CardType> = ({ image, title, id, price, desprition, rate }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    function add() {
        const data = {
            quantity: 1,
            total: +price,
            cart: Number(localStorage.getItem('cart_id')) as any,
            product: +id
        }
        dispatch(addCartItem({ data: data }))
    }
    return (
        <div className={classes.card}>
            <div className={classes.card_block}>
                <div className={classes.card_block_image}>
                    <Image width={"100%"} style={{ objectFit: "cover" }} height={270} src={image} />
                </div>
                <div className={classes.card_block_title}>
                    <h1>{title}</h1>
                    <div className={classes.card_block_title_price}>
                        <span>c</span>{price}
                    </div>
                </div>
            </div>
            <p>
                {desprition}
            </p>
            <br />
            <Flex justify='space-between' align='center'>
                <div className={classes.card_btnn}>
                    <RightCircleOutlined style={{ fontSize: '20px' }} />
                </div>
                <Button onClick={add} type='primary' icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}>
                    Add to cart
                </Button>
            </Flex>

        </div>
    )
}

export default SwiperItem;