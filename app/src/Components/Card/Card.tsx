import React from 'react';
import { Button, Card, Flex, Image, Rate, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.scss'
import logo from '../../assets/icon/blackLogo (1).png'
import { useAppDispatch } from 'store/hook';
import { addCartItem } from 'store/reducers/cartReduser';
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    price: string;
    desprition: string
    rate: number
    id: string
}
const ProduckCard: React.FC<CardType> = ({ image, title, id, price, desprition, rate }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    function add() {
        const data = {
            quantity: 1,
            total: +price,
            cart: Number(localStorage.getItem('cart_id')) as any,
            product: +id
        }
        dispatch(addCartItem({ data: data })).then(() => message.success('товар успешно добвлен '))
    }
    return (
        <div className={classes.card}>
            <div className={classes.card_block}>
                <div className={classes.card_block_image}>
                    <Image width={"100%"} style={{ objectFit: "cover" }} height={270} src={image} />
                </div>
                <div  onClick={() => navigate(`/food/${id}`)} className={classes.card_block_title}>
                    <h1>{title}</h1>
                    <div className={classes.card_block_title_price}>
                        <span></span>{price}
                    </div>
                </div>
            </div>
            <p  onClick={() => navigate(`/food/${id}`)}>
                {desprition}
            </p>
            <br />
            <Flex justify='space-between' align='center'>
                <div onClick={() => navigate(`/food/${id}`)} className={classes.card_btnn}>
                    <RightCircleOutlined style={{ fontSize: '20px' }} />
                </div>
                <Button onClick={add} type='primary' icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}>
                    В корзину
                </Button>
            </Flex>

        </div>
    )
}

export default ProduckCard;