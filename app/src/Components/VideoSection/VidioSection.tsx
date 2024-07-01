import React, { FC } from 'react'
import classes from './VideoSection.module.scss'
import { Flex, Tag } from 'antd'
import { ArrowRightOutlined, FireOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { AnimateKeyframes } from 'react-simple-animate'
import { useAppSelector } from 'store/hook'

const VideoSection: FC = () => {
    const { data } = useAppSelector((state) => state.about)
    return (
        <div className={classes.main}>
            <div className={classes.main_container}>
                <div style={{ width: "100%", height: 'fit-content' }}>
                    {/* <Tag>
                        Promo video
                    </Tag> */}
                    <br />
                    <br />
                    <h1>
                        {data.results[0]?.promo_title}
                    </h1>
                    <br /><br />
                    <p>
                        {data.results[0]?.promo_desc}
                    </p>
                    <br /><br />
                    <Flex gap={10} align='center'>
                        <div className={classes.main_container_btn}>
                            <PlayCircleOutlined />  <p> </p> Promo Video
                        </div>


                    </Flex>

                </div>
                <div style={{ width: "100%", height: 'fit-content', position: 'relative' }}>
                    <div className={classes.main_container_image}>
                        <AnimateKeyframes
                            play
                            pause={false}
                            duration={7} // Продолжительность анимации в секундах
                            easeType="ease-in-out" // Тип анимации
                            iterationCount="infinite" // Количество повторений (бесконечно)
                            direction="alternate" // Направление анимации (вперед и назад)
                            keyframes={[
                                'transform: scale(1)', // Начальная позиция
                                'transform: scale(1.2)' // Конечная позиция
                            ]}
                        >
                            <img width={'100%'} height={'100%'} src={data.results[0]?.promo_image} alt="" />
                        </AnimateKeyframes>

                    </div>
                    <AnimateKeyframes
                        play
                        duration={3} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px)', // Начальная позиция
                            'transform: translateY(-30px)' // Конечная позиция
                        ]}
                    >
                        <div className={classes.cirkle}></div>
                    </AnimateKeyframes>
                    <AnimateKeyframes
                        play
                        duration={3} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px)', // Начальная позиция
                            'transform: translateY(-30px)' // Конечная позиция
                        ]}
                    >
                        <div className={classes.cirkle2}></div>
                    </AnimateKeyframes>
                    <AnimateKeyframes
                        play
                        duration={3} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px)', // Начальная позиция
                            'transform: translateY(-30px)' // Конечная позиция
                        ]}
                    >
                        <div className={classes.cirkle3}></div>
                    </AnimateKeyframes>

                </div>


            </div>
        </div>
    )
}

export default VideoSection
