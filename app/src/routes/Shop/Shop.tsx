import React, { FC } from 'react'
import classes from './Shop.module.scss'
import { BreadCrumps, MainCategoriesSection, PromotionSection, ShoppingSlider } from 'Components'
import { Flex } from 'antd'
import CookerCard from 'Components/CookerCard/CookerCard'
import SectionHead from 'Components/SectionHead/SectionHead'
const Shop: FC = () => {
    return (
        <div>
            <BreadCrumps title='Online shop' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }]} />
            <div className={classes.main}>
                <br />
                <MainCategoriesSection />
                <ShoppingSlider />
                <ShoppingSlider />
                <div>

                    <SectionHead
                        href="/about"
                        title="They will cook for you"
                        despririon="Consectetur numquam poro nemo veniameligendi rem adipisci quo modi."
                        btn="more about us"
                    />
                    <br /><br />
                    <Flex wrap="wrap" >
                        <CookerCard />
                        <CookerCard />
                        <CookerCard />
                        <CookerCard />
                    </Flex>

                </div>
                <div></div>
            </div>
            <PromotionSection />
        </div>
    )
}

export default Shop
