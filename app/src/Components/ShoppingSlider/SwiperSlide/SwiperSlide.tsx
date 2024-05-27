import React from 'react';
import { Button, Card, Flex, Image, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './SwiperSlide.module.scss'
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    id: string
}
const SwiperItem: React.FC<CardType> = ({ image, title, id }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.card}>
            <div className={classes.card_block}>
                <div className={classes.card_block_image}>
                    <Image src={'https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg'} />
                </div>
                <div className={classes.card_block_title}>
                    <h1>{title}</h1>
                    <div className={classes.card_block_title_price}>
                        <span>$</span>14
                    </div>
                </div>
            </div>
            <p>
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.
            </p>
            <br />
            <Flex justify='space-between' align='center'>
                <div className={classes.card_btnn}>
                    <RightCircleOutlined  style={{ fontSize: '20px' }}/>
                </div>
                <Button type='primary' icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}>
                    Add to cart
                </Button>
            </Flex>

        </div>
    )
}

export default SwiperItem;