import classes from "./Menu.module.scss";
import { FC, useEffect, useState } from "react";
import { BreadCrumps, ProduckCard, ProductMenu, ProductSection, PromotionSection } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCategories } from "store/reducers/Categories";
import { Button, Flex, Pagination } from "antd";
import { fetchProduct } from "store/reducers/productReduser";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { formatParams } from "helpers/convertProps";
import { setCategory } from "store/slices/windowSlice";
import { clearData } from "store/slices/productSlice";



const Menu: FC = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.categories)
    const { menuprops } = useAppSelector((state) => state.window)
    const [all, setALl] = useState(false)

    useEffect(() => {
        dispatch(fetchCategories({}))
        dispatch(fetchProduct({ filters: formatParams({ menuprops }) }))
    }, [menuprops])

    return (
        <>
            <BreadCrumps title='Mnogosushi menu.' hrefs={[{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }]} />
            <div className={classes.main}>
                <br />
                <Flex gap={15} wrap='wrap'>
                    {data.results
                        .slice(0, all === false ? 6 : data.results.length)
                        .map((category) =>
                            <Button
                                onClick={() => {
                                    dispatch(clearData())
                                    dispatch(setCategory(category.id))
                                }}
                                style={{ padding: '0 2rem' }}
                                type={
                                    menuprops.category === category.id
                                        ? 'primary'
                                        : 'default'}>
                                {category.title}
                            </Button>
                        )}

                    <Button
                        type="dashed"
                        icon={all ? <CaretUpOutlined /> : <CaretDownOutlined />}
                        style={{ padding: '0 2rem' }}
                        onClick={() => setALl(!all)}>
                        {all
                            ? 'Скрыть'
                            : "Показать все"}
                    </Button>
                </Flex>
                <div className={classes.main_row}>
                    <ProductMenu
                        title="Starters"
                        desprrition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
                    />
                </div>
                <PromotionSection />
            </div>
        </>
    );
};

export default Menu;
