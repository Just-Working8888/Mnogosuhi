import CartComponent from "Components/CartComponent/CartComponent";
import React from "react";
import classes from './Cart.module.scss'
import { Typography } from "antd";
import { BreadCrumps, CartTable } from "Components";
import CartRow from "Components/CartRow/CartRow";
interface CartProps {

}
const data = [
    {
        key: '1',
        name: {
            title: 'Product 1',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg',
            descriptions: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
        },
        price: 50,
        quantity: 1,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: {
            title: 'Product 2',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/2.jpg',
            descriptions: 'The Koss Porta Pro is a lightweight, on-ear headphone with a retro design and great sound quality.'
        },
        price: 75,
        quantity: 2,
        tags: ['cool', 'tech'],
    },
    {
        key: '1',
        name: {
            title: 'Product 1',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg',
            descriptions: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
        },
        price: 50,
        quantity: 1,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: {
            title: 'Product 2',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/2.jpg',
            descriptions: 'The Koss Porta Pro is a lightweight, on-ear headphone with a retro design and great sound quality.'
        },
        price: 75,
        quantity: 2,
        tags: ['cool', 'tech'],
    },
    {
        key: '3',
        name: {
            title: 'Product 3',
            image: 'https://miller.bslthemes.com/starbelly-demo/img/menu/3.jpg',
            descriptions: 'The Logitech MX Master 3 is a premium wireless mouse with advanced features and ergonomic design.'
        },
        price: 100,
        quantity: 1,
        tags: ['high-tech', 'office'],
    },
];
const Cart: React.FC<CartProps> = () => {
    return (
        <>
            <BreadCrumps title='Your order..' hrefs={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'cart', href: '/cart' }]} />
            <div className={classes.main}>
                <div className={classes.main_desk}>
                    <CartTable />

                </div>

                <div className={classes.main_mob}>
                    {
                        data.map((item) => <CartRow
                            title={item.name.title}
                            desption={item.name.descriptions}
                            quanty={item.quantity}
                            image={item.name.image}
                            price={item.price}
                        />)}
                </div>
            </div>
        </>
    );
}

export default Cart;