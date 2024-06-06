

import { HeaderComponent } from "Components";

import FooterComponent from "Components/FooterComponent/FooterComponent";
import { Layout } from "antd";
import { setSessionKey } from "helpers/session_key";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { createCart } from "store/reducers/cartReduser";
export default function Main() {
    const dispatch = useAppDispatch()
    const storedSessionKey = localStorage.getItem('session_key');
    const cart_id = localStorage.getItem('cart_id');
    useEffect(() => {

        if (!storedSessionKey) {
            setSessionKey()
        }
        if (!cart_id) {
            dispatch(createCart({
                data: {
                    session_key: storedSessionKey as any,
                    discount_amount: 1,
                    promo_code: false
                }
            }))
        }


    }, [])
    return (
        <Layout style={{ overflow: "hidden", background: 'black' }}>
            <Layout >
                <HeaderComponent />

                <Outlet />

                <br /><br />

                <br /><br />
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
