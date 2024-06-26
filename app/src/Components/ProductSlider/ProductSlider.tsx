import React, { FC } from 'react'
import classes from './ProductSection.module.scss'
import ProduckCard from 'Components/Card/Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
//@ts-ignore
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperItem from './SwiperSlide/SwiperSlide';
import { Flex } from 'antd';
import MainBtn from 'Components/MainBtn/MainBtn';
import { LeftOutlined, RightCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IProduct } from 'store/models/IProduct';

SwiperCore.use([Navigation]);
const ProductSlider: FC<{ data: IProduct[] }> = ({ data }) => {
    return (
        <div>
            <Flex justify='space-between' className={classes.main_head}>
                <div>
                    <h1>Вам может понравиться

                    </h1>
                    <p>Я никогда никому не прощу решение получить вещь каким-либо образом.

                    </p>
                </div>
                <Flex className={classes.flex} gap={16} align='center'>
                    <Flex gap={16}>
                        <div className="swiper-button-next"><LeftOutlined /></div>
                        <div className="swiper-button-prev"><RightOutlined /></div>
                    </Flex>
                    <Link to={'catalog'}>
                        <MainBtn title='меню' icon={<RightCircleOutlined />} size={55} />
                    </Link>

                </Flex>

            </Flex>
            <Swiper
                // slidesPerView={4}
                breakpoints={{

                    // when window width is >= 480px
                    580: {
                        slidesPerView: 1,

                    },
                    // when window width is >= 640px
                    970: {
                        slidesPerView: 1,

                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,

                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                }}
                className={classes.Swiper}
            >
                {data.map((item: IProduct) => (
                    <SwiperSlide>
                        <SwiperItem
                            id={`${item.id}`}
                            image={item.iiko_image}
                            title={item.title}
                            desprition={item.description}
                            rate={4}
                            price={item.price}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    )
}

export default ProductSlider
