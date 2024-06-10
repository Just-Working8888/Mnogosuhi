import PromotionCard from 'Components/PromotionCard/PromotionCard'
import { Flex } from 'antd'
import React, { FC, useEffect } from 'react'
import classes from './Promotion.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchSettingPromotion } from 'store/reducers/settingReduser'

const PromotionSection: FC = () => {
    const data = useAppSelector((state) => state.setting.promotion)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchSettingPromotion({}))
    }, [])
    return (
        <Flex className={classes.main_continer} gap={30}>
            {
                data.results.slice(0, 2).map((item) => <PromotionCard
                    title={item.sub_title}
                    desprition={item.text}
                    discount={item.title}
                    image={item.image}
                    url={item.url}
                />)
            }
        </Flex>
    )
}

export default PromotionSection
