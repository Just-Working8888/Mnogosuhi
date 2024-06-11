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
            <Flex style={{ marginBottom: '10px' }} align='center' gap={10}>
                <Avatar size={'large'} src={<img src={avatar?.includes('no_image') ? "https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" : avatar} alt="avatar" />} />
                <b>{user}</b>
            </Flex>
            <p>{desprition}</p>
            <Rate style={{ margin: '10px 0 15px', fontSize: '15px' }} value={rate} />
        </div>
    )
}

export default RewievCard
