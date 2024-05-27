import React, { FC } from 'react'
import classes from './VideoSection.module.scss'
import { Flex, Tag } from 'antd'
import { ArrowRightOutlined, FireOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { AnimateKeyframes } from 'react-simple-animate'

const VideoSection: FC = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main_container}>
                <div style={{ width: "100%", height: 'fit-content' }}>
                    <Tag>
                        Promo video
                    </Tag>
                    <br />
                    <br />
                    <h1>
                        Restaurant is like a theater.
                        Our task is to amaze you!
                    </h1>
                    <br /><br />
                    <p>
                        Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia consectetur ad vero minus neque sit architecto totam distineserunt pariatur adipisci rem aspernatur illum ex!
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
                            <img width={'100%'} height={'100%'} src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/interior.jpg" alt="" />
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
