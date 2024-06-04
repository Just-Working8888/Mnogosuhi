import React, { useState, useEffect } from 'react';
import { Table, Image, Space, InputNumber, Button, message } from 'antd';
import type { TableProps } from 'antd';
import './CartTable.scss'
import { CloseCircleOutlined } from '@ant-design/icons';
import { ICart, ICartItemPR } from 'store/models/ICart';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { fetchCartItemById } from 'store/reducers/cartReduser';
import { api } from 'api';
import { removeItem } from 'store/slices/cartSlice';




const CartTable: React.FC = () => {


    const [totalSum, setTotalSum] = useState<number>(0);

    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.cart)
    useEffect(() => {
        dispatch(fetchCartItemById({ id: localStorage.getItem('cart_id') as any }))
    }, [])

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
            title: 'Product',
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
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <div className={"cart_count"}>
                    <div className={"cart_count_btn"}>-</div>
                    <div className={"cart_count_th"}>{record.quantity}</div>
                    <div className={"cart_count_btn"}>+</div>
                </div>
            ),
        },
        {
            title: '',
            key: '',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => `$${record.product.price}`,
        },
        {
            title: 'Total',
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
            <div style={{ textAlign: 'right', marginTop: '16px' }}>
                <h3>Total Sum: ${totalSum}</h3>
            </div>


        </div>
    );
};

export default CartTable;
