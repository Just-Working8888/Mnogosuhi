import React, { FC, useState } from 'react'
import classes from './SingleProduckt.module.scss'
import { Button, Flex, Typography } from 'antd'
import { BreadCrumps, Slides } from 'Components'
import Productinfo from 'Components/Producktinfo/Productinfo'
import RewievCard from 'Components/RewievCard/RewievCard'
import ProductSlider from 'Components/ProductSlider/ProductSlider'
const tabItems = [
    {
        id: 0,
        title: "Ingridients",
    },
    {
        id: 1,
        title: "Deteil",
    },
    {
        id: 2,
        title: "Rewue",
    }
]
const tabs = [
    {
        id: 0,
        node: <div className={classes.main_items}>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
            <div className={classes.main_items_item}>
                <h1>Numquam</h1>
                <p>1 pack</p>
            </div>
        </div>
    },
    {
        id: 1,
        node: <p>
            Facilis ratione veritatis asperiores doloremque molestiae delectus iure officia earum dolores sit fugiat, repellendus, neque laboriosam optio culpa quibusdam, magnam totam quos. Mollitia dolorem, culpa, dignissimos quas et voluptates architecto in sit totam, quae animi ratione adipisci nulla ab quasi perferendis quo pariatur dolor magnam inventore. Sequi nisi ex excepturi non harum, asperiores laboriosam ipsum voluptate doloribus incidunt nam eveniet similique unde esse voluptatem minus necessitatibus eaque temporibus quaerat accusantium amet deserunt. Iste, facilis? Illo tenetur, libero, non dicta asperiores quisquam voluptas natus aperiam, at perspiciatis repellat voluptate. Autem non reprehenderit, perferendis.

            Consectetur adipisicing elit. Delectus quibusdam repellendus nesciunt cumque fugit numquam adipisci voluptatum quam, sapiente doloribus ut eaque natus laudantium alias illum quos maiores, quia perferendis.
        </p>
    },
    {
        id: 2,
        node: <div className={classes.rewueRow}>
            <RewievCard
                title='Very tasty'
                desprition='Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!'
                rate={4}
                user='Emma Newman'
                avatar='https://miller.bslthemes.com/starbelly-demo/img/faces/2.jpg'
            />
            <RewievCard
                title='Very tasty'
                desprition='Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!'
                rate={4}
                user='Emma Newman'
                avatar='https://miller.bslthemes.com/starbelly-demo/img/faces/2.jpg'
            />
        </div>
    }
]
const SingleProduckt: FC = () => {
    const [curentTab, setCurentTab] = useState(0)
    return (
        <>
            <BreadCrumps title='Online shop' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Product', href: '/food' }]} />
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
                <ProductSlider />
            </div>
        </>

    )
}

export default SingleProduckt
