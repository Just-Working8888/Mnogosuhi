import React, { FC, useEffect } from 'react'
import classes from './Shop.module.scss'
import { BreadCrumps, MainCategoriesSection, PromotionSection, ShoppingSlider } from 'Components'
import { Button, Flex } from 'antd'
import CookerCard from 'Components/CookerCard/CookerCard'
import SectionHead from 'Components/SectionHead/SectionHead'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchProduct, fetchProductPromo } from 'store/reducers/productReduser'
import { fetchEmployes } from 'store/reducers/employeesReduser'
const Shop: FC = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.product.promo.results)
    const foods = useAppSelector((state) => state.product.data.results)
    const employes = useAppSelector((state) => state.employes.data)


    useEffect(() => {
        dispatch(fetchProductPromo({}))
        dispatch(fetchProduct({ filters: 'category=3' }))
        dispatch(fetchEmployes({}))
    }, [])
    return (
        <div>
            <BreadCrumps title='Online shop' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }]} />

            <div className={classes.main}>
                <br />
                <MainCategoriesSection />
                <ShoppingSlider data={data} />
                <ShoppingSlider data={foods} />
                <div>

                    <SectionHead
                        href="/about"
                        title="They will cook for you"
                        despririon="Consectetur numquam poro nemo veniameligendi rem adipisci quo modi."
                        btn="more about us"
                    />
                    <br /><br />
                    <Flex wrap="wrap" >
                        {employes.results.slice(0, 4).map((item) => <CookerCard item={item} />)}
                    </Flex>

                </div>
                <div></div>
            </div>
            <PromotionSection />
        </div>
    )
}

export default Shop
