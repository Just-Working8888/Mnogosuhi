import React, { FC } from 'react'
import classes from './PromotionCard.module.scss'
import { UpCircleOutlined } from '@ant-design/icons'
import { AnimateKeyframes } from 'react-simple-animate'
type Props = {
    discount: string,
    title: string,
    desprition: string,
    image: string
}
const PromotionCard: FC<Props> = ({ discount, title, desprition, image }) => {
    return (
        <div className={classes.PromotionCard}>
            <div className={classes.PromotionCard_left}>
                <h1>{discount}</h1>
                <h2>{title}</h2>
                <p>{desprition}</p>
                <br />
                <button>
                    <UpCircleOutlined />    Get it now
                </button>
            </div>
            <AnimateKeyframes
                play
                pause={false}
                duration={1} // Продолжительность анимации в секундах
                easeType="ease-in-out" // Тип анимации
                iterationCount="infinite" // Количество повторений (бесконечно)
                direction="alternate" // Направление анимации (вперед и назад)
                keyframes={[
                    'transform: translateY(0px) ', // Начальная позиция
                    'transform: translateY(-30px)' // Конечная позиция
                ]}
            >
                <div style={{ left: '20%', top: '10px' }} className={classes.cerckle2}></div>
            </AnimateKeyframes>
            <div className={classes.PromotionCard_left}>
                <AnimateKeyframes
                    play
                    pause={false}
                    iterationCount="infinite"
                    direction="alternate"
                    duration={1}
                    keyframes={[
                        'transform: scale(1.1) rotate(0.01turn)',
                        'transform: scale(1) rotate(0)',
                    ]}
                >
                    <img src={image} alt="" />
                </AnimateKeyframes>

                <AnimateKeyframes
                    play
                    pause={false}
                    duration={5} // Продолжительность анимации в секундах
                    easeType="ease-in-out" // Тип анимации
                    iterationCount="infinite" // Количество повторений (бесконечно)
                    direction="alternate" // Направление анимации (вперед и назад)
                    keyframes={[
                        'transform: translateY(0px) translateX(0px)', // Начальная позиция
                        'transform: translateY(-100px) translateX(15px)' // Конечная позиция
                    ]}
                >
                    <div className={classes.circle}></div>
                </AnimateKeyframes>
                <AnimateKeyframes
                    play
                    pause={false}
                    duration={3} // Продолжительность анимации в секундах
                    easeType="ease-in-out" // Тип анимации
                    iterationCount="infinite" // Количество повторений (бесконечно)
                    direction="alternate" // Направление анимации (вперед и назад)
                    keyframes={[
                        'transform: translateY(0px) ', // Начальная позиция
                        'transform: translateY(-30px)' // Конечная позиция
                    ]}
                >
                    <div className={classes.cerckle2}></div>
                </AnimateKeyframes>

            </div>

        </div>
    )
}

export default PromotionCard
