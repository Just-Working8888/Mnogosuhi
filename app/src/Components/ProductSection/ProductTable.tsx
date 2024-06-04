import { FC } from 'react'
import classes from './ProductSection.module.scss'
import ProduckCard from 'Components/Card/Card'
import { IProduct } from 'store/models/IProduct'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchLoadProduct, fetchProduct } from 'store/reducers/productReduser'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Divider, Skeleton } from 'antd'
import { formatParams } from 'helpers/convertProps'
import { setOffcet } from 'store/slices/windowSlice'
import SwiperItem from 'Components/ShoppingSlider/SwiperSlide/SwiperSlide'
import ProductTableCard from 'Components/ProductTableCard/ProductTableCard'
type Props = {
    title: string,
    desprrition: string,

}
const ProductTable: FC<Props> = ({ title, desprrition }) => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.product.data.results)
    const hasNext = useAppSelector((state) => state.product.data.next)
    const { menuprops } = useAppSelector((state) => state.window)

    function next() {
        dispatch(setOffcet((menuprops.offset + 20)))
    }

    return (
        <div className={classes.main}>
            <div>
                <h1>{title}</h1>
                <p>{desprrition}</p>

            </div>

            <InfiniteScroll
                className={classes.main_row}
                dataLength={data.length}
                next={next}
                hasMore={hasNext !== null}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >

                {data.map((item: IProduct) => (
                    <ProductTableCard
                        id={`${item.id}`}
                        image={item.iiko_image}
                        title={item.title}
                        desprition={item.description}
                        rate={4}
                        price={item.price}
                    />
                ))}

            </InfiniteScroll>


        </div>
    )
}

export default ProductTable
