import React, { FC } from 'react'
import classes from './MiniInfoSection.module.scss'
import { AnimateKeyframes } from 'react-simple-animate'


const MiniInfoSectionAbout: FC = () => {
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
                        <h2>Years Experiense</h2>
                    </div>
                </div>
            </div>
            <div className={classes.main_rigth}>
                <div>
                    <h1>We are doing more than
                        you expect

                    </h1>
                    <p>
                        Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.
                        Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default MiniInfoSectionAbout
