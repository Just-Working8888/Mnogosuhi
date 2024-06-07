import React, { FC } from 'react'
import classes from './MiniInfoSection.module.scss'
import { AnimateKeyframes } from 'react-simple-animate'
import { useAppSelector } from 'store/hook'


const MiniInfoSectionAbout: FC = () => {
    const { data } = useAppSelector((state) => state.about)

    return (
        <div className={classes.main}>
            <div className={classes.main_left}>
                <div className={classes.main_left_image}>
                    <AnimateKeyframes
                        play
                        pause={false}

                        duration={7} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: scale(1)', // Начальная позиция
                            'transform: scale(1.5)' // Конечная позиция
                        ]}
                    >
                        <img width={'100%'} height={'100%'} src={data.results[0]?.image} alt="" />
                    </AnimateKeyframes>

                </div>
                <div className={classes.main_left_back}>

                </div>
                <div className={classes.main_left_exp}>
                    <div>
                        <h1>{data.results[0]?.exp}</h1>
                        <h2>Years Experiense</h2>
                    </div>
                </div>
            </div>
            <div className={classes.main_rigth}>
                <div>
                    <h1>
                        {data.results[0]?.title}
                    </h1>
                    <p>
                        {data.results[0]?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MiniInfoSectionAbout
