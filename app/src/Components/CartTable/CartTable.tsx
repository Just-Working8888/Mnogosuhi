import React, { useState, useEffect } from 'react';
import { Table, Image, Space, InputNumber, Button } from 'antd';
import type { TableProps } from 'antd';
import './CartTable.scss'
import { CloseCircleOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: {
        title: string;
        image: string;
        descriptions: string;
    };
    price: number;
    quantity: number;
    tags: string[];
}

const initialData: DataType[] = [
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

const CartTable: React.FC = () => {
    const [data, setData] = useState<DataType[]>(initialData);
    const [totalSum, setTotalSum] = useState<number>(0);

    useEffect(() => {
        const sum = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalSum(sum);
    }, [data]);

    const handleQuantityChange = (key: string, quantity: number) => {
        const newData = data.map(item => item.key === key ? { ...item, quantity } : item);
        setData(newData);
    };

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
            render: ({ title, image, descriptions }) => (
                <div className='card_start' style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Image width={90} height={90} src={image} />
                    <div className='w-50'>
                        <h4>{title}</h4>
                        <p>{descriptions}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <InputNumber min={1} value={record.quantity} onChange={(value) => handleQuantityChange(record.key, value!)} />
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
            render: (text) => `$${text}`,
        },
        {
            title: 'Total',
            key: 'total',
            render: (text, record) => `$${record.price * record.quantity}`,
        },
        {
            title: '',
            key: 'closr',
            render: () => <CloseCircleOutlined />,
        },
    ];

    return (
        <div>
            <Table className="custom-table" columns={columns} dataSource={data} pagination={false} />
            <div style={{ textAlign: 'right', marginTop: '16px' }}>
                <h3>Total Sum: ${totalSum}</h3>
            </div>
        </div>
    );
};

export default CartTable;
