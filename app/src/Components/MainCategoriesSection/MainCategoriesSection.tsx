import React, { FC } from 'react'
import classes from './MainCategoriesSection.module.scss'
import { Card, Flex } from 'antd'
import MainBtn from 'Components/MainBtn/MainBtn'
import { RightCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { setCategory, setOffcet } from 'store/slices/windowSlice'
import { fetchProduct } from 'store/reducers/productReduser'
import { formatParams } from 'helpers/convertProps'
import { clearData } from 'store/slices/productSlice'

const MainCategoriesSection: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { menuprops } = useAppSelector((state) => state.window)

    function Click(id: number) {
        navigate(`/catalog`)
        dispatch(setOffcet(1))
        dispatch(setCategory(id))
        dispatch(clearData())
        setTimeout(() => {
            dispatch(fetchProduct({ filters: formatParams({ menuprops }) }))
        }, 100)

    }
    return (
        <div className={classes.main}>
            <div className={classes.main_container}>
                <Card onClick={() => Click(8)} className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/1.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Салаты
                            </h1>
                            <p>
                                Помидоры нарежьте крупными кубиками.
                                Огурцы нарежьте полукольцами.
                                Лук
                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card onClick={() => Click(5)} className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/2.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Горячие блюда
                            </h1>
                            <p>
                                Куриные грудки посолите, поперчите и обжарьте на сливочном
                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card onClick={() => Click(19)} className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/3.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Напитки
                            </h1>
                            <p>
                                В стакане растолките лимон, сахар и листья мяты.

                            </p>
                        </div>
                    </Flex>
                </Card>
                <Card onClick={() => Click(18)} className={classes.main_container_item}>
                    <Flex gap={16}>
                        <div className={classes.main_container_item_image}>
                            <div className={classes.main_container_item_image_cerkle}></div>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/categories/4.png" alt="" />
                        </div>
                        <div>
                            <h1>
                                Десерты
                            </h1>
                            <p>
                                Растопите шоколад и масло на водяной бане.
                                В миске взбейте яйца, желтки                            </p>
                        </div>
                    </Flex>
                </Card>
            </div>

        </div>
    )
}

export default MainCategoriesSection
