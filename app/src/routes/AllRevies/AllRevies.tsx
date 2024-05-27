import { BreadCrumps, PreFooterComponent } from 'Components'
import React, { FC } from 'react'
import classes from './AllRevies.module.scss'
import { Avatar, List, Pagination, Space } from 'antd'
import revies from '../../data/test/revies.json'
import IconContext from '@ant-design/icons/lib/components/Context'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import RewievCard from 'Components/RewievCard/RewievCard'
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const AllRevies: FC = () => {
    return (
        <div>
            <BreadCrumps title='Feedback from our guests' hrefs={[{ label: 'Home', href: '/' }, { label: 'reviews', href: '/revies' },]} />
            <div className={classes.main}>
                <br />
                <div>
                    <div className={classes.main_container}>
                        {revies.slice(0, 8).map((item) =>
                            <RewievCard
                                title={item.title}
                                desprition={item.despretion}
                                avatar={item.avatar}
                                rate={item.rate}
                                user={item.name}
                            />)}
                    </div>
                    <br />
                    <br />
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <PreFooterComponent
                title="Download our mobile app."
                desprition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
                bottomContent={<div></div>}
                image="https://png.pngtree.com/png-clipart/20230928/original/pngtree-sushi-on-a-plate-png-image_13163383.png"
                animateImages={true}
            />
        </div>
    )
}

export default AllRevies
