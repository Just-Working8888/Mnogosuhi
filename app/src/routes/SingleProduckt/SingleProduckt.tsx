import React, { FC, useEffect, useState } from 'react'
import classes from './SingleProduckt.module.scss'
import { Button, Flex, Modal, Typography } from 'antd'
import { AddRewue, BreadCrumps, LoginModal, ScrollToTop, Slides } from 'Components'
import Productinfo from 'Components/Producktinfo/Productinfo'
import RewievCard from 'Components/RewievCard/RewievCard'
import ProductSlider from 'Components/ProductSlider/ProductSlider'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchProductByID, fetchProductPromo } from 'store/reducers/productReduser'
import { useParams } from 'react-router-dom'
import Protected from 'routes/Protected/Protected'
const tabItems = [
    {
        id: 0,
        title: "Ингредиенты",
    },
    {
        id: 1,
        title: "Детально",
    },
    {
        id: 2,
        title: "Отзывы",
    }
]

const SingleProduckt: FC = () => {
    const [curentTab, setCurentTab] = useState(0)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const data = useAppSelector((state) => state.product.promo.results)
    const { product } = useAppSelector((state) => state.product)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        dispatch(fetchProductPromo({}))
        dispatch(fetchProductByID({ id: Number(id) }))
    }, [id])
    const tabs = [
        {
            id: 0,
            node: <div className={classes.main_items}>
                {product.ingredients?.map((item) => <div className={classes.main_items_item}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>)}

            </div>
        },
        {
            id: 1,
            node: <p>
                {product.description}
            </p>
        },
        {
            id: 2,
            node: <div>

                <div className={classes.rewueRow}>
                    {
                        product.product_reviews?.map((item) => <RewievCard
                            title={''}
                            desprition={item.text}
                            rate={item.stars}
                            user={item.user_username}
                            avatar={item.user_img}
                        />)
                    }

                </div>
                <h3>оставить отзыв</h3>
                <br />
                <Protected fallback={<Button type="primary" onClick={showModal}>
                    войти чтобы оставить отзыв
                </Button>}>
                    <AddRewue />
                </Protected>

            </div>
        }
    ]
    return (
        <>
        <ScrollToTop/>
            <BreadCrumps title={product.title} hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.title, href: '/food' + product.id }]} />
            <div className={classes.main}>
                <br /><br />
                <Productinfo />
                <br />
                <br />
                <Flex wrap='wrap' gap={10}>
                    {
                        tabItems.map((item) =>
                            <Button type={curentTab === item.id ? 'primary' : 'default'} onClick={() => setCurentTab(item.id)} className={classes.main_btn}>
                                {item.title}
                            </Button>
                        )
                    }
                </Flex>
                <br /><br />
                {
                    tabs[curentTab].node
                }
                <br /><br />
                <ProductSlider data={data} />
            </div>

            <Modal className='loginMOdal' onCancel={() => setIsModalOpen(false)} title="" open={isModalOpen} >
                <LoginModal close={handleOk} />
            </Modal>


        </>

    )
}

export default SingleProduckt
