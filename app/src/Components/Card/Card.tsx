import React from 'react';
import { Button, Card, Image, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.scss'
import logo from '../../assets/icon/blackLogo (1).png'

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
    return (
        <div className={classes.card}>
            <div className={classes.card_block}>
                <div className={classes.card_block_image}>
                    <Image fallback={logo} width={"100%"} style={{ objectFit: "cover" }} height={270} src={image} />
                </div>
                <div onClick={() => navigate(`/food/${id}`)} className={classes.card_block_title}>
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
            <br />
           
        </div>
    )
}

export default ProduckCard;