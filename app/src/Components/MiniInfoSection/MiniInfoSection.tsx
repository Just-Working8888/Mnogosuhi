import React, { FC } from 'react'
import classes from './MiniInfoSection.module.scss'
import { AnimateKeyframes } from 'react-simple-animate'
import { Flex } from 'antd'

const MiniInfoSection: FC = () => {
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
                        <img width={'100%'} height={'100%'} src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/interior.jpg" alt="" />
                    </AnimateKeyframes>

                </div>
                <div className={classes.main_left_back}>

                </div>
                <div className={classes.main_left_exp}>
                    <div>
                        <h1>17</h1>
                        <h2>Многолетний опыт</h2>
                    </div>
                </div>
            </div>
            <div className={classes.main_rigth}>
                <h1>Мы делаем больше, чем вы ожидаете
                </h1>
                <Flex gap={16} className={classes.main_rigth_item}>
                    <h1>01</h1>
                    <div>
                        <h2>
                        Мы находимся в центре города
                        </h2>
                        <h3>
                        Более того, никто не простит потребности настоящего выбирать вещь в моменты, в которую никогда не попадет.                        </h3>
                    </div>
                </Flex>
                <Flex gap={16} className={classes.main_rigth_item}>
                    <h1>02</h1>
                    <div>
                        <h2>
                        Мы находимся в центре города
                        </h2>
                        <h3>
                        Более того, никто не простит потребности настоящего выбирать вещь в моменты, в которую никогда не попадет.                        </h3>
                    </div>
                </Flex>
                <Flex gap={16} className={classes.main_rigth_item}>
                    <h1>03</h1>
                    <div>
                        <h2>
                        Мы находимся в центре города
                        </h2>
                        <h3>
                        Более того, никто не простит потребности настоящего выбирать вещь в моменты, в которую никогда не попадет.                        </h3>
                    </div>
                </Flex>
            </div>
        </div>
    )
}

export default MiniInfoSection
