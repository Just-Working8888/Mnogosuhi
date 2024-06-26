import React from 'react';
import { Button, Card, Flex, Image, Rate, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './ProductTableCard.module.scss'
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'store/hook';
import { addCartItem } from 'store/reducers/cartReduser';
import { addTableOrderItem } from 'store/reducers/TableOrderReduser';

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    price: string;
    desprition: string
    rate: number
    id: string
}
const ProductTableCard: React.FC<CardType> = ({ image, title, id, price, desprition, rate }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function add() {
        const data = {
            quantity: 1,
            total: +price,
            table: Number(localStorage.getItem('table_key')) as any,
            product: +id
        }
        dispatch(addTableOrderItem({ data: data })).then(() => {
            message.success('Товар успешно добвлен')
        })
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
            <p   onClick={() => navigate(`/food/${id}`)}>
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

export default ProductTableCard;