import React, { FC } from 'react'
import classes from './CookerCard.module.scss'
import { Card, Flex, Image } from 'antd'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { IEmployes } from 'store/models/IEmployees'

const CookerCard: FC<{ item: IEmployes }> = ({ item }) => {
    return (
        <div className={classes.main}>
            <Card className={classes.main_image} style={{ paddingBottom: "0px !important" }}>
                <img src={item.image} />
                <div className={classes.main_image_cerkle}></div>
            </Card>
            <br />
            <h1>{item.name}</h1>
            <p>{item.job_title}</p>
            <br />
            <Flex justify='center' gap={15}>


                <TwitterOutlined />


                <InstagramOutlined />


                <FacebookOutlined />


                <YoutubeOutlined />


            </Flex>
        </div>
    )
}

export default CookerCard
