import React, { FC } from 'react'
import classes from './CookerCard.module.scss'
import { Card, Flex, Image } from 'antd'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'

const CookerCard: FC = () => {
    return (
        <div className={classes.main}>
            <Card className={classes.main_image} style={{ paddingBottom: "0px !important" }}>
                <img src={"https://miller.bslthemes.com/starbelly-demo/img/team/1.png"} />
                <div className={classes.main_image_cerkle}></div>
            </Card>
            <br />
            <h1>Paul Trueman</h1>
            <p>Chef</p>
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
