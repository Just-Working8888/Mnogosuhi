import { Avatar, Flex, Rate } from 'antd'
import React, { FC } from 'react'
import classes from './RewievCard.module.scss'
type Props = {
    title: string
    desprition: string
    avatar?: string
    rate: number,
    user: string


}
const RewievCard: FC<Props> = ({ title, desprition, avatar, rate, user }) => {
    return (
        <div className={classes.card}>
            {/* <b style={{ fontSize: '16px' }} className={classes.card_title}>{title}</b> */}
            <br />
            <Rate style={{ margin: '10px 0 15px', fontSize: '15px' }} value={rate} />
            <br />
            <p>{desprition}</p>
            <Flex align='center' gap={10}>
                <Avatar size={'large'} src={<img src={avatar ? avatar : ""} alt="avatar" />} />
                <b>{user}</b>
            </Flex>
        </div>
    )
}

export default RewievCard
