import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { CartState } from '../../reducers/cartReducer';
import './style.css';

const { Header } = Layout;

const LayoutHeader = () => {
  const cartState = useSelector<CartState, CartState['products']>(
    (state) => state.products
  );
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>Top 5 Products</Menu.Item>
        <Menu.Item key='3' style={{ float: 'right' }}>
          <Link to='/cart'>
            Your Cart
            <span className='badge'>{cartState.length}</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default LayoutHeader;
