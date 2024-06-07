import React, { FC, useEffect } from 'react'
import classes from './AboutUs.module.scss'
import { AboutUsItem, BreadCrumps, MiniInfoSection, MiniInfoSectionAbout, PreFooterComponent, RewueSlider, VideoSection } from 'Components'
import { Flex } from 'antd'
import SectionHead from 'Components/SectionHead/SectionHead'
import CookerCard from 'Components/CookerCard/CookerCard'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchAboutUs, fetchAboutUsFucts } from 'store/reducers/aboutReduser'
import { fetchEmployes } from 'store/reducers/employeesReduser'

const items = [
    {
        "number": "01",
        "title": "We are located in the city center",
        "text": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "number": "02",
        "title": "Fresh ingredients from organic farms",
        "text": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "number": "03",
        "title": "Own fast delivery. 30 min Maximum",
        "text": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "number": "04",
        "title": "Professional, experienced chefs",
        "text": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
        "number": "05",
        "title": "The highest standards of service",
        "text": "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    }
]


const AboutUs: FC = () => {
    const { data, facts } = useAppSelector((state) => state.about)
    const employes = useAppSelector((state) => state.employes.data)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAboutUs({}))
        dispatch(fetchAboutUsFucts({}))
        dispatch(fetchEmployes({}))
    }, [])
    console.log(data);


    return (
        <>
            <BreadCrumps title='About us' hrefs={[{ label: 'Home', href: '/' }, { label: 'About us', href: '/about' },]} />
            <br /><br />
            <div className={classes.main}>
                <MiniInfoSectionAbout />

                <Flex wrap='wrap'>
                    {
                        facts.results.map((item) => <div className={classes.aboutItem} > <AboutUsItem title={item.title} number={`${item.number}`} desprition={item.text} /></div>)}
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
                        {employes.results.slice(0, 4).map((item) => <CookerCard item={item} />)}
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
