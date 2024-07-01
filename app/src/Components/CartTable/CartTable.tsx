import React, { useState, useEffect } from 'react';
import { Table, Image, Space, InputNumber, Button, message, Card, Flex } from 'antd';
import type { TableProps } from 'antd';
import './CartTable.scss'
import { CloseCircleOutlined, LeftCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { ICart, ICartItemPR } from 'store/models/ICart';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { fetchCartItemById, updateCartItem } from 'store/reducers/cartReduser';
import { api } from 'api';
import { removeItem } from 'store/slices/cartSlice';
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';




const CartTable: React.FC = () => {



    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.cart)
   
    useEffect(() => {
        dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))

    }, [])
    const [totalSum, setTotalSum] = useState<number>();
    useEffect(() => {
        setTotalSum(data.items.reduce((sum, item) => {
            return sum + Number(item?.product.price) * item.quantity;
        }, 0))
    }, [data])

    async function delte(id: number) {

        try {

            await api.deleteCartItemById(id).then(() => {
                dispatch(removeItem(id))
                message.success('товар успешно удален из корзины')
            })

        } catch (error) {
            console.log(error);

        }
    }

    const columns: TableProps<any>['columns'] = [
        {
            title: 'Продукт',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                console.log(text, record.product, 'sex');

                return <div className='card_start' style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Image width={90} height={90} src={record.product.iiko_image} />
                    <div className='w-50'>
                        <h4>{record.product.title}</h4>
                        <p>{record.product.description}</p>
                    </div>
                </div>

            }
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => <Counter record={record} />
        },
        {
            title: '',
            key: '',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => `${record.product.price}`,
        },
        {
            title: 'Итого',
            key: 'total',
            render: (text, record) => {
                console.log(record, text, 'fdsfd');

                return record.product.price * record.quantity
            },
        },
        {
            title: '',
            key: 'closr',
            render: (text, record) => <CloseCircleOutlined onClick={() => delte(record.id)} />,
        },
    ];

    return (
        <div>
            <Table className="custom-table" columns={columns} dataSource={data.items} pagination={false} />
            {/* <div style={{ textAlign: 'right', marginTop: '16px', justifyContent: 'end', display: 'flex' }}>
                <Card className='checking_cart' >
                    <Flex justify='space-between' align='center'>
                        <h3>Subtotal:</h3>
                        <p>{totalSum}</p>
                    </Flex>
                    <br />
                    <Flex justify='space-between' align='center'>
                        <h4>Estimated shipping:</h4>
                        <p>$999</p>
                    </Flex>
                    <br />
                    <Flex justify='space-between' align='center'>
                        <h3>Total:</h3>
                        <p>{totalSum}</p>
                    </Flex>
                    <br />
                    <div className='line'></div>
                    <Flex justify='space-between' align='center'>
                        <Flex align='center' gap={14}>
                            <div onClick={() => navigate('/shop')} className='cart_to_checkout_btn'><LeftCircleOutlined /></div>
                            <h4>         Continue shopping</h4>
                        </Flex>
                        <Button onClick={() => navigate('/orders')} type='primary' icon={<UpCircleOutlined />}>
                            checkout
                        </Button>
                    </Flex>


                </Card>
            </div> */}


        </div>
    );
};

export default CartTable;
