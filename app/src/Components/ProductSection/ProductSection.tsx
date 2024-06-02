import React, { FC } from 'react'
import classes from './ProductSection.module.scss'
import ProduckCard from 'Components/Card/Card'
import { foods } from 'data/test/testData'
import { IProduct } from 'store/models/IProduct'
type Props = {
    title: string,
    desprrition: string,
    data: IProduct[]
}
const ProductSection: FC<Props> = ({ title, desprrition, data }) => {
    return (
        <div className={classes.main}>
            <div>
                <h1>{title}</h1>
                <p>{desprrition}</p>

            </div>

            <div className={classes.main_row}>
                {data.map((item: IProduct) => (
                    <ProduckCard
                        id={`${item.id}`}
                        image={item.iiko_image}
                        title={item.title}
                        desprition={item.description}
                        rate={4}
                        price={item.price}
                    />
                ))}
            </div>


        </div>
    )
}

export default ProductSection
