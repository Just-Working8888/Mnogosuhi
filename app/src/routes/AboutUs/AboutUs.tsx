import React, { FC } from 'react'
import classes from './AboutUs.module.scss'
import { AboutUsItem, BreadCrumps, MiniInfoSection, MiniInfoSectionAbout, PreFooterComponent, RewueSlider, VideoSection } from 'Components'
import { Flex } from 'antd'
import SectionHead from 'Components/SectionHead/SectionHead'
import CookerCard from 'Components/CookerCard/CookerCard'

const items = [
    {
        "id": "01",
        "title": "We are located in the city center",
        "description": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "id": "02",
        "title": "Fresh ingredients from organic farms",
        "description": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "id": "03",
        "title": "Own fast delivery. 30 min Maximum",
        "description": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "id": "04",
        "title": "Professional, experienced chefs",
        "description": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "id": "05",
        "title": "The highest standards of service",
        "description": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    }
]


const AboutUs: FC = () => {
    return (
        <>
            <BreadCrumps title='About us' hrefs={[{ label: 'Home', href: '/' }, { label: 'About us', href: '/about' },]} />
            <br /><br />
            <div className={classes.main}>
                <MiniInfoSectionAbout />

                <Flex wrap='wrap'>
                    {
                        items.map((item) => <div className={classes.aboutItem} > <AboutUsItem title={item.title} number={item.id} desprition={item.description} /></div>)}
                </Flex>
                <VideoSection />
                <div>

                    <SectionHead
                        href="/about"
                        title="They will cook for you"
                        despririon="Consectetur numquam poro nemo veniameligendi rem adipisci quo modi."
                        btn="more about us"
                    />
                    <br /><br />
                    <Flex wrap="wrap">
                        <CookerCard />
                        <CookerCard />
                        <CookerCard />
                        <CookerCard />
                    </Flex>
                </div>
                <RewueSlider />
                <br />
            </div>
            <PreFooterComponent
                title="Download our mobile app."
                desprition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
                bottomContent={<div></div>}
                image="https://png.pngtree.com/png-clipart/20230928/original/pngtree-sushi-on-a-plate-png-image_13163383.png"
                animateImages={true}
            />
        </>
    )
}

export default AboutUs
