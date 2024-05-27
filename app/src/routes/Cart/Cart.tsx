import CartComponent from "Components/CartComponent/CartComponent";
import React from "react";
import classes from './Cart.module.scss'
import { Typography } from "antd";
import { BreadCrumps, CartTable } from "Components";
interface CartProps {

}

const Cart: React.FC<CartProps> = () => {
    return (
        <>
            <BreadCrumps title='Your order..' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <div className={classes.main}>

                <CartTable />


            </div>
        </>
    );
}

export default Cart;