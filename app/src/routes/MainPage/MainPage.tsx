
import { useAppDispatch, useAppSelector } from "store/hook";
import classes from "./MainPage.module.scss";
import { FC, useEffect } from "react";
import { fetchQuetions } from "store/reducers/producRedusers";
import { Button, Card, Col, Flex, Row, Statistic, StatisticProps, Typography } from "antd";
import { fetchNews } from "store/reducers/newsReduser";

import CountUp from "react-countup";
import { MainBaner, MainCategoriesSection, MiniInfoSection, PreFooterComponent, ProductSection } from "Components";
import { foods } from "data/test/testData";
import ProductSlider from "Components/ProductSlider/ProductSlider";
import SectionHead from "Components/SectionHead/SectionHead";
import CookerCard from "Components/CookerCard/CookerCard";
import { useNavigate } from "react-router-dom";


const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const { Title, Paragraph, Text, Link } = Typography;
const MainPage: FC = () => {
  const { data } = useAppSelector((state) => state.quetions)
  const news = useAppSelector((state) => state.news.data)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchQuetions({}))
    dispatch(fetchNews({}))
  }, [])
  return (
    <div style={{
      backgroundColor: "rgb(255, 255, 255)!important",
      background: "linear - gradient(324deg, rgba(255, 255, 255, 1) 9 %, rgba(249, 250, 252, 1) 9 %, rgba(249, 250, 252, 1) 35 %, rgba(255, 255, 255, 1) 35 %, rgba(255, 255, 255, 1) 53 %, rgba(249, 250, 252, 1) 53 %, rgba(249, 250, 252, 1) 74 %, rgba(255, 255, 255, 1) 74 %)!important"
    }}>
      <MainBaner />
      <div className={classes.main}>
        <MiniInfoSection />
        <div>
          <SectionHead
            href="shop"
            title="What do you like today?"
            despririon="Consectetur numquam poro nemo veniam
            eligendi rem adipisci quo modi."
            btn="go to shopping now"
          />
          <br />
          <MainCategoriesSection />
        </div>

        <ProductSlider />
        <div>

          <SectionHead
            href="about"
            title="They will cook for you"
            despririon="Consectetur numquam poro nemo veniameligendi rem adipisci quo modi."
            btn="more about us"
          />
          <br /><br />
          <Flex wrap="wrap"   >
            <CookerCard />
            <CookerCard />
            <CookerCard />
            <CookerCard />
          </Flex>
        </div>
        <br />

      </div >
      <PreFooterComponent
        title="Download our mobile app."
        desprition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
        bottomContent={<div></div>}
        image="https://png.pngtree.com/png-clipart/20230928/original/pngtree-sushi-on-a-plate-png-image_13163383.png"
        animateImages={true}
      />
    </div>

  );
};

export default MainPage;
