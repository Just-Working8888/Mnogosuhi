import { Flex } from 'antd'
import React, { FC } from 'react'
import classes from './AboutUsItem.module.scss'
type Props = {
    number: string
    title: string
    desprition: string
}
const AboutUsItem: FC<Props> = ({ number, title, desprition }) => {
    return (
        <Flex gap={16} className={classes.item}>
            <h1>{number}</h1>
            <div>
                <h2>{title}
                </h2>
                <h3>
                    {desprition}
                </h3>
            </div>
        </Flex>
    )
}

export default AboutUsItem
