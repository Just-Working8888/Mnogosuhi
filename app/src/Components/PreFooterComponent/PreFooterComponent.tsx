import React, { FC, ReactNode } from 'react'
import classes from './PreFooterComponent.module.scss'
import { AnimateKeyframes } from 'react-simple-animate'
type Props = {
    title: string
    desprition: string
    image: string,
    bottomContent: ReactNode,
    animateImages: boolean
}
const PreFooterComponent: FC<Props> = ({ title, desprition, image, bottomContent, animateImages }) => {
    return (
        <div className={classes.main}>
            <div className={classes.main_content}>
                <div className={classes.main_content_left}>
                    <h1>
                        {title}
                    </h1>
                    <h2>
                        {desprition}
                    </h2>
                    <div>
                        {bottomContent}
                    </div>
                </div>
                <div className={classes.main_content_right}>

                    <div className={classes.main_content_right_image}>

                        <AnimateKeyframes
                            play
                            pause={false}
                            duration={4} // Продолжительность анимации в секундах
                            easeType="ease-in-out" // Тип анимации
                            iterationCount="infinite" // Количество повторений (бесконечно)
                            direction="alternate" // Направление анимации (вперед и назад)
                            keyframes={[
                                'transform: translateY(0px) ', // Начальная позиция
                                'transform: translateY(-60px)' // Конечная позиция
                            ]}
                        >
                            <div className={classes.cerckle2}></div>
                        </AnimateKeyframes>
                        {animateImages ?
                            <AnimateKeyframes
                                play
                                pause={false}
                                duration={2} // Продолжительность анимации в секундах
                                easeType="ease-in-out" // Тип анимации
                                iterationCount="infinite" // Количество повторений (бесконечно)
                                direction="alternate" // Направление анимации (вперед и назад)
                                keyframes={[
                                    'transform: translateY(0px) ', // Начальная позиция
                                    'transform: translateY(-20px)' // Конечная позиция
                                ]}
                            >
                                <img src={image} alt="" />
                            </AnimateKeyframes>
                            : <img src={image} alt="" />}

                        <AnimateKeyframes
                            play
                            pause={false}
                            duration={3} // Продолжительность анимации в секундах
                            easeType="ease-in-out" // Тип анимации
                            iterationCount="infinite" // Количество повторений (бесконечно)
                            direction="alternate" // Направление анимации (вперед и назад)
                            keyframes={[
                                'transform: translateY(0px) ', // Начальная позиция
                                'transform: translateY(-40px) ' // Конечная позиция
                            ]}
                        >
                            <div className={classes.circleBig}></div>
                        </AnimateKeyframes>
                        <AnimateKeyframes
                            play
                            pause={false}
                            duration={4} // Продолжительность анимации в секундах
                            easeType="ease-in-out" // Тип анимации
                            iterationCount="infinite" // Количество повторений (бесконечно)
                            direction="alternate" // Направление анимации (вперед и назад)
                            keyframes={[
                                'transform: translateY(0px) ', // Начальная позиция
                                'transform: translateY(-70px)' // Конечная позиция
                            ]}
                        >
                            <div className={classes.circle}></div>
                        </AnimateKeyframes>
                        <AnimateKeyframes
                            play
                            pause={false}
                            duration={4} // Продолжительность анимации в секундах
                            easeType="ease-in-out" // Тип анимации
                            iterationCount="infinite" // Количество повторений (бесконечно)
                            direction="alternate" // Направление анимации (вперед и назад)
                            keyframes={[
                                'transform: translateY(0px) ', // Начальная позиция
                                'transform: translateY(-60px)' // Конечная позиция
                            ]}
                        >
                            <div className={classes.cerckle3}></div>
                        </AnimateKeyframes>
                    </div>
                </div>

            </div>
            <div className={classes.main_bg}></div>
        </div>
    )
}

export default PreFooterComponent
