import { FC } from "react"
import classes from './FooterComponent.module.scss'
import MainBtn from "Components/MainBtn/MainBtn"
import data from '../../data/test/footerItems.json'
import { Link } from "react-router-dom"
import { FacebookOutlined, FilePdfOutlined, InfoCircleOutlined, InstagramOutlined, TwitterOutlined, VideoCameraOutlined, YoutubeOutlined } from "@ant-design/icons"
import Logo from "Components/Logo/Logo"
import { Button, Flex, Input, Tag } from "antd"


const FooterComponent: FC = () => {

    return (
        <footer className={classes.footer}>

            <nav >

                <Logo />

                <div></div>
                <ol>
                    <li>
                        <TwitterOutlined />
                    </li>
                    <li>
                        <InstagramOutlined />
                    </li>
                    <li>
                        <FacebookOutlined />
                    </li>
                    <li>
                        <YoutubeOutlined />
                    </li>
                </ol>


                <div className={classes.header_cart}>
                    ©  2023 - 2024 Codex.  Все права защищены.
                </div>
            </nav>
        </footer>
    )
}
export default FooterComponent