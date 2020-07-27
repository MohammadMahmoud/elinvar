import React from 'react';
import { Layout, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CartState } from '../../reducers/cartReducer';
import { Product } from '../../types';
import { DeleteFilled } from '@ant-design/icons';
import { removeProduct } from '../../actions/cartActions';
import './style.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector<CartState, CartState['products']>(
    (state) => state.products
  );
  const handleRemoveProductFromCart = (product: Product) => {
    dispatch(removeProduct(product));
  };

  return (
    <Layout>
      <Layout.Content style={{ background: 'white', padding: '100px' }}>
        {cartState.map((product: Product, index: number) => (
          <Row style={{ padding: '5px' }} key={index}>
            <Col xs={24} md={3}>
              <img
                style={{ width: '10vw' }}
                src={product.image}
                alt={product.name}
              />
            </Col>
            <Col xs={24} md={18}>
              <p>{product.name}</p>
            </Col>
            <Col xs={24} md={3}>
              <h3>Price € {product.unitPrice}</h3>
              <DeleteFilled
                onClick={() => handleRemoveProductFromCart(product)}
              />
            </Col>
          </Row>
        ))}
        <h3 style={{ textAlign: 'right', marginRight: '6vw' }}>
          Total Price
          <b> {cartState.reduce((acc, curr) => acc + curr.unitPrice, 0)}</b>
        </h3>
      </Layout.Content>
    </Layout>
  );
};
export default Cart;
