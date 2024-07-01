import classes from "./TablePage.module.scss";
import { FC, useEffect, useState } from "react";
import { BreadCrumps, ProduckCard, ProductMenu, ProductSection, ProductTable, PromotionSection } from "Components";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchCategories } from "store/reducers/Categories";
import { Button, Flex, Pagination } from "antd";
import { fetchProduct } from "store/reducers/productReduser";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { formatParams } from "helpers/convertProps";
import { setCategory, setOffcet } from "store/slices/windowSlice";
import { clearData } from "store/slices/productSlice";
import { createTableOrder } from "store/reducers/TableOrderReduser";
import { useParams } from "react-router-dom";
import { fetchTableById } from "store/reducers/tableReduser";



const TablePage: FC = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.categories)
    const { menuprops } = useAppSelector((state) => state.window)
    const [all, setALl] = useState(false)
    const { table } = useAppSelector((state) => state.table)

    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchCategories({}))
        dispatch(fetchProduct({ filters: formatParams({ menuprops }) }))
        dispatch(fetchTableById({ id: Number(id) }))
    }, [menuprops])

    useEffect(() => {
        if (!localStorage.getItem('table_key')) {
            dispatch(createTableOrder({
                data: {
                    session_key: localStorage.getItem('session_key') as any,
                    menu_table: Number(id),
                    promo_code: true,
                    discount_amount: 0
                }
            })).then((res) => {
                localStorage.setItem('table_key', res.payload?.id)
            })
        }

    }, [id])

    return (
        <>
            <BreadCrumps title={`Mnogosushi стол ${table.title}.`} hrefs={[{ label: 'Главная', href: '/' }, { label: ' Стол ', href: `/table/${id}` },{ label: `${id}`, href: `/table/${id}` }]} />
            <div className={classes.main}>
                <br />
                <Flex gap={15} wrap='wrap'>
                    <Button
                        onClick={() => {
                            dispatch(setOffcet(1))
                            dispatch(clearData())
                            dispatch(setCategory(0))
                        }}
                        style={{ padding: '0 2rem' }}
                        type={
                            menuprops.category === 0
                                ? 'primary'
                                : 'default'}>
                        все
                    </Button>
                    {data.results
                        .slice(0, all === false ? 6 : data.results.length)
                        .map((category) =>
                            <Button
                                onClick={() => {
                                    dispatch(setOffcet(1))
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
                    <ProductTable
                        title="Starters"
                        desprrition="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
                    />
                </div>
                <PromotionSection />
            </div>
        </>
    );
};

export default TablePage;
