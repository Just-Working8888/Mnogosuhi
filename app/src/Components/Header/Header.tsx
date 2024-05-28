// Header.tsx
import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss'
import { Badge, Button, Drawer, Flex, Space } from 'antd';
import { CloseOutlined, MenuOutlined, MoreOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Logo from 'Components/Logo/Logo';
import items from '../../data/test/headeritems.json'
import { useLocation, useNavigate } from 'react-router-dom';
import { foods } from 'data/test/testData';
import SmailCartItem from 'Components/SmallCartItem/SmailCartItem';
import MobileNav from 'Components/MobileNav/MobileNav';

const HeaderComponent: React.FC = () => {
    const [top, setTop] = useState<boolean>(true)
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;

    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    const onClose = () => {
        setOpen(false);
    };
    return (

        <header style={!top ? { height: "80px" } : {}} className={classes.header}>
            <nav style={!top ? { height: "80px" } : {}}>
                <Logo />
                <ol>
                    {
                        items.map((item) => {
                            return <li onClick={() => {
                                navigate(item.href)
                                setMobileOpen(false)
                            }}> <span className={classes.span} style={currentPath === item.href ? {} : { display: 'none' }}>•</span> {item.title}</li>
                        })
                    }
                </ol>
                <div className={classes.header_cart}>
                    <div onClick={() => setOpen(true)} className={classes.header_cart_icon}>
                        <Badge count={10} offset={[15, -10]} >
                            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                        </Badge>

                    </div>
                    <div className={classes.mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
                        {
                            mobileOpen ? <CloseOutlined style={{ fontSize: '20px' }} /> : <MenuOutlined style={{ fontSize: '20px' }} />
                        }
                    </div>

                    <div>
                        <MoreOutlined style={{ fontSize: '20px' }} />
                    </div>
                </div>
            </nav>
            <Drawer
                title={`Cart`}
                placement="right"
                onClose={onClose}
                size={'large'}
                open={open}
                footer={
                    <Flex className={classes.headFooter} gap={16}>
                        <Button onClick={() => {
                            setOpen(false)
                            navigate('/cart')
                        }} type='primary'>View order</Button>
                        <Button onClick={() => {
                            setOpen(false)
                            navigate('/orders')
                        }} >Checkout</Button>
                    </Flex>
                }
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >

                <div className={classes.header_cartItems}>
                    <h3>your order</h3>
                    {
                        foods.slice(0, 6).map((item) => <SmailCartItem title={item.title} image={item.image} price={124} />)
                    }
                </div>
            </Drawer>
            <div className={classes.test}>
                <div style={!mobileOpen ? { height: '1px' } : { height: '100vh', opacity: '1' }} className={classes.all}>
                    <Drawer
                        size={'large'}
                        placement={'top'}
                        closable={false}
                        onClose={() => setMobileOpen(false)}
                        open={mobileOpen}
                        height={'top'}
                        mask={false}
                        style={{ height: '100vh' }}
                        getContainer={false}

                    >
                        <MobileNav setMobileOpen={setMobileOpen} />
                    </Drawer>
                </div>
            </div>
        </header >

    );
};

export default HeaderComponent;
