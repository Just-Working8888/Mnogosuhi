import React, { FC } from 'react'
import classes from './MainBaner.module.scss'
import { Button, Flex, Tag } from 'antd'
import { ArrowRightOutlined, FireOutlined } from '@ant-design/icons'
import { AnimateKeyframes } from 'react-simple-animate'
import { useNavigate } from 'react-router-dom'

const MainBaner: FC = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.main}>
            <div className={classes.main_container}>
                <div style={{ width: "100%", height: 'fit-content' }}>
                    <Tag>
                        Hi, new friend!
                    </Tag>
                    <br />
                    <br />
                    <h1>
                        We do not cook,
                        we create your
                        emotions!
                    </h1>
                    <p>
                        Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.
                    </p>
                    <Flex gap={10} align='center'>
                        <div onClick={() => navigate('/catalog')} className={classes.main_container_btn}>
                            <FireOutlined />  <p> </p> menu
                        </div>
                        <div onClick={() => navigate('/about')} className={classes.main_container_cercle}>
                            <ArrowRightOutlined />
                        </div>
                        about
                    </Flex>

                </div>
                <div>
                    <AnimateKeyframes
                        play
                        pause={false}
                        duration={4} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px) ', // Начальная позиция
                            'transform: translateY(30px)' // Конечная позиция
                        ]}
                    >
                        <img className={classes.mainImage} width={550} src="https://i.pinimg.com/originals/48/b4/27/48b4275d5b422617473a90dcdc5eb6fb.png" alt="" />
                    </AnimateKeyframes>
                    <AnimateKeyframes
                        play
                        pause={false}
                        duration={3} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px) translateX(-10px) ', // Начальная позиция
                            'transform: translateY(-60px) translateX(-0px)' // Конечная позиция
                        ]}
                    >
                        <img className={classes.abs} style={{ right: '-60px' }} width={100} src="https://images.vexels.com/media/users/3/230458/isolated/preview/e6c977c2fd1f7492e9f21d43f2166f3d-chopsticks-and-sushi-flat.png" alt="" />
                    </AnimateKeyframes>
                    <AnimateKeyframes
                        play
                        pause={false}
                        duration={4} // Продолжительность анимации в секундах
                        easeType="ease-in-out" // Тип анимации
                        iterationCount="infinite" // Количество повторений (бесконечно)
                        direction="alternate" // Направление анимации (вперед и назад)
                        keyframes={[
                            'transform: translateY(0px) translateX(10px) ', // Начальная позиция
                            'transform: translateY(-50px) translateX(-0px)' // Конечная позиция
                        ]}
                    >
                        <img width={80} src="https://cdn-icons-png.flaticon.com/512/2252/2252075.png" alt="" />
                    </AnimateKeyframes>
                </div>


            </div>
        </div>
    )
}

export default MainBaner
