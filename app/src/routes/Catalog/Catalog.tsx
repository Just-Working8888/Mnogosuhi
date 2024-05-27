import { Avatar, Button, Card, Flex, Image, Input, Segmented, Typography } from "antd";
import classes from "./Catalog.module.scss";
import { FC, useState } from "react";
import { AppstoreOutlined, BarsOutlined, CarOutlined, EditOutlined, EnvironmentOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { foods } from "data/test/testData";
import Meta from "antd/es/card/Meta";
import { BreadCrumps, ProduckCard, ProductSection, PromotionSection } from "Components";



const Catalog: FC = () => {

    return (
        <>
            <BreadCrumps title='Mnogosushi menu.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Menu', href: '/catalog' }]} />
            <div className={classes.main}>

                <div className={classes.main_row}>
                    <ProductSection
                        title="Starters"
                        desprrition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
                        data={foods.slice(0, 8)}
                    />
                    <ProductSection
                        title="Main Dishes"
                        desprrition="Consectetur numquam poro nemo veniam
                    eligendi rem adipisci quo modi."
                        data={foods.slice(8, 16)}
                    />
                    <ProductSection
                        title="Drinks"
                        desprrition="Consectetur numquam poro nemo veniam
                    eligendi rem adipisci quo modi."
                        data={foods.slice(8, 16)}
                    />

                    <ProductSection
                        title="Desserts"
                        desprrition="Consectetur numquam poro nemo veniam
                    eligendi rem adipisci quo modi.
                    "
                        data={foods.slice(8, 16)}
                    />
                </div>
                <PromotionSection />
            </div>
        </>
    );
};

export default Catalog;
