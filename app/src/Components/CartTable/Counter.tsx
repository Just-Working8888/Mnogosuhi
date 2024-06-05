import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from 'store/hook'
import { fetchCartItemById, updateCartItem } from 'store/reducers/cartReduser'

const Counter: FC<any> = ({ record }) => {
    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState<number>(1)
    const selectedProduct = record
    useEffect(() => {
        setQuantity(record.quantity)
    }, [])
    function changeQuantity(action: string) {
        setQuantity(prev => {
            const newQuantity = action === '-' ? prev - 1 : prev + 1;
            dispatch(updateCartItem({ id: selectedProduct.id, data: { ...selectedProduct, quantity: newQuantity } })).then(() => {
                dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))
            });


            return newQuantity;
        });
    }
    return <div className={"cart_count"}>
        <div onClick={() => changeQuantity('-')} className={"cart_count_btn"}>-</div>
        <div className={"cart_count_th"}>{quantity}</div>
        <div onClick={() => changeQuantity('+')} className={"cart_count_btn"}>+</div>
    </div>

}

export default Counter
