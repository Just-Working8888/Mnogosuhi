

import { HeaderComponent } from "Components";

import FooterComponent from "Components/FooterComponent/FooterComponent";
import { Layout } from "antd";
import { setSessionKey } from "helpers/session_key";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
export default function Main() {
    const storedSessionKey = localStorage.getItem('session_key');
    useEffect(() => {
        setSessionKey()
        console.log(storedSessionKey);

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
