import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './style.css';

const { Header } = Layout;

const LayoutHeader = () => (
  <Header>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
      <Menu.Item key='1'>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='2'>Top 5 Products</Menu.Item>
      <Menu.Item key='3' style={{ float: 'right' }}>
        <Link to='/cart'>
          Your Cart <span className='badge'>3</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default LayoutHeader;
