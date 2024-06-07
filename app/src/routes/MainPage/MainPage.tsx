import classes from "./MainPage.module.scss";
import { FC, useEffect } from "react";
import { Flex } from "antd";
import { MainBaner, MainCategoriesSection, MiniInfoSection, PreFooterComponent } from "Components";
import ProductSlider from "Components/ProductSlider/ProductSlider";
import SectionHead from "Components/SectionHead/SectionHead";
import CookerCard from "Components/CookerCard/CookerCard";
import { setSessionKey } from "helpers/session_key";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchProductPromo } from "store/reducers/productReduser";
import { fetchEmployes } from "store/reducers/employeesReduser";

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.product.promo.results)
  const employes = useAppSelector((state) => state.employes.data)



  useEffect(() => {
    dispatch(fetchProductPromo({}))
    dispatch(fetchEmployes({}))
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

        <ProductSlider data={data} />
        <div>

          <SectionHead
            href="about"
            title="They will cook for you"
            despririon="Consectetur numquam poro nemo veniameligendi rem adipisci quo modi."
            btn="more about us"
          />
          <br /><br />
          <Flex wrap="wrap"   >
            <Flex wrap="wrap">
              {employes.results.slice(0, 4).map((item) => <CookerCard item={item} />)}
            </Flex>
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
