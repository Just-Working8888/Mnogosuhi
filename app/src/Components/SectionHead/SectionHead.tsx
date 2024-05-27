import React, { FC } from 'react'
import classes from './SectionHead.module.scss'
import { Flex } from 'antd'
import { RightCircleOutlined } from '@ant-design/icons'
import MainBtn from 'Components/MainBtn/MainBtn'
import { Link, useNavigate } from 'react-router-dom'
type Props = {
    title: string,
    despririon: string,
    href: string,
    icon?: string,
    btn: string
}
const SectionHead: FC<Props> = ({ title, despririon, href, icon, btn }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.main}>
            <Flex justify='space-between' className={classes.main_head}>
                <div>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {despririon}

                    </p>
                </div>
                <Flex gap={16} align='center'>
                    <Link to={href}>
                        <MainBtn title={btn} icon={icon ? icon : <RightCircleOutlined />} size={55} />
                    </Link>
                </Flex>

            </Flex>
        </div>
    )
}

export default SectionHead
