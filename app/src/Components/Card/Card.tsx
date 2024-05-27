import React from 'react';
import { Card, Image, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.scss'

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    id: string
}
const ProduckCard: React.FC<CardType> = ({ image, title, id }) => {
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, debitis. Ipsa quo optio minima cum earum reprehenderit, ab, sunt repellat blanditiis dolorem, enim quidem praesentium omnis architecto temporibus ratione eos.
            </p>
            <br />
            <Rate value={3.5} />

        </div>
    )
}

export default ProduckCard;