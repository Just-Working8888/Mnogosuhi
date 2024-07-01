// Header.tsx
import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss'
import { Badge, Button, Card, Drawer, Flex, Image, List, Space } from 'antd';
import { CloseOutlined, FacebookOutlined, FormOutlined, InstagramOutlined, MenuOutlined, MoreOutlined, ShoppingCartOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import Logo from 'Components/Logo/Logo';
import items from '../../data/test/headeritems.json'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import SmailCartItem from 'Components/SmallCartItem/SmailCartItem';
import MobileNav from 'Components/MobileNav/MobileNav';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { fetchCartItemById } from 'store/reducers/cartReduser';
import { fetchTableById } from 'store/reducers/tableReduser';
import { fetchOrderItemById } from 'store/reducers/TableOrderReduser';
import { ReplaceCreateOrder } from 'helpers/ReCreateOrder';
import { fetchSetting } from 'store/reducers/settingReduser';
import Protected from 'routes/Protected/Protected';
import { deleteCookie } from 'helpers/cookies';
import icon from '../../assets/icon/blackLogo (1).png'

const contact = [
    {
        href: '#',
        value: 'lorem',
        title: 'Ant Design Title 1',
    },
    {
        href: '#',
        value: 'lorem',
        title: 'Ant Design Title 2',
    },
    {
        href: '#',
        value: 'lorem',
        title: 'Ant Design Title 3',
    },
    {
        href: '#',
        value: 'lorem',
        title: 'Ant Design Title 4',
    },
];

const instagram = [
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "1"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "2"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "3"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "4"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "5"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "6"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "7"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "8"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "id": "9"
    }
]

const latest = [
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Yellowstripe scad",
        "desprition": "program",
        "id": "1"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Japanese littleneck",
        "desprition": "dedicated",
        "id": "2"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Wuchang bream",
        "desprition": "man",
        "id": "3"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Largehead hairtail",
        "desprition": "Configuration",
        "id": "4"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Capelin",
        "desprition": "Avon",
        "id": "5"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Yellowfin tuna",
        "desprition": "imitate",
        "id": "6"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Goldstripe sardinella",
        "desprition": "Valley",
        "id": "7"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Cape horse mackerel",
        "desprition": "payment",
        "id": "8"
    },
    {
        "image": "https://loremflickr.com/640/480/food",
        "title": "Milkfish",
        "desprition": "Southeast",
        "id": "9"
    }
]
const HeaderComponent: React.FC = () => {
    const [top, setTop] = useState<boolean>(true)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false)
    const { data } = useAppSelector((state) => state.cart)
    const tableCart = useAppSelector((state) => state.tableCart.data)
    const navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const setting = useAppSelector((state) => state.setting.data.results[0])

    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    useEffect(() => {
        dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))
        dispatch(fetchOrderItemById({ id: localStorage.getItem('table_key') as any }))
        dispatch(fetchSetting({}))

    }, [])
    const onClose = () => {
        setOpen(false);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    useEffect(() => {
        document.title = setting?.title;
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.rel = 'icon'
        linkElement.href = icon;
        document.head.appendChild(linkElement)
    }, [setting]);

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


                    {currentPath.includes('menu') ? <div onClick={() => setOpen3(true)} className={classes.header_cart_icon}>
                        <Badge count={tableCart.items.length} offset={[15, -10]} >
                            <FormOutlined style={{ fontSize: '20px' }} />
                        </Badge>


                    </div> : <div onClick={() => setOpen(true)} className={classes.header_cart_icon}>
                        <Badge count={data.items.length} offset={[15, -10]} >
                            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                        </Badge>

                    </div>}

                    <div className={classes.mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
                        {
                            mobileOpen ? <CloseOutlined style={{ fontSize: '20px' }} /> : <MenuOutlined style={{ fontSize: '20px' }} />
                        }
                    </div>

                    <div onClick={() => setOpen2(true)}>
                        <MoreOutlined style={{ fontSize: '20px' }} />
                    </div>
                    <Protected fallback={<>  <Button onClick={() => navigate('/login')} type='primary'>Войти</Button></>}>
                        <Button onClick={() => deleteCookie('access_token')} type='primary'>выйти</Button>
                    </Protected>

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
                        data.items.map((item: any) => <SmailCartItem title={item.product.title} image={item?.product.iiko_image} price={item?.product.price} />)
                    }
                </div>
            </Drawer>
            <Drawer
                title={`Table`}
                placement="right"
                onClose={() => setOpen3(false)}
                size={'large'}
                open={open3}
                footer={
                    <Flex className={classes.headFooter} gap={16}>
                        <Button onClick={() => {
                            setOpen(false)
                            navigate(`/tablebiling/${id}`)
                        }} >Checkout</Button>
                    </Flex>
                }
                extra={
                    <Space>
                        <Button onClick={() => setOpen3(false)}>Cancel</Button>
                    </Space>
                }
            >

                <div className={classes.header_cartItems}>
                    <h3>your order</h3>
                    {
                        tableCart?.items?.map((item: any) => <SmailCartItem title={item.product.title} image={item?.product.iiko_image} price={item?.product.price} />)
                    }
                </div>
            </Drawer>
            <Drawer
                title={`Contact`}
                placement="right"
                onClose={onClose2}

                open={open2}
                footer={
                    <Flex style={{ padding: '2rem' }} justify='center' gap={15}>


                        <TwitterOutlined />


                        <InstagramOutlined />


                        <FacebookOutlined />


                        <YoutubeOutlined />


                    </Flex>
                }
                extra={
                    <Space>

                    </Space>
                }
            >

                <Card title={'contact'}>
                    <Flex justify='space-between'>
                        <div>email</div>
                        <Link to={setting?.email}>{setting?.email}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>telegram</div>
                        <Link to={setting?.telegram}>{setting?.telegram}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>facebook</div>
                        <Link to={setting?.facebook}>{setting?.facebook}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>phone</div>
                        <Link to={setting?.phone}>{setting?.phone}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>instagram</div>
                        <Link to={setting?.instagram}>{setting?.instagram}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>whatsapp</div>
                        <Link to={setting?.whatsapp}>{setting?.whatsapp}</Link>
                    </Flex>
                    <br />
                    <Flex justify='space-between'>
                        <div>tiktok</div>
                        <Link to={setting?.tiktok}>{setting?.tiktok}</Link>
                    </Flex>
                    <br />
                </Card>
                <br />
                {/* <Card title={'instagram'}>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Flex gap={3} wrap='wrap'>
                            {
                                instagram.map((item) => <Image height={90} style={{ objectFit: 'cover' }} width={'calc(33% - 3px)'} src={item.image} />
                                )
                            }
                        </Flex>

                    </Image.PreviewGroup>
                </Card> */}
                <br />
                <Card title={'последние публикации'}>
                    <List
                        itemLayout="horizontal"
                        dataSource={latest.slice(0, 4)}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta

                                    title={<Flex align='center' gap={10}>
                                        <Image width={"33%"} src={item.image} />
                                        <div className={classes.titles_ofSider}>
                                            <span>{item.title}</span>
                                            <br />
                                            <p>{item.desprition}</p>
                                        </div>
                                    </Flex>}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
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
