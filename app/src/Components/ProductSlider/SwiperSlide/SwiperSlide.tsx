import React from 'react';
import { Card, Image, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './SwiperSlide.module.scss'

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
            <Rate value={rate} />

        </div>
    )
}

export default SwiperItem;