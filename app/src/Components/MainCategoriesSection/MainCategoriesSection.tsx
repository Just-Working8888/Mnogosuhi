import React, { FC } from 'react'
import classes from './MainCategoriesSection.module.scss'
import { Card, Flex } from 'antd'
import MainBtn from 'Components/MainBtn/MainBtn'
import { RightCircleOutlined } from '@ant-design/icons'

const MainCategoriesSection: FC = () => {
    return (
        <div className={classes.main}>
            {/* <Flex justify='space-between' className={classes.main_head}>
                <div>
                    <h1>What do you like today?
                    </h1>
                    <p>Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.

                    </p>
                </div>
                <MainBtn title='Go shopping now' icon={<RightCircleOutlined />} size={55} />
            </Flex>
     */}
            <div className={classes.main_container}>
                <Card className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img  src="https://miller.bslthemes.com/starbelly-demo/img/categories/1.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Starter
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/2.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Starter
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/3.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Starter
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/4.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Starter
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </Flex>
                </Card>
            </div>

        </div>
    )
}

export default MainCategoriesSection
