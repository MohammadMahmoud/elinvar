import React from 'react';
import { Layout, Table } from 'antd';
import { ProductProps } from '../products';
import './style.css';

interface CartProps {
  products: ProductProps[];
}

const Cart = ({ products }: CartProps) => {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'Image',
      render: (url: string) => <img src={url} alt={url} />,
    },
    {
      title: 'Product Name',
      className: 'column-money',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'address',
      className: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'address',
      className: 'quantity',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

  const data = [
    {
      key: '1',
      image: 'http://lorempixel.com/400/200/technics/',
      name: '',
      price: '￥300,000.00',
      quantity: 'New York No. 1 Lake Park',
      action: 'X',
    },
  ];

  return (
    <>
      <Layout>
        <Layout.Content style={{ padding: '25px' }}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
          />
        </Layout.Content>
      </Layout>
    </>
  );
};
export default Cart;
