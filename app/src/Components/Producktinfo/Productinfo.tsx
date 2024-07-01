import React, { FC, useEffect, useState } from 'react'
import classes from './Productinfo.module.scss'
import { Button, Card, Flex, Image, Rate, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { useParams } from 'react-router-dom'
import { addCartItem, updateCartItem } from 'store/reducers/cartReduser'
import { fetchProductByID } from 'store/reducers/productReduser'

const Productinfo: FC = () => {
    const { product } = useAppSelector((state) => state.product)
    const { data } = useAppSelector((state) => state.cart)
    const [quantity, setQuantity] = useState<number>(1)
    const [isDisabled, setIsDisabled] = useState(false)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [selectedProduct, setSelectedProduct] = useState(data.items.find((item) => item.product.id === Number(id)))



    function add() {
        const dataa = {
            quantity: quantity,
            total: Number(product.price) * quantity,
            cart: Number(localStorage.getItem('cart_id')) as any,
            product: Number(id)
        }
        dispatch(addCartItem({ data: dataa }))
            .then(() => message.success('товар успешно удален из корзины'))
            .then(() => dispatch(fetchProductByID({ id: Number(id) })))

        setIsDisabled(true)

    }
    useEffect(() => {
        const selectedProduct = data.items.find((item) => item.product.id === Number(id))
        setSelectedProduct(data.items.find((item) => item.product.id === Number(id)))
        setIsDisabled(selectedProduct ? true : false)
        if (selectedProduct) {
            setQuantity(selectedProduct.quantity)
        }
    }, [data, id])
    function changeQuantity(action: string) {
        setQuantity(prev => {
            const newQuantity = action === '-' ? prev - 1 : prev + 1;
            if (selectedProduct) {
                dispatch(updateCartItem({ id: selectedProduct.id, data: { ...selectedProduct, quantity: newQuantity } }));
            }
            return newQuantity;
        });
    }

    return (
        <div className={classes.main}>
            <div className={classes.main_left}>
                <Image height={"50vh"} width={'100%'} style={{ objectFit: 'cover' }} src={product.iiko_image} />

            </div>
            <div className={classes.main_right}>
                <div className={classes.main_right_title}>
                    <Card style={{ width: "100%" }}>
                        <h1>    {product.title}</h1>
                    </Card>
                    <div className={classes.main_right_title_price}>
                        <span>c</span> {product.price}
                    </div>
                </div>
                <br />
                <Flex align='center' gap={10}>
                    <Rate value={1} />
                    <p>(4 ratings)</p>
                </Flex>
                <br />
                <p>{product.description}</p>
                <br />
                <Flex className={classes.flex} justify='space-between'>
                    <div className={classes.main_right_item}>
                        <h1>01</h1>
                        <h2>Добавьте в корзину и оформите заказ</h2>
                        <h3>Больше никто не придет с сумочкой</h3>
                    </div>
                    <div className={classes.main_right_item}>
                        <h1>02</h1>
                        <h2>Введите свой номер телефона и адрес</h2>
                        <h3>У тебя никогда не будет выбора.</h3>
                    </div>
                    <div className={classes.main_right_item}>
                        <h1>03</h1>
                        <h2>Наслаждайтесь любимой едой дома!</h2>
                        <h3>Для текущих нужд</h3>
                    </div>
                </Flex>
                <br />
                <br />
                <Flex gap={16}>
                    {selectedProduct
                        ?
                        <Flex align='center'>
                            <div onClick={() => {
                                changeQuantity('-')
                            }} className={classes.main_right_toggle}>-</div>
                            <div className={classes.main_right_count}>
                                {quantity}
                            </div>
                            <div onClick={() => {
                                changeQuantity('+')
                            }} className={classes.main_right_toggle}>+</div>
                        </Flex>
                        :
                        <Flex align='center'>
                            <div onClick={() => setQuantity(prev => prev - 1)} className={classes.main_right_toggle}>-</div>
                            <div className={classes.main_right_count}>
                                {quantity}
                            </div>
                            <div onClick={() => setQuantity(prev => prev + 1)} className={classes.main_right_toggle}>+</div>
                        </Flex>
                    }

                    <Button onClick={add} disabled={isDisabled} type='primary'>
                        <Flex gap={16}>
                            <ShoppingCartOutlined style={{ fontSize: 24 }} />
                    В корзину
                        </Flex>
                    </Button>
                </Flex>
            </div>
        </div >
    )
}

export default Productinfo
