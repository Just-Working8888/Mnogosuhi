import React from 'react';
import { Card, Image, Rate, Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.scss'
import logo from '../../../assets/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'

const { Meta } = Card;

const CardSceleton: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.card}>
            <div className={classes.card_block}>
                <div className={classes.card_block_image}>
                    <Image fallback={logo} width={"100%"} style={{ objectFit: "cover" }} height={270} src={logo} />
                </div>
                <div className={classes.card_block_title}>
                    <h1><Skeleton /></h1>
                    <div className={classes.card_block_title_price}>
                        <Skeleton />
                    </div>
                </div>
            </div>
            <p>
                <Skeleton />
                <Skeleton />
            </p>
            <br />
            <Skeleton />

        </div>
    )
}

export default CardSceleton;