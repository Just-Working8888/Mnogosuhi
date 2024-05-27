import React, { FC } from 'react'
import classes from './RewueSlider.module.scss'
import ProduckCard from 'Components/Card/Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
//@ts-ignore
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { foods } from 'data/test/testData';
import { Flex } from 'antd';
import MainBtn from 'Components/MainBtn/MainBtn';
import { LeftOutlined, RightCircleOutlined, RightOutlined } from '@ant-design/icons';
import RewievCard from 'Components/RewievCard/RewievCard';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation]);
const RewueSlider: FC = () => {
    return (
        <div className={classes.main}>
            <Flex justify='space-between' className={classes.main_head}>
                <div>
                    <h1>What do you like today?
                    </h1>
                    <p>Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.

                    </p>
                </div>

                <Flex className={classes.flex} gap={16} align='center'>
                    <Flex gap={16}>
                        <div className="swiper-button-next"><LeftOutlined /></div>
                        <div className="swiper-button-prev"><RightOutlined /></div>
                    </Flex>
                    <Link to={'/revies'}>
                        <MainBtn title='all rewues' icon={<RightCircleOutlined />} size={55} />
                    </Link>

                </Flex>

            </Flex>
            <br />
            <br />
            <Swiper
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
                        slidesPerView: 2,

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
                {foods.map((item: any) => (
                    <SwiperSlide style={{ width: "100% !important" }}>
                        <RewievCard
                            title='Very tasty'
                            desprition='Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!'
                            rate={4}
                            user='Emma Newman'
                            avatar='https://miller.bslthemes.com/starbelly-demo/img/faces/2.jpg'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    )
}

export default RewueSlider
