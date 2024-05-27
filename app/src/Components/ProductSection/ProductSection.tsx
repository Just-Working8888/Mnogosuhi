import React, { FC } from 'react'
import classes from './ProductSection.module.scss'
import ProduckCard from 'Components/Card/Card'
import { foods } from 'data/test/testData'
type Props = {
    title: string,
    desprrition: string,
    data: any[]
}
const ProductSection: FC<Props> = ({ title, desprrition, data }) => {
    return (
        <div className={classes.main}>
            <div>
                <h1>{title}</h1>
                <p>{desprrition}</p>
                
            </div>
            <div className={classes.main_row}>
                {data.map((item: any) => (
                    <ProduckCard id={item.id} image={item?.image} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default ProductSection
