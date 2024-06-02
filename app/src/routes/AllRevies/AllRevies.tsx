import { BreadCrumps, PreFooterComponent } from 'Components'
import React, { FC, useEffect } from 'react'
import classes from './AllRevies.module.scss'
import { Avatar, List, Pagination, Space } from 'antd'
import revies from '../../data/test/revies.json'
import IconContext from '@ant-design/icons/lib/components/Context'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import RewievCard from 'Components/RewievCard/RewievCard'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchReviews } from 'store/reducers/reviewsReduser'
import { IReviews } from 'store/models/IReviews'
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const AllRevies: FC = () => {
    const { data } = useAppSelector((state) => state.reviews)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchReviews({}))
    }, [])
    console.log(data);

    return (
        <div>
            <BreadCrumps title='Feedback from our guests' hrefs={[{ label: 'Home', href: '/' }, { label: 'reviews', href: '/revies' },]} />
            <div className={classes.main}>
                <br />
                <div>
                    <div className={classes.main_container}>
                        {data.map((item) =>
                            <RewievCard
                                title={item.text}
                                desprition={item.text}
                                avatar={item.user_img}
                                rate={item.stars}
                                user={item.user_username}
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
