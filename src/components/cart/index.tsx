import React from 'react';
import { Layout, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CartState } from '../../reducers/cartReducer';
import './style.css';
import { ProductProps } from '../products';
import { DeleteFilled } from '@ant-design/icons';
import { removeProduct } from '../../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector<CartState, CartState['products']>(
    (state) => state.products
  );

  const handleRemoveProductFromCart = (product: ProductProps) => {
    dispatch(removeProduct(product));
  };

  return (
    <Layout>
      {console.log(cartProducts)}
      <Layout.Content style={{ background: 'white', padding: '100px' }}>
        {cartProducts.products.map((product: ProductProps, index: number) => (
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
      </Layout.Content>
    </Layout>
  );
};
export default Cart;
