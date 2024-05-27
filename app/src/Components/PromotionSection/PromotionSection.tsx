import PromotionCard from 'Components/PromotionCard/PromotionCard'
import { Flex } from 'antd'
import React, { FC } from 'react'
import classes from './Promotion.module.scss'

const PromotionSection: FC = () => {
    return (
        <Flex className={classes.main_continer} gap={30}>
            <PromotionCard
                title='Discount for all* burgers!'
                desprition='*Et modi itaque praesentium.'
                discount={'- 50 %'}
                image='https://miller.bslthemes.com/starbelly-demo/img/illustrations/burger.png'
            />
            <PromotionCard
                title='Visit Starbelly and get your coffee*'
                desprition='*Et modi itaque praesentium.'
                discount={'For free!'}
                image='https://miller.bslthemes.com/starbelly-demo/img/illustrations/cup.png'
            />
        </Flex>
    )
}

export default PromotionSection
